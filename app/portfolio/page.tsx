"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, ExternalLink, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Fashion", "Grooming", "Travel", "Lifestyle"]

  const portfolioItems = [
    {
      id: 1,
      category: "Fashion",
      brand: "Zara",
      title: "Summer Collection Campaign",
      description: "Showcasing the latest summer trends with a minimalist aesthetic",
      image: "/images/hello.jpeg?w=500&h=600&fit=crop&crop=face",
      likes: "25.4K",
      comments: "892",
      engagement: "8.2%",
      type: "Sponsored Post",
    },
    {
      id: 2,
      category: "Grooming",
      brand: "Beardo",
      title: "Beard Care Essentials",
      description: "Complete grooming routine featuring premium beard care products",
      image: "/images/hello.jpeg?w=500&h=600&fit=crop&crop=face",
      likes: "18.7K",
      comments: "456",
      engagement: "7.8%",
      type: "Product Review",
    },
    {
      id: 3,
      category: "Travel",
      brand: "Tourism Board",
      title: "Goa Travel Diary",
      description: "Exploring the hidden gems of Goa with style and authenticity",
      image: "/images/hello.jpeg?w=500&h=600&fit=crop&crop=face",
      likes: "32.1K",
      comments: "1.2K",
      engagement: "9.5%",
      type: "Travel Content",
    },
    {
      id: 4,
      category: "Fashion",
      brand: "H&M",
      title: "Sustainable Fashion",
      description: "Highlighting eco-friendly fashion choices for the modern man",
      image: "/images/hello.jpeg?w=500&h=600&fit=crop&crop=face",
      likes: "21.8K",
      comments: "678",
      engagement: "8.9%",
      type: "Brand Collaboration",
    },
    {
      id: 5,
      category: "Lifestyle",
      brand: "Nike",
      title: "Fitness & Style",
      description: "Merging athletic wear with everyday fashion for the active lifestyle",
      image: "/images/hello.jpeg?w=500&h=600&fit=crop&crop=face",
      likes: "28.3K",
      comments: "934",
      engagement: "9.1%",
      type: "Lifestyle Content",
    },
    {
      id: 6,
      category: "Grooming",
      brand: "The Man Company",
      title: "Skincare Routine",
      description: "Daily skincare essentials for the modern gentleman",
      image: "/images/hello.jpeg?w=500&h=600&fit=crop&crop=face",
      likes: "16.9K",
      comments: "423",
      engagement: "7.4%",
      type: "Tutorial",
    },
    {
      id: 7,
      category: "Fashion",
      brand: "Adidas",
      title: "Streetwear Essentials",
      description: "Urban fashion meets comfort in this streetwear showcase",
      image: "/images/hello.jpeg?w=500&h=600&fit=crop&crop=face",
      likes: "24.6K",
      comments: "756",
      engagement: "8.7%",
      type: "Fashion Content",
    },
    {
      id: 8,
      category: "Travel",
      brand: "Airbnb",
      title: "Mumbai City Guide",
      description: "Discovering Mumbai's fashion scene and cultural hotspots",
      image: "/images/hello.jpeg?w=500&h=600&fit=crop&crop=face",
      likes: "19.4K",
      comments: "567",
      engagement: "8.3%",
      type: "City Guide",
    },
    {
      id: 9,
      category: "Lifestyle",
      brand: "Apple",
      title: "Tech & Style",
      description: "How technology seamlessly integrates with modern lifestyle",
      image: "/images/hello.jpeg?w=500&h=600&fit=crop&crop=face",
      likes: "22.7K",
      comments: "689",
      engagement: "8.6%",
      type: "Tech Review",
    },
  ]

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-stone-100 text-stone-700">Portfolio</Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-6">My Creative Work</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection of brand collaborations, content campaigns, and creative projects that showcase my
            approach to fashion, lifestyle, and digital storytelling.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 text-stone-600 mb-4">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filter by category:</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  activeFilter === category
                    ? "bg-stone-900 text-white"
                    : "border-stone-300 text-stone-700 hover:bg-stone-100"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" className="bg-white text-stone-900 hover:bg-stone-100 rounded-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Post
                        </Button>
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-white/90 text-stone-700">{item.category}</Badge>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-stone-500">{item.brand}</span>
                      <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full">{item.type}</span>
                    </div>

                    <h3 className="font-bold text-lg text-stone-900 mb-2">{item.title}</h3>
                    <p className="text-stone-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                    <div className="flex items-center justify-between text-sm text-stone-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{item.comments}</span>
                        </div>
                      </div>
                      <div className="text-green-600 font-medium">{item.engagement} engagement</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-8">Portfolio Performance</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-stone-900 mb-2">40+</div>
              <div className="text-stone-600">Brand Collaborations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-stone-900 mb-2">15M+</div>
              <div className="text-stone-600">Total Reach</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-stone-900 mb-2">8.5%</div>
              <div className="text-stone-600">Avg. Engagement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-stone-900 mb-2">95%</div>
              <div className="text-stone-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-stone-900 to-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Create Together?</h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create compelling content that resonates with your target audience and drives
            meaningful results for your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collaborate">
              <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-100 rounded-full px-8">
                Start a Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-stone-900 rounded-full px-8 bg-transparent"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
