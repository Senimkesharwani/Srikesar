"use client"

import ScrollAnimation from "./scroll-animations"

const brandLogos = [
  { name: "Imagine", color: "from-gray-900 to-gray-700" },
  { name: "Madan Stores", color: "from-orange-500 to-red-500" },
  { name: "Nykaa", color: "from-blue-600 to-indigo-600" },
  { name: "Nivea", color: "from-red-500 to-pink-500" },
  { name: "Moj", color: "from-gray-800 to-black" },
  { name: "GotChosen", color: "from-blue-500 to-blue-700" },
]

export default function AnimatedBrands() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
      {brandLogos.map((brand, index) => (
        <ScrollAnimation
          key={index}
          direction={index % 2 === 0 ? "left" : "right"}
          delay={index * 100}
          threshold={0.3}
          rootMargin="0px 0px -50px 0px"
        >
          <div className="text-center group">
            <div
              className={`bg-gradient-to-br ${brand.color} rounded-2xl p-6 h-20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <span className="font-bold text-white text-sm">{brand.name}</span>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  )
}
