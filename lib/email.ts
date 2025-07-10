import nodemailer from "nodemailer"

interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
}

interface CollaborationEmailData {
  name: string
  email: string
  company: string
  budget: string
  projectType: string
  message: string
}

// Create Gmail transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

export async function sendContactNotification(data: ContactEmailData) {
  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `New Contact Form: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            📧 New Contact Form Submission
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${data.message}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              📅 Received: ${new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                dateStyle: "full",
                timeStyle: "short",
              })}
            </p>
          </div>

          <div style="text-align: center; margin-top: 20px;">
            <a href="mailto:${data.email}?subject=Re: ${data.subject}" 
               style="background: #007cba; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Reply to ${data.name}
            </a>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log("Contact notification sent successfully")
    return { success: true }
  } catch (error) {
    console.error("Error sending contact notification:", error)
    return { success: false, error }
  }
}

export async function sendContactConfirmation(data: ContactEmailData) {
  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Thank you for contacting Srikesar!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #333; margin-bottom: 10px;">✨ Thank You!</h1>
            <p style="color: #666; font-size: 18px;">Your message has been received</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 25px; border-radius: 10px; margin: 20px 0;">
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              Hi <strong>${data.name}</strong>,
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              Thank you for reaching out! I've received your message about "<strong>${data.subject}</strong>" and I appreciate you taking the time to contact me.
            </p>

            <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #007cba; margin: 0 0 10px 0; font-size: 16px;">What happens next?</h3>
              <ul style="color: #333; margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 5px;">I'll review your message within 24-48 hours</li>
                <li style="margin-bottom: 5px;">You'll receive a personal response from me</li>
                <li>If it's about collaboration, I'll include all relevant details</li>
              </ul>
            </div>

            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to check out my latest content on Instagram or explore my portfolio!
            </p>

            <div style="text-align: center; margin: 25px 0;">
              <a href="https://www.instagram.com/srikesar_official_18" 
                 style="background: #e91e63; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin: 0 10px; display: inline-block;">
                📱 Instagram
              </a>
              <a href="https://srikesar.com/portfolio" 
                 style="background: #333; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin: 0 10px; display: inline-block;">
                💼 Portfolio
              </a>
            </div>

            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
              Best regards,<br>
              <strong>Srikesar</strong><br>
              <span style="color: #666; font-size: 14px;">Fashion & Lifestyle Influencer</span>
            </p>
          </div>

          <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              This is an automated message. Please don't reply to this email.
            </p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log("Contact confirmation sent successfully")
    return { success: true }
  } catch (error) {
    console.error("Error sending contact confirmation:", error)
    return { success: false, error }
  }
}

export async function sendCollaborationNotification(data: CollaborationEmailData) {
  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `🤝 New Collaboration: ${data.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            🤝 New Collaboration Inquiry
          </h2>
          
          <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin: 0; font-size: 16px;">🔥 High Priority: Brand Collaboration</h3>
          </div>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Information:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Company:</strong> <span style="color: #007cba; font-weight: bold;">${data.company}</span></p>
          </div>

          <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Project Details:</h3>
            <p><strong>Budget:</strong> <span style="background: #28a745; color: white; padding: 3px 8px; border-radius: 3px; font-size: 12px;">${data.budget.replace("-", " - ").replace("k", "K").replace("plus", "+")}</span></p>
            <p><strong>Type:</strong> <span style="background: #6f42c1; color: white; padding: 3px 8px; border-radius: 3px; font-size: 12px;">${data.projectType.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</span></p>
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Project Description:</h3>
            <p style="line-height: 1.6; color: #333;">${data.message}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              📅 Received: ${new Date().toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                dateStyle: "full",
                timeStyle: "short",
              })}
            </p>
          </div>

          <div style="text-align: center; margin-top: 20px;">
            <a href="mailto:${data.email}?subject=Re: Collaboration - ${data.company}" 
               style="background: #6f42c1; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin: 0 10px; display: inline-block;">
              Reply to ${data.name}
            </a>
            <a href="mailto:${data.email}?subject=Media Kit - ${data.company}" 
               style="background: #333; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin: 0 10px; display: inline-block;">
              Send Media Kit
            </a>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log("Collaboration notification sent successfully")
    return { success: true }
  } catch (error) {
    console.error("Error sending collaboration notification:", error)
    return { success: false, error }
  }
}

export async function sendCollaborationConfirmation(data: CollaborationEmailData) {
  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Thank you for your collaboration inquiry!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #333; margin-bottom: 10px;">🤝 Thank You!</h1>
            <p style="color: #666; font-size: 18px;">Your collaboration inquiry has been received</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 25px; border-radius: 10px; margin: 20px 0;">
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              Hi <strong>${data.name}</strong>,
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              Thank you for reaching out about collaborating with <strong>${data.company}</strong>! I'm excited about the possibility of working together.
            </p>

            <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #007cba; margin: 0 0 10px 0; font-size: 16px;">Your Inquiry Summary:</h3>
              <p style="margin: 5px 0; color: #333;"><strong>Project:</strong> ${data.projectType.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</p>
              <p style="margin: 5px 0; color: #333;"><strong>Budget:</strong> ${data.budget.replace("-", " - ").replace("k", "K").replace("plus", "+")}</p>
            </div>

            <div style="background: #d4edda; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #155724; margin: 0 0 10px 0; font-size: 16px;">What happens next?</h3>
              <ul style="color: #333; margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 5px;">I'll review your project details within 24-48 hours</li>
                <li style="margin-bottom: 5px;">You'll receive a detailed proposal with creative concepts</li>
                <li style="margin-bottom: 5px;">We'll schedule a call to discuss your goals</li>
                <li>I'll provide timeline and pricing details</li>
              </ul>
            </div>

            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              While you wait, feel free to explore my recent work and see how I've helped other brands:
            </p>

            <div style="text-align: center; margin: 25px 0;">
              <a href="https://srikesar.com/portfolio" 
                 style="background: #6f42c1; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin: 0 10px; display: inline-block;">
                💼 Portfolio
              </a>
              <a href="https://www.instagram.com/srikesar_official_18" 
                 style="background: #e91e63; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; margin: 0 10px; display: inline-block;">
                📱 Instagram
              </a>
            </div>

            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h4 style="color: #333; margin: 0 0 10px 0;">Quick Stats:</h4>
              <div style="display: flex; justify-content: space-around;">
                <div>
                  <div style="font-weight: bold; color: #333; font-size: 18px;">450K+</div>
                  <div style="color: #666; font-size: 12px;">Followers</div>
                </div>
                <div>
                  <div style="font-weight: bold; color: #333; font-size: 18px;">8.5%</div>
                  <div style="color: #666; font-size: 12px;">Engagement</div>
                </div>
                <div>
                  <div style="font-weight: bold; color: #333; font-size: 18px;">40+</div>
                  <div style="color: #666; font-size: 12px;">Brands</div>
                </div>
              </div>
            </div>

            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
              Looking forward to creating something amazing together!<br><br>
              Best regards,<br>
              <strong>Srikesar</strong><br>
              <span style="color: #666; font-size: 14px;">Fashion & Lifestyle Influencer</span>
            </p>
          </div>

          <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              This is an automated message. Please don't reply to this email.
            </p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    console.log("Collaboration confirmation sent successfully")
    return { success: true }
  } catch (error) {
    console.error("Error sending collaboration confirmation:", error)
    return { success: false, error }
  }
}
