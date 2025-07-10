import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Camera, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const achievements = [
    { icon: Users, number: "450K+", label: "Followers" },
    { icon: Camera, number: "300+", label: "Reels Created" },
    { icon: Award, number: "40+", label: "Brand Collaborations" },
    { icon: TrendingUp, number: "15M+", label: "Total Reach" },
  ]

  const values = [
    {
      title: "Authenticity",
      description: "Every piece of content reflects genuine experiences and honest recommendations.",
    },
    {
      title: "Quality",
      description: "High production values and attention to detail in every post and collaboration.",
    },
    {
      title: "Innovation",
      description: "Constantly exploring new formats, trends, and creative approaches to content.",
    },
    {
      title: "Impact",
      description: "Creating content that inspires positive change and meaningful connections.",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-stone-100 text-stone-700">About Srikesar</Badge>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-6">
                The Story Behind the Style
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed mb-8">
                From a passion for personal style to inspiring hundreds of thousands of followers worldwide, my journey
                is one of authenticity, creativity, and meaningful connections.
              </p>
              <Link href="/portfolio">
                <Button className="bg-stone-900 text-white hover:bg-stone-800 rounded-full px-8">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/hello.jpeg?w=500&h=600&fit=crop&crop=face"
                alt="Srikesar - About Photo"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Impact in Numbers</h2>
            <p className="text-xl text-stone-600">Building meaningful connections through authentic content</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <achievement.icon className="h-8 w-8 mx-auto mb-4 text-stone-600" />
                  <div className="text-3xl font-bold text-stone-900 mb-2">{achievement.number}</div>
                  <div className="text-stone-600">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-6">My Journey</h2>
          </div>

          <div className="space-y-8 text-lg text-stone-600 leading-relaxed">
            <p>
              What began as a personal exploration of style and self-expression has evolved into a platform that reaches
              and inspires hundreds of thousands of people daily. My journey as a content creator started with a simple
              belief: that style is a powerful form of communication, and everyone deserves to feel confident in their
              own skin.
            </p>

            <p>
              Growing up, I was always drawn to the intersection of fashion, culture, and storytelling. I noticed how
              the right outfit could transform not just how you looked, but how you felt and how others perceived you.
              This fascination led me to start documenting my own style journey, sharing insights about men's fashion,
              grooming, and lifestyle choices.
            </p>

            <p>
              As my audience grew, so did my responsibility. I realized that with influence comes the opportunity to
              make a positive impact. Today, I focus on creating content that not only showcases great style but also
              promotes self-confidence, authenticity, and mindful consumption. Every collaboration I undertake is
              carefully chosen to align with these values.
            </p>

            <p>
              My aesthetic philosophy centers around the idea that less is more. I believe in investing in quality
              pieces that tell a story, rather than following every fleeting trend. This minimalist approach to fashion
              extends to my content creation as well – every post is intentional, every collaboration meaningful.
            </p>
          </div>

          <div className="mt-12 p-8 bg-stone-50 rounded-2xl">
            <blockquote className="text-2xl font-serif text-stone-900 text-center italic">
              "Style is a way to say who you are without speaking. My mission is to help others find their voice through
              authentic self-expression."
            </blockquote>
            <div className="text-center mt-4 text-stone-600">— Srikesar</div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">What Drives Me</h2>
            <p className="text-xl text-stone-600">The core values that guide every piece of content I create</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-stone-900 mb-4">{value.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-stone-900 to-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Whether you're a brand looking for authentic partnerships or someone seeking style inspiration, I'd love to
            connect with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collaborate">
              <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-100 rounded-full px-8">
                Work With Me
                <ArrowRight className="ml-2 h-4 w-4" />
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
