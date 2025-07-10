"use client"

import { Instagram, Heart, Star, Camera, Sparkles } from "lucide-react"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating Instagram Icons */}
      <div className="absolute top-20 right-20 animate-float stagger-1">
        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <Instagram className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="absolute top-1/3 right-10 animate-float stagger-3">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <Heart className="w-4 h-4 text-pink-500" />
        </div>
      </div>

      <div className="absolute bottom-1/3 left-10 animate-float stagger-2">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
          <Camera className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="absolute top-1/2 left-20 animate-float stagger-4">
        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
          <Star className="w-3 h-3 text-white" />
        </div>
      </div>

      <div className="absolute bottom-20 right-1/3 animate-float stagger-5">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse-slow stagger-2"></div>
      <div className="absolute top-3/4 left-1/3 w-12 h-12 bg-orange-200 rounded-full opacity-20 animate-pulse-slow stagger-3"></div>
    </div>
  )
}
