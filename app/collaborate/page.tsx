"use client"

import { useState, useTransition } from "react"
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
  Send,
} from "lucide-react"
import { submitCollaborationForm, downloadMediaKit } from "@/app/actions/collaborate"

export default function CollaboratePage() {
  const [state, formAction, isPending] = useActionState(submitCollaborationForm, null)
  const [selectedBudget, setSelectedBudget] = useState("")
  const [selectedProjectType, setSelectedProjectType] = useState("")
  const [isDownloading, setIsDownloading] = useState(false)
  const [isSubmitting, startTransition] = useTransition()

  const services = [
    {
      icon: Camera,
      title: "Sponsored Instagram Posts",
      description: "High-quality static posts featuring your products or services",
      price: "Starting from ₹25,000",
      deliverables: ["1-3 feed posts", "Professional photography", "Engaging captions", "Story mentions"],
    },
    {
      icon: Video,
      title: "Reels & Stories",
      description: "Dynamic video content optimized for maximum engagement",
      price: "Starting from ₹35,000",
      deliverables: ["1-2 Reels", "5-8 Story frames", "Trending audio/effects", "Call-to-action integration"],
    },
    {
      icon: ImageIcon,
      title: "Product Shoots",
      description: "Professional product photography and styling sessions",
      price: "Starting from ₹45,000",
      deliverables: ["Full-day shoot", "20+ edited photos", "Multiple angles/styles", "Usage rights included"],
    },
    {
      icon: Palette,
      title: "UGC Content",
      description: "Authentic user-generated style content for your campaigns",
      price: "Starting from ₹20,000",
      deliverables: ["Authentic testimonials", "Lifestyle integration", "Multiple formats", "Organic feel"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Zara Marketing Team",
      content: "Working with Srikesar was exceptional. His content drove a 40% increase in our campaign engagement.",
      rating: 5,
    },
    {
      name: "Rahul Sharma",
      company: "Beardo Brand Manager",
      content: "Professional, creative, and results-driven. Srikesar delivered beyond our expectations.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      company: "The Man Company",
      content: "His authentic approach to content creation perfectly aligned with our brand values.",
      rating: 5,
    },
  ]

  const handleMediaKitDownload = async () => {
    setIsDownloading(true)
    try {
      const result = await downloadMediaKit()
      alert(result.message)
    } catch (error) {
      alert("Failed to download media kit. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <Badge className="mb-4 bg-stone-100 text-stone-700">Collaborate</Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-6">
            Let's Create Something Amazing
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Partner with me to create authentic, engaging content that resonates with your target audience and drives
            meaningful results for your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-stone-900 text-white hover:bg-stone-800 rounded-full px-8"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Start a Project
            </Button>
            <Button
              variant="outline"
              className="border-stone-300 text-stone-700 hover:bg-stone-100 rounded-full px-8 bg-transparent"
              onClick={handleMediaKitDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Download className="mr-2 h-4 w-4" />
              )}
              {isDownloading ? "Downloading..." : "Download Media Kit"}
            </Button>
          </div>
        </div>
      </section>

      {/* Remaining sections unchanged ... */}

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">Start Your Project</h2>
            <p className="text-xl text-stone-600">
              Tell me about your brand and let's create something amazing together
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              {state && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                    state.success
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {state.success ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  )}
                  <p>{state.message}</p>
                </div>
              )}

              <form
                action={(formData) =>
                  startTransition(() => {
                    formAction(formData)
                  })
                }
                className="space-y-6"
              >
                {/* Inputs */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input name="name" id="name" required disabled={isSubmitting} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input name="email" id="email" type="email" required disabled={isSubmitting} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company/Brand *</Label>
                    <Input name="company" id="company" required disabled={isSubmitting} />
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      name="budget"
                      value={selectedBudget}
                      onValueChange={setSelectedBudget}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                        <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                        <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="100k-plus">₹1,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    name="projectType"
                    value={selectedProjectType}
                    onValueChange={setSelectedProjectType}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger>
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

                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    name="message"
                    id="message"
                    placeholder="Tell me about your brand, campaign goals, timeline, and any specific requirements..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-stone-900 text-white hover:bg-stone-800 py-3 rounded-full text-lg font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t text-center border-stone-200">
                <p className="text-stone-600 mb-4">Prefer to email directly? Reach out to:</p>
                <a href="mailto:kesharwanisenim85@gmail.com" className="text-stone-900 font-medium hover:underline">
                  contact@srikesar.com
                </a>
                <p className="text-sm text-stone-500 mt-2">Response within 24-48 hours • Business inquiries only</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
