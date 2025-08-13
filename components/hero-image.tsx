"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"

export function HeroImage() {
  return (
    <div className="relative animate-fade-in-right">
      {/* Main Image Container */}
      <div className="relative w-full max-w-lg mx-auto">
        {/* Main Image */}
        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500">
          <Image
            src="/images/Home.png"
            alt="Srikesar - Fashion Influencer"
            width={500}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Floating Stats Card */}
        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <div className="text-2xl font-bold text-gray-900">450K+</div>
          <div className="text-sm text-gray-600">Instagram Followers</div>
        </div>

        {/* Floating Instagram Badge */}
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-4 shadow-lg animate-pulse-slow">
          <Instagram className="h-6 w-6 text-white" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-8 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-60 animate-float"></div>
        <div
          className="absolute bottom-1/3 -right-8 w-12 h-12 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-60 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </div>
  )
}
