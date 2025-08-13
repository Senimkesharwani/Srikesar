"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, ExternalLink, Filter, TrendingUp, Users, Star, Camera } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animations"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Fashion", "Shooting", "Travel", "Lifestyle"]

  const portfolioItems = [
    {
      id: 1,
      category: "Fashion",
      brand: "Zara",
      title: "Summer Collection Campaign",
      description: "Showcasing the latest summer trends with a minimalist aesthetic",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      likes: "25.4K",
      comments: "892",
      engagement: "8.2%",
      type: "Sponsored Post",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      category: "Shooting",
      brand: "Beardo",
      title: "Beard Care Essentials",
      description: "Complete Shooting routine featuring premium beard care products",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      likes: "18.7K",
      comments: "456",
      engagement: "7.8%",
      type: "Product Review",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      category: "Travel",
      brand: "Tourism Board",
      title: "Goa Travel Diary",
      description: "Exploring the hidden gems of Goa with style and authenticity",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=400&fit=crop",
      likes: "32.1K",
      comments: "1.2K",
      engagement: "9.5%",
      type: "Travel Content",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      category: "Fashion",
      brand: "H&M",
      title: "Sustainable Fashion",
      description: "Highlighting eco-friendly fashion choices for the modern man",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      likes: "21.8K",
      comments: "678",
      engagement: "8.9%",
      type: "Brand Collaboration",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      category: "Lifestyle",
      brand: "Nike",
      title: "Fitness & Style",
      description: "Merging athletic wear with everyday fashion for the active lifestyle",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      likes: "28.3K",
      comments: "934",
      engagement: "9.1%",
      type: "Lifestyle Content",
      color: "from-purple-500 to-violet-500",
    },
    {
      id: 6,
      category: "Shooting",
      brand: "The Man Company",
      title: "Skincare Routine",
      description: "Daily skincare essentials for the modern gentleman",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      likes: "16.9K",
      comments: "423",
      engagement: "7.4%",
      type: "Tutorial",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 7,
      category: "Fashion",
      brand: "Adidas",
      title: "Streetwear Essentials",
      description: "Urban fashion meets comfort in this streetwear showcase",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      likes: "24.6K",
      comments: "756",
      engagement: "8.7%",
      type: "Fashion Content",
      color: "from-gray-700 to-gray-900",
    },
    {
      id: 8,
      category: "Travel",
      brand: "Airbnb",
      title: "Mumbai City Guide",
      description: "Discovering Mumbai's fashion scene and cultural hotspots",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop",
      likes: "19.4K",
      comments: "567",
      engagement: "8.3%",
      type: "City Guide",
      color: "from-teal-500 to-green-500",
    },
    {
      id: 9,
      category: "Lifestyle",
      brand: "Apple",
      title: "Tech & Style",
      description: "How technology seamlessly integrates with modern lifestyle",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
      likes: "22.7K",
      comments: "689",
      engagement: "8.6%",
      type: "Tech Review",
      color: "from-slate-600 to-slate-800",
    },
  ]

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="absolute inset-0 bg-dots opacity-10"></div>

        <div className="relative max-w-6xl mx-auto container-padding text-center">
          <ScrollAnimation direction="up">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 text-sm font-medium">
              Portfolio
            </Badge>
            <h1 className="font-serif text-hero font-bold mb-8">My Creative Work</h1>
            <p className="text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              A curated collection of brand collaborations, content campaigns, and creative projects that showcase my
              approach to fashion, lifestyle, and digital storytelling.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollAnimation direction="up" delay={100}>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">40+</div>
                <div className="text-gray-600">Brand Collaborations</div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={200}>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">15M+</div>
                <div className="text-gray-600">Total Reach</div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={300}>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">8.5%</div>
                <div className="text-gray-600">Avg. Engagement</div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={400}>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto container-padding">
          <ScrollAnimation direction="up" className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filter by category:</span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  className={`rounded-full px-8 py-3 font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      : "border-gray-300 text-gray-700 hover:bg-white hover:shadow-lg hover:-translate-y-1 bg-white"
                  }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <ScrollAnimation key={item.id} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full shadow-lg">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Post
                          </Button>
                        </div>
                      </div>
                      <Badge className={`absolute top-4 left-4 bg-gradient-to-r ${item.color} text-white border-0`}>
                        {item.category}
                      </Badge>
                      <Badge className="absolute top-4 right-4 bg-white/90 text-gray-700 text-xs">{item.type}</Badge>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                          {item.brand}
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                          {item.engagement} engagement
                        </span>
                      </div>

                      <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 text-red-500">
                            <Heart className="h-4 w-4" />
                            <span className="font-medium">{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-blue-500">
                            <MessageCircle className="h-4 w-4" />
                            <span className="font-medium">{item.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <ScrollAnimation direction="up">
            <Badge className="mb-6 bg-purple-100 text-purple-700 px-4 py-2">Performance</Badge>
            <h2 className="font-serif text-display font-bold text-gray-900 mb-16">Portfolio Impact</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollAnimation direction="up" delay={100}>
              <div className="group">
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  40+
                </div>
                <div className="text-gray-600">Brand Collaborations</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={200}>
              <div className="group">
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  15M+
                </div>
                <div className="text-gray-600">Total Reach</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={300}>
              <div className="group">
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  8.5%
                </div>
                <div className="text-gray-600">Avg. Engagement</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={400}>
              <div className="group">
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  95%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
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
            <h2 className="font-serif text-display font-bold mb-8">Ready to Create Together?</h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's discuss how we can create compelling content that resonates with your target audience and drives
              meaningful results for your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                className="bg-white text-purple-900 hover:bg-purple-50 rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/collaborate">Start a Project</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-purple-900 rounded-full px-8 py-4 text-lg font-semibold bg-transparent shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
