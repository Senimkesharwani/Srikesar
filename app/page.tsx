import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Mail, ArrowRight, Play, Star, Users, TrendingUp, Camera, Heart, MessageCircle } from "lucide-react"
import InstagramWidget from "@/components/instagram-widget"
import ScrollAnimation from "@/components/scroll-animations"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="absolute inset-0 bg-dots opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float stagger-3"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 animate-float stagger-5"></div>

        <div className="relative max-w-7xl mx-auto container-padding section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <ScrollAnimation direction="left" className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-instagram text-white px-6 py-2 text-sm font-medium animate-pulse-glow">
                  Fashion & Lifestyle Influencer
                </Badge>

                <h1 className="font-serif text-hero font-bold text-gray-900 leading-tight">
                  Creating
                  <span className="block text-gradient animate-gradient-shift">Authentic</span>
                  <span className="block">Stories</span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Partnering with brands to create compelling content that resonates with audiences and drives
                  meaningful engagement across digital platforms.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-primary group">
                  <Link href="/collaborate">
                    <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Work With Me
                  </Link>
                </Button>

                <Button variant="outline" asChild className="btn-secondary group bg-transparent">
                  <Link href="/portfolio">
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    View Portfolio
                  </Link>
                </Button>
              </div>

              {/* Social Stats */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    450K+
                  </div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    8.5%
                  </div>
                  <div className="text-sm text-gray-600">Engagement</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    40+
                  </div>
                  <div className="text-sm text-gray-600">Brand Collabs</div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Content - Hero Image */}
            <ScrollAnimation direction="right" className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                <div className="relative">
                  <Image
                    src="/images/Home.png"
                    alt="Srikesar - Fashion & Lifestyle Influencer"
                    width={600}
                    height={750}
                    className="w-full h-[600px] object-cover rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
                    priority
                  />

                  {/* Floating Stats Cards */}
                  <div className="absolute -bottom-6 -left-6 card-glass p-4 animate-bounce-gentle">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-instagram p-2 rounded-lg">
                        <Instagram className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">@srikesar_official_18</div>
                        <div className="text-sm text-white/80">Fashion & Lifestyle</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-6 -right-6 card-glass p-4 animate-bounce-gentle stagger-2">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">450K+</div>
                      <div className="text-sm text-white/80">Followers</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto container-padding">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="font-serif text-display font-bold mb-6">Trusted by Leading Brands</h2>
            <p className="text-xl text-purple-100">Delivering authentic content that drives real results</p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollAnimation direction="up" delay={100}>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Users className="h-12 w-12 mx-auto mb-4 text-purple-300 group-hover:text-white transition-colors" />
                  <div className="text-4xl font-bold mb-2">450K+</div>
                  <div className="text-purple-200">Engaged Followers</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={200}>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-300 group-hover:text-white transition-colors" />
                  <div className="text-4xl font-bold mb-2">8.5%</div>
                  <div className="text-purple-200">Avg. Engagement</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={300}>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Star className="h-12 w-12 mx-auto mb-4 text-yellow-300 group-hover:text-white transition-colors" />
                  <div className="text-4xl font-bold mb-2">40+</div>
                  <div className="text-purple-200">Brand Collabs</div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={400}>
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2">
                  <Camera className="h-12 w-12 mx-auto mb-4 text-pink-300 group-hover:text-white transition-colors" />
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-purple-200">Client Satisfaction</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="section-padding bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto container-padding">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-instagram text-white px-4 py-2">Latest Content</Badge>
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6">Latest from Instagram</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Follow my journey and get inspired by my latest content, behind-the-scenes moments, and brand
              collaborations
            </p>

            <Button asChild variant="outline" className="btn-secondary group bg-transparent">
              <Link href="https://instagram.com/srikesar_official_18" target="_blank">
                <Instagram className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Follow @srikesar_official_18
              </Link>
            </Button>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <div className="card-elevated p-8 bg-gradient-to-br from-white to-purple-50">
              <InstagramWidget height="600px" className="rounded-2xl overflow-hidden" />
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={400} className="text-center mt-12">
            <Button asChild className="btn-primary group">
              <Link href="/instagram">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">Portfolio</Badge>
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of recent brand collaborations and creative projects that drive engagement and results
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <ScrollAnimation key={item} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={`images/${
                          [
                            "fashion1.jpeg",
                            "Lifestyle1.jpeg",
                            "travel.jpeg",
                            "fashion2.jpeg",
                            "Lifestyle2.jpeg",
                            "beauty.jpeg",
                          ][index]
                        }?w=400&h=400&fit=crop`}
                        alt={`Portfolio item ${item}`}
                        width={400}
                        height={300}
                        className="w-full h-68 object-cover  group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4 text-red-400" />
                              <span className="text-sm"></span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4 text-blue-400" />
                              <span className="text-sm"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700">
                        {["Fashion", "Lifestyle", "Travel", "Fashion", "Lifestyle", "Beauty"][index]}
                      </Badge>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {
                          [
                            "Summer Glam",
                            "Everyday Elegance",
                            "Travel Diaries",
                            "Sustainable Chic",
                            "Athleisure Glow",
                            "Glow Essentials",
                          ][index]
                        }
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {
                          [
                            "Fresh & vibrant outfits for sunny days",
                            "Effortless looks for every occasion",
                            "Stories & style from my journeys",
                            "Eco-friendly looks with a luxe touch",
                            "Where comfort meets runway style",
                            "Daily skincare for a flawless look",
                          ][index]
                        }
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation direction="up" delay={600} className="text-center mt-16">
            <Button asChild className="btn-primary group">
              <Link href="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-6xl mx-auto container-padding">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-700 px-4 py-2">Partners</Badge>
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6">Trusted Partners</h2>
            <p className="text-xl text-gray-600">Collaborating with brands that share my values and vision</p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "Imagine", color: "from-gray-900 to-gray-700" },
              { name: "Madan Stores", color: "from-orange-500 to-red-500" },
              { name: "Nykaa", color: "from-blue-600 to-indigo-600" },
              { name: "Nivea", color: "from-red-500 to-pink-500" },
              { name: "Moj", color: "from-gray-800 to-black" },
              { name: "GotChosen", color: "from-blue-500 to-blue-700" },
            ].map((brand, index) => (
              <ScrollAnimation key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                <div className="text-center group">
                  <div
                    className={`bg-gradient-to-br ${brand.color} rounded-2xl p-6 h-20 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
                  >
                    <span className="font-bold text-white text-sm">{brand.name}</span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-mesh opacity-20"></div>

        <div className="relative max-w-4xl mx-auto container-padding text-center">
          <ScrollAnimation direction="up">
            <h2 className="font-serif text-display font-bold mb-8">Ready to Create Something Amazing?</h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's collaborate to bring your brand's story to life through authentic, engaging content that resonates
              with your target audience and drives meaningful results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                className="bg-white text-purple-900 hover:bg-purple-50 rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/collaborate">
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Project
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-purple-900 rounded-full px-8 py-4 text-lg font-semibold bg-transparent shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
