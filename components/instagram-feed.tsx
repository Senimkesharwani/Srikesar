import { getInstagramPosts } from "@/app/actions/instagram"
import { InstagramPost } from "./instagram-post"
import { Button } from "@/components/ui/button"
import { Instagram, ExternalLink } from "lucide-react"
import Link from "next/link"

interface InstagramFeedProps {
  limit?: number
  showHeader?: boolean
  showViewMore?: boolean
  className?: string
}

export async function InstagramFeed({
  limit = 6,
  showHeader = true,
  showViewMore = true,
  className = "",
}: InstagramFeedProps) {
  const posts = await getInstagramPosts()
  const displayPosts = posts.slice(0, limit)

  if (posts.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <Instagram className="h-12 w-12 mx-auto mb-4 text-stone-400" />
        <p className="text-stone-600">Instagram feed temporarily unavailable</p>
      </div>
    )
  }

  return (
    <div className={className}>
      {showHeader && (
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Instagram className="h-6 w-6 text-pink-500" />
            <h3 className="text-2xl font-bold text-stone-900">Latest from Instagram</h3>
          </div>
          <p className="text-stone-600">Stay updated with my latest content and behind-the-scenes moments</p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {displayPosts.map((post) => (
          <InstagramPost key={post.id} post={post} />
        ))}
      </div>

      {showViewMore && (
        <div className="text-center mt-8">
          <Link href="https://www.instagram.com/srikesar_official_18" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-stone-300 text-stone-700 hover:bg-stone-100 rounded-full px-6 bg-transparent"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View More on Instagram
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
