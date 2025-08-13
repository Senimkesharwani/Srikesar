import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, ExternalLink, Users, Heart, MessageCircle, Camera, Video, TrendingUp } from "lucide-react"
import InstagramWidget from "@/components/instagram-widget"
import InstagramWidgetIframe from "@/components/instagram-widget-iframe"
import ScrollAnimation from "@/components/scroll-animations"

export default function InstagramPage() {
  const contentCategories = [
    {
      icon: "👗",
      title: "Fashion",
      description: "Daily outfit inspiration, styling tips, and fashion trends",
      color: "from-pink-500 to-rose-500",
      posts: "100+",
    },
    {
      icon: "🌿",
      title: "Lifestyle",
      description: "Wellness tips, daily routines, and life inspiration",
      color: "from-green-500 to-emerald-500",
      posts: "120+",
    },
    {
      icon: "📸",
      title: "Behind the Scenes",
      description: "Photoshoot moments and collaboration insights",
      color: "from-blue-500 to-cyan-500",
      posts: "20+",
    },
    {
      icon: "✨",
      title: "Brand Collabs",
      description: "Sponsored content and brand partnership highlights",
      color: "from-purple-500 to-violet-500",
      posts: "30+",
    },
  ]

  const instagramStats = [
    {
      icon: Users,
      value: "450K+",
      label: "Followers",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      value: "8.5%",
      label: "Engagement",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      value: "500+",
      label: "Avg. Comments",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      value: "10M+",
      label: "Monthly Reach",
      color: "from-purple-500 to-violet-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="absolute inset-0 bg-dots opacity-10"></div>

        <div className="relative max-w-6xl mx-auto container-padding text-center">
          <ScrollAnimation direction="up">
            <Badge className="mb-6 bg-gradient-instagram text-white border-0 px-6 py-2 text-sm font-medium animate-pulse-glow">
              Instagram
            </Badge>
            <h1 className="font-serif text-hero font-bold mb-8">My Instagram Journey</h1>
            <p className="text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Follow along as I share my daily life, fashion inspiration, lifestyle tips, and behind-the-scenes moments
              from brand collaborations and photoshoots.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                asChild
                className="bg-gradient-instagram text-white hover:opacity-90 rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="https://instagram.com/srikesar_official_18" target="_blank">
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow @srikesar_official_18
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Instagram Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {instagramStats.map((stat, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 100}>
                <div className="text-center group">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                    <div
                      className={`bg-gradient-to-br ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-purple-200 text-sm">{stat.label}</div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">Live Feed</Badge>
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6">Latest Posts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time feed from my Instagram account - updated automatically when I post new content
            </p>
          </ScrollAnimation>

          {/* Primary Widget */}
          <ScrollAnimation direction="up" delay={200}>
            <Card className="border-0 shadow-2xl mb-12 overflow-hidden">
              <CardContent className="p-8 bg-gradient-to-br from-white to-purple-50">
                <InstagramWidget height="700px" />
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Fallback Widget */}
          <ScrollAnimation direction="up" delay={400}>
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-6">Having trouble loading? Try the alternative view:</p>
              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-8 bg-gradient-to-br from-white to-pink-50">
                  <InstagramWidgetIframe height="600" />
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Content Categories */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto container-padding">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">Content Types</Badge>
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6">What You'll Find</h2>
            <p className="text-xl text-gray-600">
              Diverse content categories that showcase different aspects of my life
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentCategories.map((category, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 100}>
                <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{category.description}</p>
                    <Badge className={`bg-gradient-to-r ${category.color} text-white border-0 text-xs`}>
                      {category.posts} posts
                    </Badge>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <ScrollAnimation direction="up">
            <Badge className="mb-6 bg-gray-100 text-gray-700 px-4 py-2">Community</Badge>
            <h2 className="font-serif text-display font-bold text-gray-900 mb-8">Building Connections</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              My Instagram isn't just about showcasing content—it's about building a community of like-minded
              individuals who share a passion for fashion, lifestyle, and authentic living.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation direction="left" delay={100}>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Daily Content</h3>
                <p className="text-gray-600 text-sm">
                  Fresh posts every day showcasing outfits, lifestyle moments, and behind-the-scenes content
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={200}>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Stories & Reels</h3>
                <p className="text-gray-600 text-sm">
                  Interactive stories and engaging reels that give you a peek into my daily routine and creative process
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={300}>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-500 to-violet-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">Community Engagement</h3>
                <p className="text-gray-600 text-sm">
                  Active engagement with followers through comments, DMs, and interactive content that builds
                  relationships
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-mesh opacity-20"></div>

        <div className="relative max-w-4xl mx-auto container-padding text-center">
          <ScrollAnimation direction="up">
            <h2 className="font-serif text-display font-bold mb-8">Join the Community</h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Be part of my Instagram family and get daily inspiration, exclusive content, and first access to
              collaborations and giveaways.
            </p>

            <Button
              asChild
              className="bg-gradient-instagram text-white hover:opacity-90 rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Link href="https://instagram.com/srikesar_official_18" target="_blank">
                <Instagram className="mr-2 h-5 w-5" />
                Follow Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
