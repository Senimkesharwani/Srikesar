import { refreshInstagramToken } from "@/app/actions/instagram"
import { NextResponse } from "next/server"

export async function POST() {
  try {
    const result = await refreshInstagramToken()

    return NextResponse.json(result, {
      status: result.success ? 200 : 400,
    })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
