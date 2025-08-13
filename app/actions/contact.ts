"use server"

import { z } from "zod"
import { sendContactNotification, sendContactConfirmation } from "@/lib/email"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate the data
    const validatedData = contactSchema.parse(data)

    console.log("Processing contact form submission:", validatedData)

    // Send notification email to admin (Srikesar)
    const notificationResult = await sendContactNotification(validatedData)

    // Send confirmation email to user
    const confirmationResult = await sendContactConfirmation(validatedData)

    if (!notificationResult.success) {
      console.error("Failed to send notification email:", notificationResult.error)
    }

    if (!confirmationResult.success) {
      console.error("Failed to send confirmation email:", confirmationResult.error)
    }

    // Even if email fails, we still want to show success to user
    // In production, you might want to handle email failures differently
    console.log("Contact form processed successfully")

    return {
      success: true,
      message:
        notificationResult.success && confirmationResult.success
          ? "Thank you for your message! I'll get back to you within 24-48 hours. Check your email for confirmation."
          : "Thank you for your message! I'll get back to you within 24-48 hours. (Note: There was an issue sending the confirmation email, but your message was received.)",
    }
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later or contact me directly at srikesar18@gmail.com",
    }
  }
}
