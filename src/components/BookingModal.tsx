import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { sendBookingEmail, sendEmailFallback, initEmailJS } from "@/lib/emailService";

interface BookingModalProps {
  planName: string;
  planPrice: string;
  bookingAmount: string;
  children: React.ReactNode;
}

const plotSizes = ["600", "900", "1200", "1600", "1800", "2400", "3600"];

const BookingModal = ({ planName, planPrice, bookingAmount, children }: BookingModalProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plotSize: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Initialize EmailJS
    initEmailJS();
    
    try {
      // Try to send email using EmailJS
      const result = await sendBookingEmail({
        ...formData,
        planType: planName,
      });
      
      if (result.success) {
        toast({
          title: "Booking Request Sent!",
          description: "Thank you for your interest. We'll contact you soon to confirm your booking.",
        });
        setFormData({ name: "", email: "", phone: "", plotSize: "", message: "" });
        setIsOpen(false);
      } else {
        // Fallback to mailto if EmailJS fails
        sendEmailFallback({ 
          ...formData, 
          type: 'booking',
          planType: planName,
          plotSize: formData.plotSize
        });
        toast({
          title: "Opening Email Client",
          description: "Please send the pre-filled email to complete your booking request.",
        });
        setIsOpen(false);
      }
    } catch (error) {
      // Fallback to mailto if there's an error
      sendEmailFallback({ 
        ...formData, 
        type: 'booking',
        planType: planName,
        plotSize: formData.plotSize
      });
      toast({
        title: "Opening Email Client",
        description: "Please send the pre-filled email to complete your booking request.",
      });
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Book {planName} Plot
          </DialogTitle>
          <div className="text-center text-muted-foreground">
            <p className="text-lg">Price: ₹{planPrice}/sq. ft.</p>
            <p className="text-sm">Booking Amount: ₹{bookingAmount}</p>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <Label htmlFor="plotSize">Plot Size (sq. ft.) *</Label>
            <Select
              value={formData.plotSize}
              onValueChange={(value) => setFormData({ ...formData, plotSize: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select plot size" />
              </SelectTrigger>
              <SelectContent>
                {plotSizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size} sq. ft.
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Additional Requirements</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific requirements or questions..."
              className="min-h-[100px]"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="cta"
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Booking Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
