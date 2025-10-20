# Email Setup Instructions

## Overview
The website now includes email functionality that will send inquiries and booking requests to `aryan.kr5802@gmail.com`. The system uses EmailJS for reliable email delivery with a fallback to the user's email client.

## Features Added
1. **Contact Form**: Sends emails when visitors submit the contact form
2. **Booking Form**: Sends emails when visitors book plots from the pricing section
3. **Owner Email Display**: Added `aryan.kr5802@gmail.com` to contact information
4. **Fallback System**: If EmailJS fails, opens user's email client with pre-filled content

## EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (`aryan.kr5802@gmail.com`)
5. Note down the **Service ID**

### Step 3: Create Email Templates
1. Go to "Email Templates"
2. Create a new template for contact form:
   - Template ID: `template_contact`
   - Subject: `New Contact Form Inquiry from {{from_name}}`
   - Content:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Message: {{message}}
   
   Reply to: {{reply_to}}
   ```

3. Create a new template for booking form:
   - Template ID: `template_booking`
   - Subject: `New Plot Booking Request - {{plan_type}} ({{plot_size}} sq ft)`
   - Content:
   ```
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Plot Size: {{plot_size}} sq ft
   Plan Type: {{plan_type}}
   Message: {{message}}
   
   Reply to: {{reply_to}}
   ```

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Configuration
1. Open `src/lib/emailService.ts`
2. Replace the placeholder values:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_actual_service_id';
   const EMAILJS_TEMPLATE_ID = 'template_contact';
   const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
   ```

## Testing
1. Start the development server: `npm run dev`
2. Fill out the contact form and submit
3. Check your email (`aryan.kr5802@gmail.com`) for the inquiry
4. Try booking a plot from the pricing section
5. Verify booking emails are received

## Fallback System
If EmailJS is not configured or fails, the system will:
1. Open the user's default email client
2. Pre-fill the recipient as `aryan.kr5802@gmail.com`
3. Include all form data in the email body
4. Show a toast notification to the user

## Troubleshooting
- **Emails not sending**: Check EmailJS configuration and service status
- **Template errors**: Verify template IDs match exactly
- **Service errors**: Ensure Gmail service is properly connected
- **Fallback not working**: Check browser email client settings

## Support
For technical support with EmailJS setup, refer to their documentation:
[https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
