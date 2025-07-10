"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-stone-100 text-stone-700">Contact</Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-stone-900 mb-6">Let's Connect</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Whether you have a collaboration idea, want to say hello, or need more information, I'd love to hear from
            you.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8">Get In Touch</h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-stone-100 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-stone-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-stone-900">Email</h3>
                        <a
                          href="mailto:kesharwanisenim85@gmail.com"
                          className="text-stone-600 hover:text-stone-900 transition-colors"
                        >
                          contact@srikesar.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-stone-100 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-stone-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-stone-900">Response Time</h3>
                        <p className="text-stone-600">Within 24-48 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-stone-100 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-stone-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-stone-900">Location</h3>
                        <p className="text-stone-600">Mumbai, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-medium text-stone-900 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/srikesar_official_18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://youtube.com/@srikesar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a
                    href="https://wa.me/your-number"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6">Send a Message</h2>

                  {/* Success/Error Messages */}
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

                  <form action={formAction} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-stone-700 font-medium">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        className="mt-2 border-stone-300 focus:border-stone-500"
                        placeholder="Enter your full name"
                        required
                        disabled={isPending}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-stone-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className="mt-2 border-stone-300 focus:border-stone-500"
                        placeholder="your.email@example.com"
                        required
                        disabled={isPending}
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-stone-700 font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        className="mt-2 border-stone-300 focus:border-stone-500"
                        placeholder="What's this about?"
                        required
                        disabled={isPending}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-stone-700 font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        className="mt-2 border-stone-300 focus:border-stone-500 min-h-[120px]"
                        placeholder="Tell me more about your inquiry..."
                        required
                        disabled={isPending}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-stone-900 text-white hover:bg-stone-800 py-3 rounded-full font-medium"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-stone-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-medium text-stone-900 mb-2">What's your typical response time?</h3>
                <p className="text-stone-600">
                  I respond to all business inquiries within 24-48 hours. For urgent matters, please mention it in your
                  subject line.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-medium text-stone-900 mb-2">Do you work with international brands?</h3>
                <p className="text-stone-600">
                  Yes! I collaborate with brands globally. I'm experienced in creating content that resonates across
                  different markets and cultures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-medium text-stone-900 mb-2">What information should I include in my inquiry?</h3>
                <p className="text-stone-600">
                  Please include your brand name, campaign goals, timeline, budget range, and any specific requirements.
                  The more details you provide, the better I can tailor my response.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-medium text-stone-900 mb-2">Do you offer media kits?</h3>
                <p className="text-stone-600">
                  Yes! I have a comprehensive media kit available with my latest statistics, audience demographics, and
                  portfolio highlights. Request it through the collaboration page.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
