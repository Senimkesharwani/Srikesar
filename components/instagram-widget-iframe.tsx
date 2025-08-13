"use client"

interface InstagramWidgetIframeProps {
  width?: string
  height?: string
  className?: string
}

export default function InstagramWidgetIframe({
  width = "100%",
  height = "500",
  className = "",
}: InstagramWidgetIframeProps) {
  return (
    <div className={`w-full ${className}`}>
      <iframe
        src="https://emb.fouita.com/widget/0x2c0691/ftk64k1gv"
        title="Grid Instagram Feed"
        width={width}
        height={height}
        frameBorder="0"
        className="w-full rounded-lg shadow-lg"
        loading="lazy"
      />
    </div>
  )
}
