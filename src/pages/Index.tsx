import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlotsSection from "@/components/PlotsSection";
import PricingSection from "@/components/PricingSection";
import VideoMapSection from "@/components/VideoMapSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientEngagementSection from "@/components/ClientEngagementSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PlotsSection />
        <PricingSection />
        <VideoMapSection />
        <WhyChooseUs />
        <ClientEngagementSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
