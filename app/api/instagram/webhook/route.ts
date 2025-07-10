import { revalidateTag } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

// Instagram webhook to automatically refresh content when new posts are made
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Verify webhook (in production, you should verify the signature)
    const verifyToken = process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN

    if (body.object === "instagram") {
      // Revalidate Instagram cache when new content is posted
      revalidateTag("instagram-posts")
      revalidateTag("instagram-profile")

      console.log("Instagram webhook received, cache invalidated")

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 })
  } catch (error) {
    console.error("Instagram webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}

// Handle webhook verification
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const mode = searchParams.get("hub.mode")
  const token = searchParams.get("hub.verify_token")
  const challenge = searchParams.get("hub.challenge")

  const verifyToken = process.env.INSTAGRAM_WEBHOOK_VERIFY_TOKEN

  if (mode === "subscribe" && token === verifyToken) {
    console.log("Instagram webhook verified")
    return new NextResponse(challenge)
  }

  return NextResponse.json({ error: "Verification failed" }, { status: 403 })
}
