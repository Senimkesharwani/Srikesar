import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Srikesar - Fashion & Lifestyle Influencer",
  description:
    "Fashion and lifestyle influencer creating authentic content and meaningful brand collaborations. Follow @srikesar_official_18 for daily inspiration.",
  keywords: "fashion influencer, lifestyle blogger, brand collaborations, Instagram influencer, content creator",
  authors: [{ name: "Srikesar" }],
  openGraph: {
    title: "Srikesar - Fashion & Lifestyle Influencer",
    description: "Fashion and lifestyle influencer creating authentic content and meaningful brand collaborations.",
    url: "https://srikesar.com",
    siteName: "Srikesar",
    images: [
      {
        url: "/fashion-influencer-banner.png",
        width: 1200,
        height: 630,
        alt: "Srikesar - Fashion & Lifestyle Influencer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srikesar - Fashion & Lifestyle Influencer",
    description: "Fashion and lifestyle influencer creating authentic content and meaningful brand collaborations.",
    images: ["/fashion-influencer-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning
     className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main>{children}</main>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
