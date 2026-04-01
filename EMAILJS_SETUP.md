# EmailJS Setup Guide

Your contact form is now ready to send real emails! Follow these steps to get it working:

## Step 1: Create an EmailJS Account
1. Go to https://www.emailjs.com/
2. Click **Sign Up** and create a free account
3. Verify your email

## Step 2: Get Your Public Key
1. Log in to EmailJS dashboard
2. Go to **Account** tab
3. Copy your **Public Key** (you'll need it later)

## Step 3: Set Up Email Service
### Option A: Use Gmail (Recommended)
1. In EmailJS dashboard, click **Add Service**
2. Select **Gmail**
3. Click **Connect Account** and authorize with your Gmail
4. Copy the **Service ID** (looks like: `service_xxxxx`)

### Option B: Use Another Email Provider
1. Click **Add Service** 
2. Select your email provider (Outlook, Yahoo, etc.)
3. Follow the authentication steps
4. Copy the **Service ID**

## Step 4: Create Email Template
1. In EmailJS, go to **Email Templates**
2. Click **Create New Template**
3. Use this template name: `contact_form` (or customize it)
4. Set up the template like this:

**Template Content:**
```
Subject: New Portfolio Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

5. Copy the **Template ID** (looks like: `template_xxxxx`)

## Step 5: Update Your Contact Form
Edit [src/components/sections/Contact.jsx](src/components/sections/Contact.jsx) and replace:

```javascript
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");
```
with:
```javascript
emailjs.init("your_public_key_here");
```

And replace:
```javascript
await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
```
with:
```javascript
await emailjs.send("your_service_id_here", "your_template_id_here", {
```

## Example:
```javascript
emailjs.init("p3xZ9mK_qL2nW5rT");

await emailjs.send("service_abc123def", "template_xyz789", {
```

## Step 6: Test Your Contact Form
1. Start your development server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Click "Send Message"
4. Check your email to confirm it arrives!

## Troubleshooting
- **Email not received?** Check your spam folder
- **"Failed to send message" error?** Make sure all IDs are correct and you haven't exceeded the free tier (200 emails/month)
- **Template not found?** Verify the template ID matches exactly

## Free Tier Limits
- 200 emails per month
- No credit card required
- Perfect for a portfolio!

---

For more help, visit: https://www.emailjs.com/docs/
