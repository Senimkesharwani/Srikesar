"use client"

import ScrollAnimation from "./scroll-animations"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, ExternalLink } from "lucide-react"
import Image from "next/image"

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
  },
  {
    id: 2,
    category: "Grooming",
    brand: "Beardo",
    title: "Beard Care Essentials",
    description: "Complete grooming routine featuring premium beard care products",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    likes: "18.7K",
    comments: "456",
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
  },
  {
    id: 6,
    category: "Grooming",
    brand: "The Man Company",
    title: "Skincare Routine",
    description: "Daily skincare essentials for the modern gentleman",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    likes: "16.9K",
    comments: "423",
  },
]

export default function AnimatedPortfolioGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioItems.map((item, index) => (
        <ScrollAnimation
          key={item.id}
          direction={index % 2 === 0 ? "left" : "right"}
          delay={index * 150}
          threshold={0.2}
          rootMargin="0px 0px -100px 0px"
        >
          <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <ExternalLink className="h-5 w-5 text-gray-900" />
                    </div>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700">{item.category}</Badge>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-500">{item.brand}</span>
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4 text-blue-500" />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      ))}
    </div>
  )
}
