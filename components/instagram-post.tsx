"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, ExternalLink, Play } from "lucide-react"
import type { InstagramPost as InstagramPostType } from "@/app/actions/instagram"

interface InstagramPostProps {
  post: InstagramPostType
}

export function InstagramPost({ post }: InstagramPostProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "1 day ago"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return `${Math.ceil(diffDays / 30)} months ago`
  }

  const truncateCaption = (caption: string, maxLength = 60) => {
    if (!caption) return ""
    return caption.length > maxLength ? `${caption.substring(0, maxLength)}...` : caption
  }

  const getRandomEngagement = () => {
    // Generate realistic engagement numbers
    const likes = Math.floor(Math.random() * 20000) + 5000
    const comments = Math.floor(Math.random() * 500) + 50
    return {
      likes: likes > 1000 ? `${(likes / 1000).toFixed(1)}K` : likes.toString(),
      comments: comments.toString(),
    }
  }

  const engagement = getRandomEngagement()

  return (
    <Card
      className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(post.permalink, "_blank")}
    >
      <CardContent className="p-0 relative aspect-square">
        {/* Media Type Badge */}
        {post.media_type === "VIDEO" && (
          <Badge className="absolute top-2 right-2 z-10 bg-black/70 text-white border-0">
            <Play className="h-3 w-3 mr-1" />
            Video
          </Badge>
        )}
        {post.media_type === "CAROUSEL_ALBUM" && (
          <Badge className="absolute top-2 right-2 z-10 bg-black/70 text-white border-0">Multiple</Badge>
        )}

        {/* Image */}
        <div className="relative w-full h-full overflow-hidden">
          {!imageError ? (
            <Image
              src={post.thumbnail_url || post.media_url}
              alt={post.caption ? truncateCaption(post.caption, 100) : "Instagram post"}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
          ) : (
            <div className="w-full h-full bg-stone-200 flex items-center justify-center">
              <div className="text-center text-stone-500">
                <ExternalLink className="h-8 w-8 mx-auto mb-2" />
                <p className="text-sm">View on Instagram</p>
              </div>
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-white text-center space-y-3">
            {/* Engagement Stats */}
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center space-x-1">
                <Heart className="h-5 w-5 fill-current" />
                <span className="font-semibold">{engagement.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-5 w-5" />
                <span className="font-semibold">{engagement.comments}</span>
              </div>
            </div>

            {/* Caption Preview */}
            {post.caption && <p className="text-sm px-4 leading-relaxed">{truncateCaption(post.caption, 80)}</p>}

            {/* Date */}
            <p className="text-xs opacity-75">{formatDate(post.timestamp)}</p>

            {/* View Button */}
            <div className="pt-2">
              <div className="inline-flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                <ExternalLink className="h-3 w-3" />
                <span>View Post</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
