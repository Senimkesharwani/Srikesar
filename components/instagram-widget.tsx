"use client"

import { useEffect } from "react"

interface InstagramWidgetProps {
  height?: string
  className?: string
}

export default function InstagramWidget({ height = "500px", className = "" }: InstagramWidgetProps) {
  useEffect(() => {
    // Check if the widget div already exists
    if (!document.querySelector("#ftk64k1gv")) {
      // Create the widget div
      const widgetDiv = document.createElement("div")
      widgetDiv.setAttribute("data-key", "Grid Instagram Feed")
      widgetDiv.setAttribute("class", "ft")
      widgetDiv.setAttribute("id", "ftk64k1gv")

      // Create and append the script
      const script = document.createElement("script")
      script.src = "https://wdg.fouita.com/widgets/0x2c0691.js"
      script.async = true

      // Find the container and append the widget
      const container = document.querySelector(".instagram-widget-container")
      if (container) {
        container.appendChild(widgetDiv)
        container.appendChild(script)
      }
    }
  }, [])

  return (
    <div className={`instagram-widget-container w-full ${className}`} style={{ minHeight: height }}>
      {/* Widget will be injected here by the script */}
    </div>
  )
}
