import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG, OWNER_EMAIL } from '@/config/emailConfig';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);
};

// Send contact form email
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: OWNER_EMAIL,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_IDS.CONTACT,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

// Send booking form email
export const sendBookingEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  plotSize: string;
  planType: string;
  message?: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      plot_size: formData.plotSize,
      plan_type: formData.planType,
      message: formData.message || 'No additional message',
      to_email: OWNER_EMAIL,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_IDS.BOOKING,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Error sending booking email:', error);
    return { success: false, error };
  }
};

// Fallback: Send email using mailto link (for when EmailJS is not configured)
export const sendEmailFallback = (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
  type?: 'contact' | 'booking';
  plotSize?: string;
  planType?: string;
}) => {
  const subject = formData.type === 'booking' 
    ? `Plot Booking Inquiry - ${formData.planType} (${formData.plotSize} sq ft)`
    : 'Contact Form Inquiry';
  
  const body = formData.type === 'booking'
    ? `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Plot Size: ${formData.plotSize} sq ft
Plan Type: ${formData.planType}
Message: ${formData.message || 'No additional message'}`
    : `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

  const mailtoLink = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};
