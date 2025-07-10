import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Instagram, Youtube, ArrowRight, BriefcaseIcon as Briefcase2 } from "lucide-react"
import Link from "next/link"
import { AnimatedStats } from "@/components/animated-stats"
import { ScrollAnimation } from "@/components/scroll-animations"
import { AnimatedPortfolioGrid } from "@/components/animated-portfolio-grid"
import { AnimatedBrands } from "@/components/animated-brands"
import { HeroImage } from "@/components/hero-image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="animate-fade-in-left">
                <Badge className="mb-6 bg-gradient-to-r from-pink-500 to-orange-500 text-white border-0 px-4 py-2 text-sm font-medium">
                  Fashion & Lifestyle Influencer
                </Badge>
                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Srikesar
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  I help brands shine through authentic, engaging content that resonates with millions of followers
                  worldwide.
                </p>
              </div>

              {/* Animated Stats */}
              <div className="animate-fade-in-left stagger-2">
                <AnimatedStats />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-left stagger-3">
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    View Portfolio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/collaborate">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-transparent"
                  >
                    <Briefcase2 className="mr-2 h-5 w-5" />
                    Hire Me
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image Side */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <HeroImage />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation direction="left">
              <Badge className="mb-6 bg-purple-100 text-purple-700 border-0 px-4 py-2">About Me</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Style is a way to say who you are{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  without speaking
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  I'm Srikesar, a digital storyteller passionate about fashion, men's grooming, travel, and authentic
                  content creation. What started as a personal style journey has evolved into a platform that inspires
                  over 450,000 followers daily.
                </p>
                <p>
                  My aesthetic blends fashion-forward thinking with minimalist sensibilities, creating content that
                  resonates with modern audiences who value both style and substance.
                </p>
              </div>
              <Link href="/about">
                <Button className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl px-8 py-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500">
                  <img
                    src="/images/hello.jpeg"
                    alt="Srikesar Portrait"
                    width={600}
                    height={700}
                    className="w-full h-full object-cover"
                    // ?w=500&h=600&fit=crop&crop=face
                    
                  />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-2xl font-bold text-gray-900">8.5%</div>
                  <div className="text-sm text-gray-600">Engagement Rate</div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 shadow-lg">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2">
                Portfolio
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Work</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A curated selection of my most impactful brand collaborations and content campaigns.
              </p>
            </div>
          </ScrollAnimation>

          <AnimatedPortfolioGrid />

          <ScrollAnimation direction="up" delay={800}>
            <div className="text-center mt-12">
              <Link href="/portfolio">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl px-8 py-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  View Full Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Brand Collaborations */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-100 text-blue-700 border-0 px-4 py-2">Trusted By</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Brand Partners</h2>
              <p className="text-lg text-gray-600">Collaborating with industry-leading brands worldwide</p>
            </div>
          </ScrollAnimation>

          <AnimatedBrands />
        </div>
      </section>

      {/* Follow Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Follow My Journey</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Stay updated with my latest content, behind-the-scenes moments, and style inspiration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.instagram.com/srikesar_official_18" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded-2xl px-8 py-4 font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow on Instagram
                </Button>
              </a>
              <a href="https://youtube.com/@srikesar" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-2xl px-8 py-4 font-semibold bg-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Youtube className="mr-2 h-5 w-5" />
                  Subscribe on YouTube
                </Button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation direction="left">
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Srikesar
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Fashion & Lifestyle Influencer creating bold, stylish, and purpose-driven content.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/srikesar_official_18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://youtube.com/@srikesar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Youtube className="h-5 w-5 text-white" />
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={200}>
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors hover:underline">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/collaborate" className="hover:text-white transition-colors hover:underline">
                    Collaborate
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={400}>
              <h3 className="font-semibold mb-4 text-lg">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>contact@srikesar.com</li>
                <li>Business Inquiries Only</li>
                <li>Response within 24-48 hours</li>
              </ul>
            </ScrollAnimation>
          </div>

          <ScrollAnimation direction="up" delay={600}>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Srikesar. All rights reserved.</p>
            </div>
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  )
}
