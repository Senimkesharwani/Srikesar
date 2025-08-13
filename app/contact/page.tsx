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
  MapPin,
  Instagram,
  Youtube,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Clock,
  Globe,
  Heart,
  Sparkles,
  Star,
  Users,
  Calendar,
  Headphones,
} from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" className="w-full btn-primary text-lg py-4 animate-pulse-glow" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending Message...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </>
      )}
    </Button>
  )
}

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Drop me a line anytime",
      content: "srikesar18@gmail.com",
      href: "mailto:srikesar18@gmail.com",
      gradient: "gradient-primary",
    },
    {
      icon: Clock,
      title: "Response Time",
      subtitle: "Quick turnaround guaranteed",
      content: "Within 24-48 hours",
      gradient: "gradient-secondary",
    },
    {
      icon: MapPin,
      title: "Location",
      subtitle: "Based in the heart of India",
      content: "Prayagraj, India",
      gradient: "gradient-accent",
    },
    {
      icon: Globe,
      title: "Availability",
      subtitle: "Ready for global collaborations",
      content: "Worldwide Projects",
      gradient: "gradient-warm",
    },
  ]

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@srikesar_official_18",
      href: "https://instagram.com/srikesar_official_18",
      gradient: "gradient-instagram",
      followers: "450K+",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "@srikesar",
      href: "https://youtube.com/@srijalkesharwani377",
      gradient: "bg-red-600",
      followers: "1K+",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      handle: "Business Inquiries",
      href: "https://wa.me/9628830855",
      gradient: "bg-green-600",
      followers: "Direct",
    },
  ]

  const faqs = [
    {
      question: "What's your typical response time?",
      answer:
        "I respond to all business inquiries within 24-48 hours. For urgent matters, please mention it in your subject line and I'll prioritize your message.",
      icon: Clock,
    },
    {
      question: "Do you work with international brands?",
      answer:
        "I collaborate with brands globally and I'm experienced in creating content that resonates across different markets and cultures.",
      icon: Globe,
    },
    {
      question: "What information should I include in my inquiry?",
      answer:
        "Please include your brand name, campaign goals, timeline, budget range, and any specific requirements. The more details you provide, the better I can tailor my response.",
      icon: Headphones,
    },
    {
      question: "Do you offer media kits and portfolio samples?",
      answer:
        "Yes! I have a comprehensive media kit available with my latest statistics, audience demographics, and portfolio highlights. You can request it through the collaboration page.",
      icon: Star,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-mesh relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10"></div>
        <div className="max-w-4xl mx-auto container-padding text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-0 px-4 py-2 text-sm font-medium animate-fade-in-up">
            💬 Contact
          </Badge>
          <h1 className="font-serif text-hero font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 animate-fade-in-up stagger-1">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
            Whether you have a collaboration idea, want to say hello, or need more information, I'd love to hear from
            you.
          </p>
          <div className="mt-12 animate-fade-in-up stagger-3">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Heart className="h-5 w-5 text-red-500 animate-bounce-gentle" />
              <span className="text-gray-700 font-medium">Always happy to chat!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-white relative">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-fade-in-left">
                <h2 className="font-serif text-display font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ready to start a conversation? Choose your preferred way to connect with me.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className={`card-elevated hover-lift animate-fade-in-left stagger-${index + 1} group overflow-hidden`}
                  >
                    <div className={`h-1 ${method.gradient}`}></div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`${method.gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <method.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-lg group-hover:text-gradient transition-all duration-300">
                            {method.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-1">{method.subtitle}</p>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                            >
                              {method.content}
                            </a>
                          ) : (
                            <p className="text-gray-700 font-medium">{method.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <div className="animate-fade-in-left stagger-5">
                <h3 className="font-semibold text-gray-900 text-xl mb-6 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
                  Follow My Journey
                </h3>
                <div className="grid gap-4">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                      <Card className="card-elevated hover-lift overflow-hidden">
                        <div className={`h-1 ${social.gradient}`}></div>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`${social.gradient} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                              >
                                <social.icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900 group-hover:text-gradient transition-all duration-300">
                                  {social.name}
                                </div>
                                <div className="text-sm text-gray-500">{social.handle}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-semibold text-purple-600">{social.followers}</div>
                              <div className="text-xs text-gray-500">followers</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <Card className="card-glass shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">Send a Message</h2>

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
                      <p className="font-medium">{state.message}</p>
                    </div>
                  )}

                  <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-semibold">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        className="focus-ring border-2 border-gray-200 rounded-xl py-3 px-4 hover:border-purple-300 transition-colors"
                        placeholder="Enter your full name"
                        required
                        disabled={isPending}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-semibold">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        className="focus-ring border-2 border-gray-200 rounded-xl py-3 px-4 hover:border-purple-300 transition-colors"
                        placeholder="your.email@example.com"
                        required
                        disabled={isPending}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 font-semibold">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        className="focus-ring border-2 border-gray-200 rounded-xl py-3 px-4 hover:border-purple-300 transition-colors"
                        placeholder="What's this about?"
                        required
                        disabled={isPending}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-semibold">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        className="focus-ring border-2 border-gray-200 rounded-xl py-3 px-4 min-h-[120px] hover:border-purple-300 transition-colors"
                        placeholder="Tell me more about your inquiry..."
                        required
                        disabled={isPending}
                      />
                    </div>

                    <SubmitButton pending={isPending} />
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 via-white to-blue-50 relative">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        <div className="max-w-4xl mx-auto container-padding relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-display font-bold text-gray-900 mb-6 animate-fade-in-up">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up stagger-1">Quick answers to common questions</p>
          </div>

          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`card-elevated hover-lift animate-fade-in-up stagger-${index + 1} group overflow-hidden`}
              >
                <div className="h-1 gradient-primary"></div>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <faq.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg mb-3 group-hover:text-gradient transition-all duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up stagger-5">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
              <Users className="h-12 w-12 mx-auto mb-4 animate-bounce-gentle" />
              <h3 className="font-serif text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-purple-100 mb-6 text-lg">
                Don't hesitate to reach out! I'm here to help and always excited to connect with new people.
              </p>
              <Button
                className="btn-secondary hover-glow"
                onClick={() => document.querySelector("form")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Send a Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
