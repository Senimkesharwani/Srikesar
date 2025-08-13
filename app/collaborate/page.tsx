"use client"

import { useState } from "react"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Download,
  Mail,
  Star,
  Users,
  TrendingUp,
  Camera,
  Video,
  ImageIcon,
  Palette,
  Loader2,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Target,
  Award,
  Clock,
  Heart,
  Zap,
} from "lucide-react"
import { submitCollaborationForm, downloadMediaKit } from "@/app/actions/collaborate"

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" className="w-full btn-primary text-lg py-4 animate-pulse-glow" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending Inquiry...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-5 w-5" />
          Send Inquiry
        </>
      )}
    </Button>
  )
}

export default function CollaboratePage() {
  const [state, formAction, isPending] = useActionState(submitCollaborationForm, null)
  const [selectedBudget, setSelectedBudget] = useState("")
  const [selectedProjectType, setSelectedProjectType] = useState("")
  const [isDownloading, setIsDownloading] = useState(false)

  const services = [
    {
      icon: Camera,
      title: "Sponsored Instagram Posts",
      description: "High-quality static posts featuring your products with authentic storytelling",
      price: "Starting from ₹10,000",
      gradient: "gradient-primary",
      deliverables: [
        "2 premium feed posts with creative styling",
      "High-resolution professional photography",
      "Custom-written engaging captions",
      "Tag & mention in relevant stories",
      "Full commercial usage rights",
      ],
    },
    {
      icon: Video,
      title: "Reels & Stories",
      description: "Dynamic video content optimized for maximum engagement and viral potential",
      price: "Starting from ₹20,000",
      gradient: "gradient-secondary",
      deliverables: [
        "1-2 short-form trending Reels",
      "3-5 engaging Instagram Stories",
      "Custom audio/effects aligned with trends",
      "Integrated call-to-action prompts",
      "Performance & insights report",
      ],
    },
    {
      icon: ImageIcon,
      title: "Product Shoots",
      description: "Professional product photography and styling sessions with creative direction",
      price: "Starting from ₹45,000",
      gradient: "gradient-accent",
      deliverables: [
        "Full-day creative shoot",
      "Minimum 12 professionally edited images",
      "Multiple styled setups & backgrounds",
      "All raw and high-res final files",
      "Commercial usage rights included",
      ],
    },
    {
      icon: Palette,
      title: "UGC Content",
      description: "Authentic user-generated style content that builds trust and drives conversions",
      price: "Starting from ₹25,000",
      gradient: "gradient-warm",
      deliverables: [
         "Genuine product experience videos",
      "Lifestyle-focused integration shots",
      "Multiple content formats for ads & organic posts",
      "Relatable, story-driven messaging",
      "Brand-consistent look & tone",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Imagine Apple Team",
      content:
        "Working with Srikesar was exceptional. Her content drove a 40% increase in our campaign engagement and brought authentic storytelling to our brand.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Rahul Sharma",
      company: "Nykaa Brand Manager",
      content:
        "Professional, creative, and results-driven. Srikesar delivered beyond our expectations with content that truly resonated with our audience.",
      rating: 5,
      avatar: "RS",
    },
    {
      name: "Priya Patel",
      company: "Madan Stores",
      content:
        "Her authentic approach to content creation perfectly aligned with our brand values. The ROI was incredible and the collaboration was seamless.",
      rating: 5,
      avatar: "PP",
    },
  ]

  const stats = [
    { icon: Users, value: "450K+", label: "Engaged Followers", color: "text-blue-600" },
    { icon: TrendingUp, value: "8.5%", label: "Avg. Engagement Rate", color: "text-green-600" },
    { icon: Award, value: "40+", label: "Brand Collaborations", color: "text-purple-600" },
    { icon: Target, value: "95%", label: "Client Satisfaction", color: "text-pink-600" },
  ]

  const handleMediaKitDownload = async () => {
    setIsDownloading(true)
    try {
      const result = await downloadMediaKit()
      if (result.success) {
        alert(result.message)
      } else {
        alert(result.message)
      }
    } catch (error) {
      alert("Failed to download media kit. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10"></div>
        <div className="max-w-6xl mx-auto container-padding text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-0 px-4 py-2 text-sm font-medium animate-fade-in-up">
            ✨ Collaborate
          </Badge>
          <h1 className="font-serif text-hero font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 animate-fade-in-up stagger-1 leading-[1.1] pb-4">
            Let's Create Something Amazing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in-up stagger-2">
            Partner with me to create authentic, engaging content that resonates with your target audience and drives
            meaningful results for your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-3">
            <Button
              className="btn-primary text-lg px-8 py-4 hover-glow"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Start a Project
            </Button>
            <Button
              variant="outline"
              className="btn-secondary text-lg px-8 py-4 hover-lift bg-transparent"
              onClick={handleMediaKitDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Download className="mr-2 h-5 w-5" />
              )}
              {isDownloading ? "Downloading..." : "Download Media Kit"}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white relative">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6 animate-fade-in-up">
              Why Brands Choose Me
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
              Proven results and authentic engagement that drives business growth
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center animate-fade-in-up stagger-${index + 1}`}>
                <div className="card-elevated p-8 hover-lift group">
                  <stat.icon
                    className={`h-12 w-12 mx-auto mb-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div className="text-4xl font-bold text-gray-900 mb-3 group-hover:text-gradient transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50 relative">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6 animate-fade-in-up">
              Services Offered
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
              Comprehensive content solutions tailored to your brand's needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`card-elevated hover-lift group animate-fade-in-up stagger-${index + 1} overflow-hidden`}
              >
                <div className={`h-2 ${service.gradient}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`${service.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900 group-hover:text-gradient transition-all duration-300">
                        {service.title}
                      </CardTitle>
                      <div className="text-lg font-semibold text-purple-600 mt-1">{service.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    <div className="font-semibold text-gray-900 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                      Deliverables:
                    </div>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 flex items-center group-hover:text-gray-700 transition-colors"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-transparent to-blue-50"></div>
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6 animate-fade-in-up">What Brands Say</h2>
            <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
              Real feedback from successful collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`card-elevated hover-lift animate-fade-in-up stagger-${index + 1} group`}>
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-gradient transition-all duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="section-padding bg-gradient-to-br from-purple-50 via-white to-blue-50 relative"
      >
        <div className="absolute inset-0 bg-mesh opacity-30"></div>
        <div className="max-w-4xl mx-auto container-padding relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6 animate-fade-in-up">
              Start Your Project
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">
              Tell me about your brand and let's create something amazing together
            </p>
          </div>

          <Card className="card-glass shadow-2xl animate-fade-in-up stagger-2">
            <CardContent className="p-10">
              {/* Success/Error Messages */}
              {state && (
                <div
                  className={`mb-8 p-6 rounded-xl flex items-center space-x-3 animate-scale-in ${
                    state.success
                      ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-200"
                      : "bg-gradient-to-r from-red-50 to-pink-50 text-red-800 border border-red-200"
                  }`}
                >
                  {state.success ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  )}
                  <p className="font-medium">{state?.message}</p>
                </div>
              )}

              <form action={formAction} className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-semibold text-lg">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      className="focus-ring border-2 border-gray-200 rounded-xl py-4 px-4 text-lg hover:border-purple-300 transition-colors"
                      placeholder="Enter your full name"
                      required
                      disabled={isPending}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-semibold text-lg">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="focus-ring border-2 border-gray-200 rounded-xl py-4 px-4 text-lg hover:border-purple-300 transition-colors"
                      placeholder="your.email@example.com"
                      required
                      disabled={isPending}
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700 font-semibold text-lg">
                      Company/Brand *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      className="focus-ring border-2 border-gray-200 rounded-xl py-4 px-4 text-lg hover:border-purple-300 transition-colors"
                      placeholder="Your company name"
                      required
                      disabled={isPending}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-gray-700 font-semibold text-lg">
                      Budget Range
                    </Label>
                    <Select name="budget" value={selectedBudget} onValueChange={setSelectedBudget} disabled={isPending}>
                      <SelectTrigger className="focus-ring border-2 border-gray-200 rounded-xl py-4 px-4 text-lg hover:border-purple-300 transition-colors">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under ₹15,000</SelectItem>
                        <SelectItem value="25k-50k">₹15,000 - ₹30,000</SelectItem>
                        <SelectItem value="50k-100k">₹30,000 - ₹50,000</SelectItem>
                        <SelectItem value="100k-plus">₹50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-gray-700 font-semibold text-lg">
                    Project Type *
                  </Label>
                  <Select
                    name="projectType"
                    value={selectedProjectType}
                    onValueChange={setSelectedProjectType}
                    disabled={isPending}
                  >
                    <SelectTrigger className="focus-ring border-2 border-gray-200 rounded-xl py-4 px-4 text-lg hover:border-purple-300 transition-colors">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sponsored-posts">Sponsored Instagram Posts</SelectItem>
                      <SelectItem value="reels-stories">Reels & Stories</SelectItem>
                      <SelectItem value="product-shoot">Product Shoots</SelectItem>
                      <SelectItem value="ugc-content">UGC Content</SelectItem>
                      <SelectItem value="long-term">Long-term Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-semibold text-lg">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    className="focus-ring border-2 border-gray-200 rounded-xl py-4 px-4 text-lg min-h-[150px] hover:border-purple-300 transition-colors"
                    placeholder="Tell me about your brand, campaign goals, timeline, and any specific requirements..."
                    required
                    disabled={isPending}
                  />
                </div>

                <SubmitButton pending={isPending} />
              </form>

              <div className="mt-10 pt-8 border-t border-gray-200 text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Heart className="h-5 w-5 text-red-500" />
                  <p className="text-gray-600 font-medium">Prefer to email directly?</p>
                </div>
                <a
                  href="mailto:srikesar18@gmail.com"
                  className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  srikesar18@gmail.com
                </a>
                <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Response within 24-48 hours</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>Business inquiries only</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
