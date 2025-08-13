"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view
    console.log(`Page view: ${pathname}`)

    // In a real app, you would send this to your analytics service
    // trackEvent({
    //   type: "page_view",
    //   page: pathname,
    //   userAgent: navigator.userAgent,
    //   metadata: {
    //     timestamp: new Date().toISOString(),
    //     referrer: document.referrer,
    //   },
    // })
  }, [pathname])

  // Track Instagram clicks
  useEffect(() => {
    const handleInstagramClick = () => {
      console.log(`Instagram click from: ${pathname}`)
      // trackEvent({
      //   type: "instagram_click",
      //   page: pathname,
      //   metadata: {
      //     timestamp: new Date().toISOString(),
      //   },
      // })
    }

    // Add event listeners to Instagram links
    const instagramLinks = document.querySelectorAll('a[href*="instagram.com"]')
    instagramLinks.forEach((link) => {
      link.addEventListener("click", handleInstagramClick)
    })

    return () => {
      instagramLinks.forEach((link) => {
        link.removeEventListener("click", handleInstagramClick)
      })
    }
  }, [pathname])

  return null // This component doesn't render anything
}
