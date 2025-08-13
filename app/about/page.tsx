import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Mail, MapPin, Calendar, Users, TrendingUp, Star, Heart, Award, Camera, Palette } from "lucide-react"
import InstagramWidget from "@/components/instagram-widget"
import ScrollAnimation from "@/components/scroll-animations"
import Image from "next/image"

export default function AboutPage() {
  const achievements = [
    {
      icon: Users,
      title: "450K+ Followers",
      description: "Engaged community across Instagram",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "8.5% Engagement Rate",
      description: "Above industry average performance",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Star,
      title: "40+ Brand Collaborations",
      description: "Successful partnerships with leading brands",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Award,
      title: "Top Fashion Influencer",
      description: "Recognized in lifestyle and fashion category",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const values = [
    {
      title: "Authenticity",
      description:
        "I believe in genuine connections and honest recommendations. Every collaboration reflects my personal style and values.",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Quality",
      description:
        "From photography to content creation, I maintain high standards in everything I produce for my audience and brand partners.",
      icon: Camera,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Community",
      description:
        "Building meaningful relationships with my followers and creating content that inspires and empowers others.",
      icon: Users,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Innovation",
      description:
        "Staying ahead of trends while maintaining my unique voice and perspective in the fashion and lifestyle space.",
      icon: Palette,
      color: "from-purple-500 to-violet-500",
    },
  ]

  const skills = [
    { name: "Content Creation", level: 95 },
    { name: "Photography", level: 90 },
    { name: "Brand Collaboration", level: 98 },
    { name: "Social Media Strategy", level: 92 },
    { name: "Video Production", level: 88 },
    { name: "Fashion Styling", level: 94 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20"></div>
        <div className="absolute inset-0 bg-dots opacity-10"></div>

        <div className="relative max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation direction="left">
              <div className="space-y-8">
                <Badge className="bg-white/20 text-white border-white/30 px-6 py-2 text-sm font-medium">About Me</Badge>
                <h1 className="font-serif text-hero font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="text-gradient bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                    Srikesar
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed">
                  A passionate fashion and lifestyle influencer dedicated to inspiring others through authentic content,
                  style tips, and meaningful brand collaborations.
                </p>

                <div className="flex items-center space-x-8 text-purple-200">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Prayagraj, India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Creator since 2019</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-white text-purple-900 hover:bg-purple-50 rounded-full px-8 py-3 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Link href="/collaborate">
                      <Mail className="mr-2 h-4 w-4" />
                      Work With Me
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-white text-white hover:bg-white hover:text-purple-900 rounded-full px-8 py-3 font-semibold bg-transparent shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Link href="https://instagram.com/srikesar_official_18" target="_blank">
                      <Instagram className="mr-2 h-4 w-4" />
                      Follow on Instagram
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
                <div className="relative">
                  <Image
                    src="/images/About.png"
                    alt="Srikesar - About Me"
                    width={600}
                    height={750}
                    className="w-full h-[600px] object-cover rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
                  />

                  {/* Floating Achievement Card */}
                  <div className="absolute -bottom-6 -right-6 card-glass p-6 animate-bounce-gentle">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">450K+</div>
                      <div className="text-sm text-white/80">Followers</div>
                    </div>
                  </div>

                  <div className="absolute -top-6 -left-6 card-glass p-4 animate-bounce-gentle stagger-2">
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <span className="text-white font-medium">Top Creator</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">My Journey</Badge>
            <h2 className="font-serif text-display font-bold text-gray-900 mb-8">My Story</h2>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="prose prose-lg prose-gray max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  My journey as a content creator began with a simple love for fashion and a desire to share my personal
                  style with the world. What started as casual outfit posts has evolved into a platform where I connect
                  with hundreds of thousands of people who share my passion for fashion, lifestyle, and authentic
                  living.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Over the years, I've had the privilege of collaborating with amazing brands, from emerging designers
                  to established fashion houses. Each partnership has taught me something new and helped me grow both
                  personally and professionally.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Today, I'm focused on creating content that not only showcases beautiful fashion and lifestyle moments
                  but also inspires my community to embrace their own unique style and live authentically.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto container-padding">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">Achievements</Badge>
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6">Milestones & Recognition</h2>
            <p className="text-xl text-gray-600">Key achievements that define my journey as a content creator</p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 100}>
                <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`bg-gradient-to-br ${achievement.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-700 px-4 py-2">Core Values</Badge>
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6">What Drives Me</h2>
            <p className="text-xl text-gray-600">The principles that guide my content and collaborations</p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`bg-gradient-to-br ${value.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-900 mb-3">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Content Section */}
      <section className="section-padding bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto container-padding">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-instagram text-white px-4 py-2">Follow My Journey</Badge>
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6">Behind the Scenes</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get a glimpse into my daily life, fashion inspiration, and behind-the-scenes moments from collaborations
              and photoshoots
            </p>

            <Button asChild variant="outline" className="btn-secondary group bg-transparent">
              <Link href="https://instagram.com/srikesar_official_18" target="_blank">
                <Instagram className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                @srikesar_official_18
              </Link>
            </Button>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <div className="card-elevated p-8 bg-gradient-to-br from-white to-purple-50">
              <InstagramWidget height="500px" className="rounded-2xl overflow-hidden" />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-mesh opacity-20"></div>

        <div className="relative max-w-4xl mx-auto container-padding text-center">
          <ScrollAnimation direction="up">
            <h2 className="font-serif text-display font-bold mb-8">Let's Create Together</h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              I'm always excited to collaborate with brands that align with my values and resonate with my community.
              Let's create something beautiful together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                className="bg-white text-purple-900 hover:bg-purple-50 rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/collaborate">
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Collaboration
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-purple-900 rounded-full px-8 py-4 text-lg font-semibold bg-transparent shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Link href="/contact">
                  <Heart className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
