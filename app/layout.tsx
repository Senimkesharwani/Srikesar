import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })

export const metadata: Metadata = {
  title: "Srikesar – Fashion & Lifestyle Influencer",
  description:
    "Official website of Srikesar, a digital fashion & lifestyle creator with 450K+ Instagram followers. Explore his portfolio, campaigns, and connect for impactful collaborations.",
  generator: "v0.dev",
}

// Optional: Next.js requires this to wrap the page
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
