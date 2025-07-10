import { InstagramFeed } from "@/components/instagram-feed"
import { InstagramStats } from "@/components/instagram-stats"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Instagram, ExternalLink, RefreshCw } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

export default function InstagramPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white border-0">
            <Instagram className="mr-2 h-4 w-4" />
            Instagram Feed
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-6">Latest Content</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Stay updated with my latest fashion insights, behind-the-scenes moments, and style inspiration directly from
            Instagram.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://www.instagram.com/srikesar_official_18" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-pink-600 hover:to-orange-600 rounded-full px-8">
                <Instagram className="mr-2 h-4 w-4" />
                Follow on Instagram
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-stone-300 text-stone-700 hover:bg-stone-100 rounded-full px-8 bg-transparent"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Feed
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Stats */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-2">Instagram Analytics</h2>
            <p className="text-stone-600">Real-time statistics from my Instagram account</p>
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 shadow-lg animate-pulse">
                    <div className="h-6 w-6 bg-stone-200 rounded mx-auto mb-2"></div>
                    <div className="h-6 bg-stone-200 rounded mb-1"></div>
                    <div className="h-4 bg-stone-200 rounded"></div>
                  </div>
                ))}
              </div>
            }
          >
            <InstagramStats />
          </Suspense>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
                <p className="text-stone-600">Loading Instagram feed...</p>
              </div>
            }
          >
            <InstagramFeed limit={12} showHeader={false} showViewMore={true} />
          </Suspense>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Join the Community</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Follow me on Instagram for daily style inspiration, behind-the-scenes content, and exclusive updates.
          </p>

          <Link href="https://www.instagram.com/srikesar_official_18" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-100 rounded-full px-8">
              <Instagram className="mr-2 h-5 w-5" />
              Follow @srikesar
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
