"use client"

import Image from "next/image"
import { Instagram, Heart, MessageCircle, Share } from "lucide-react"

export function PhoneMockup() {
  return (
    <div className="relative animate-fade-in-right">
      {/* Phone Frame */}
      <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-black rounded-t-[2.5rem] flex items-center justify-center">
            <div className="w-20 h-1 bg-white rounded-full"></div>
          </div>

          {/* Instagram Profile Content */}
          <div className="pt-8 px-4">
            {/* Profile Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-pink-500 p-1">
                  <Image
                    src="/images/hello.jpeg?w=500&h=600&fit=crop&crop=face"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm">srikesar</h3>
                  <p className="text-gray-600 text-xs">Fashion & Lifestyle</p>
                </div>
              </div>
              <Instagram className="w-6 h-6 text-black" />
            </div>

            {/* Stats */}
            <div className="flex justify-around mb-4 text-center">
              <div>
                <div className="font-bold text-sm">450</div>
                <div className="text-gray-600 text-xs">Posts</div>
              </div>
              <div>
                <div className="font-bold text-sm">450K</div>
                <div className="text-gray-600 text-xs">Followers</div>
              </div>
              <div>
                <div className="font-bold text-sm">1.2K</div>
                <div className="text-gray-600 text-xs">Following</div>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-4">
              <p className="text-xs text-gray-800 leading-relaxed">
                ✨ Fashion & Lifestyle Creator
                <br />📍 Mumbai, India
                <br />💼 Brand Collaborations
                <br />👇 Latest Content
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 mb-4">
              <button className="flex-1 bg-blue-500 text-white text-xs py-2 rounded-lg font-medium">Follow</button>
              <button className="flex-1 border border-gray-300 text-xs py-2 rounded-lg font-medium">Message</button>
            </div>

            {/* Post Grid */}
            <div className="grid grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/hello.jpeg-${
                      [
                        "1441986300917-64674bd600d8",
                        "1507003211169-0a1dd7228f2d",
                        "1500648767791-00dcc994a43e",
                        "1472099645785-5658abf4ff4e",
                        "1519085360753-af0119f7cbe7",
                        "1506794778202-cad84cf45f1d",
                      ][i - 1]
                    }?w=100&h=100&fit=crop`}
                    alt={`Post ${i}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Interaction Elements */}
      <div className="absolute -top-4 -right-4 animate-bounce-slow">
        <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <Heart className="w-6 h-6 text-red-500 fill-current" />
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 animate-bounce-slow stagger-2">
        <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-blue-500" />
        </div>
      </div>

      <div className="absolute top-1/2 -right-6 animate-bounce-slow stagger-3">
        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <Share className="w-4 h-4 text-green-500" />
        </div>
      </div>
    </div>
  )
}
