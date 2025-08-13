"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Heart, Play, Briefcase } from "lucide-react"

interface StatItemProps {
  icon: React.ElementType
  value: string
  label: string
  delay: number
  color: string
}

function StatItem({ icon: Icon, value, label, delay, color }: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`text-center transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div
        className={`w-16 h-16 mx-auto mb-3 rounded-2xl ${color} flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-gray-600 text-sm font-medium">{label}</div>
    </div>
  )
}

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
      <StatItem
        icon={Heart}
        value="450K+"
        label="Followers"
        delay={200}
        color="bg-gradient-to-br from-pink-500 to-rose-500"
      />
      <StatItem
        icon={Play}
        value="300+"
        label="Reels"
        delay={400}
        color="bg-gradient-to-br from-purple-500 to-indigo-500"
      />
      <StatItem
        icon={Briefcase}
        value="40+"
        label="Brand Collabs"
        delay={600}
        color="bg-gradient-to-br from-orange-500 to-amber-500"
      />
    </div>
  )
}
