"use server"

import { z } from "zod"
import { sendCollaborationNotification, sendCollaborationConfirmation } from "@/lib/email"

const collaborateSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  budget: z.string().min(1, "Please select a budget range"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(20, "Please provide more details about your project (minimum 20 characters)"),
})

export async function submitCollaborationForm(prevState: any, formData: FormData) {
  try {
    // Extract form data
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      budget: formData.get("budget") as string,
      projectType: formData.get("projectType") as string,
      message: formData.get("message") as string,
    }

    // Validate the data
    const validatedData = collaborateSchema.parse(data)

    console.log("Processing collaboration form submission:", validatedData)

    // Send notification email to admin
    const notificationResult = await sendCollaborationNotification(validatedData)

    // Send confirmation email to user
    const confirmationResult = await sendCollaborationConfirmation(validatedData)

    // Check if emails were sent successfully
    if (!notificationResult.success) {
      console.error("Failed to send collaboration notification email:", notificationResult.error)
      throw new Error("Failed to send notification email")
    }

    if (!confirmationResult.success) {
      console.error("Failed to send collaboration confirmation email:", confirmationResult.error)
      // Don't throw error for confirmation email failure, just log it
      console.warn("Confirmation email failed, but notification was sent successfully")
    }

    console.log("Collaboration form processed successfully")

    return {
      success: true,
      message:
        "Thank you for your collaboration inquiry! I'll review your project details and get back to you within 24-48 hours with a detailed proposal. Check your email for confirmation.",
    }
  } catch (error) {
    console.error("Collaboration form error:", error)

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
          "There was an issue sending your inquiry. Please try again or contact me directly at contact@srikesar.com",
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later or contact me directly at contact@srikesar.com",
    }
  }
}

export async function downloadMediaKit() {
  try {
    // Simulate media kit generation/retrieval
    await new Promise((resolve) => setTimeout(resolve, 500))

    console.log("Media kit download requested")

    return {
      success: true,
      message: "Media kit download started!",
      downloadUrl: "/media-kit-srikesar-2024.pdf", // This would be a real URL
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to download media kit. Please try again.",
    }
  }
}
