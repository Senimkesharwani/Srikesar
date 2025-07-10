# Email Integration Setup Guide

This guide will help you set up real email functionality using Resend so that form submissions are sent to your email.

## Prerequisites

1. Resend account (free tier available)
2. Domain verification (optional but recommended)
3. Environment variables configured

## Step 1: Create Resend Account

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address
4. Navigate to API Keys section

## Step 2: Get API Key

1. In Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Name it "Srikesar Website"
4. Copy the API key (starts with `re_`)

## Step 3: Configure Environment Variables

Add these to your `.env.local` file:

\`\`\`env
# Resend Configuration
RESEND_API_KEY=re_your_api_key_here

# Email Addresses
ADMIN_EMAIL=your-email@gmail.com
CONTACT_EMAIL=contact@srikesar.com
\`\`\`

## Step 4: Domain Setup (Optional but Recommended)

### For Custom Domain Emails:

1. In Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., srikesar.com)
4. Add the DNS records to your domain provider:
   - MX Record
   - TXT Record for verification
   - DKIM records

### For Gmail/Personal Email:

If you don't have a custom domain, you can still receive emails at your personal email address. Just set:

\`\`\`env
ADMIN_EMAIL=your-personal-email@gmail.com
\`\`\`

## Step 5: Test Email Functionality

1. Deploy your website to Vercel
2. Fill out the contact form
3. Check your email inbox
4. Verify both notification and confirmation emails

## Step 6: Email Templates

The system sends 4 types of emails:

### 1. Contact Form Notification (to you)
- **Subject**: "New Contact Form Submission: [Subject]"
- **Content**: Contact details, message, reply button
- **Styling**: Professional HTML template

### 2. Contact Form Confirmation (to user)
- **Subject**: "Thank you for contacting me!"
- **Content**: Confirmation, next steps, social links
- **Styling**: Branded HTML template

### 3. Collaboration Notification (to you)
- **Subject**: "🤝 New Collaboration Inquiry from [Company]"
- **Content**: Project details, budget, reply/media kit buttons
- **Styling**: Business-focused HTML template

### 4. Collaboration Confirmation (to user)
- **Subject**: "Thank you for your collaboration inquiry!"
- **Content**: Inquiry summary, next steps, portfolio links
- **Styling**: Professional branded template

## Step 7: Customization

### Update Email Addresses:
\`\`\`typescript
// In lib/email.ts
from: 'Srikesar <noreply@yourdomain.com>',
to: [process.env.ADMIN_EMAIL || 'your-email@gmail.com'],
\`\`\`

### Customize Templates:
- Edit HTML templates in `lib/email.ts`
- Update branding colors and styles
- Add your logo/images
- Modify content and messaging

## Step 8: Production Deployment

1. Add environment variables to Vercel:
   \`\`\`bash
   vercel env add RESEND_API_KEY
   vercel env add ADMIN_EMAIL
   vercel env add CONTACT_EMAIL
   \`\`\`

2. Deploy to production:
   \`\`\`bash
   vercel --prod
   \`\`\`

3. Test forms on live website

## Troubleshooting

### Common Issues:

1. **API Key Invalid**
   - Check if API key is correct
   - Ensure no extra spaces in .env file
   - Verify API key has send permissions

2. **Emails Not Received**
   - Check spam/junk folder
   - Verify ADMIN_EMAIL is correct
   - Check Resend dashboard for delivery status

3. **Domain Issues**
   - Verify DNS records are correct
   - Wait for DNS propagation (up to 24 hours)
   - Use Resend's domain verification tool

4. **Rate Limits**
   - Free tier: 100 emails/day
   - Paid tier: Higher limits available
   - Monitor usage in Resend dashboard

### Debug Steps:

1. Check browser console for errors
2. Check Vercel function logs
3. Check Resend dashboard for email status
4. Test with different email addresses

## Email Features

### ✅ What's Included:

- **Professional HTML Templates** - Beautiful, responsive designs
- **Automatic Notifications** - You get notified of every form submission
- **User Confirmations** - Users get confirmation emails
- **Error Handling** - Graceful fallbacks if emails fail
- **Mobile Responsive** - Emails look great on all devices
- **Brand Consistent** - Matches your website design
- **Action Buttons** - Quick reply and media kit buttons
- **Rich Content** - Project details, stats, and links

### 🚀 Benefits:

- **Never Miss Inquiries** - All forms go to your email
- **Professional Image** - Branded confirmation emails
- **Quick Responses** - Reply buttons for fast communication
- **Detailed Information** - All form data organized clearly
- **Backup Communication** - Email fallback if website is down

## Cost Information

### Resend Pricing:
- **Free Tier**: 3,000 emails/month, 100 emails/day
- **Pro Tier**: $20/month for 50,000 emails/month
- **Business Tier**: $80/month for 100,000 emails/month

For a personal website, the free tier is usually sufficient!

## Security Notes

1. **API Key Security**: Never expose API keys in client-side code
2. **Environment Variables**: Use .env.local for development
3. **Rate Limiting**: Implement form rate limiting if needed
4. **Spam Protection**: Consider adding CAPTCHA for high-traffic sites
5. **Email Validation**: Server-side validation prevents abuse

## Support

For issues with:
- **Resend Service**: [Resend Documentation](https://resend.com/docs)
- **Domain Setup**: Contact your domain provider
- **Code Issues**: Check the implementation in `lib/email.ts`

The email system is now production-ready and will handle all your form submissions professionally! 📧✨
