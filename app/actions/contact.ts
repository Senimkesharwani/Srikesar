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

    // Send notification email to admin
    const notificationResult = await sendContactNotification(validatedData)

    // Send confirmation email to user
    const confirmationResult = await sendContactConfirmation(validatedData)

    // Check if emails were sent successfully
    if (!notificationResult.success) {
      console.error("Failed to send notification email:", notificationResult.error)
      throw new Error("Failed to send notification email")
    }

    if (!confirmationResult.success) {
      console.error("Failed to send confirmation email:", confirmationResult.error)
      // Don't throw error for confirmation email failure, just log it
      console.warn("Confirmation email failed, but notification was sent successfully")
    }

    console.log("Contact form processed successfully")

    return {
      success: true,
      message:
        "Thank you for your message! I'll get back to you within 24-48 hours. Check your email for confirmation.",
    }
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.errors[0].message,
      }
    }

    // Check if it's an email service error
    if (error instanceof Error && error.message.includes("email")) {
      return {
        success: false,
        message:
          "There was an issue sending your message. Please try again or contact me directly at contact@srikesar.com",
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later or contact me directly at contact@srikesar.com",
    }
  }
}
