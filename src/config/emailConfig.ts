// EmailJS Configuration using environment variables
// Make sure your .env file contains the correct values

export const EMAIL_CONFIG = {
  // Get these from your EmailJS dashboard
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_nb63dao',
  TEMPLATE_IDS: {
    CONTACT: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || 'template_contact',
    BOOKING: import.meta.env.VITE_EMAILJS_TEMPLATE_BOOKING || 'template_booking',
  },
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Bb0prip0IA64U9F1v',
} as const;

// Owner's email address
export const OWNER_EMAIL = 'aryan.kr5802@gmail.com';

// EmailJS service URLs (for reference)
export const EMAILJS_URLS = {
  DASHBOARD: 'https://dashboard.emailjs.com/',
  DOCS: 'https://www.emailjs.com/docs/',
} as const;
