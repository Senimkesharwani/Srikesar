"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Instagram, Youtube, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/instagram", label: "Instagram" },
    { href: "/collaborate", label: "Collaborate" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-serif text-2xl font-bold text-stone-900">
            Srikesar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href ? "text-stone-900 font-semibold" : "text-stone-700 hover:text-stone-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/srikesar_official_18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-pink-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com/@srijalkesharwani377"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 hover:text-red-600 transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    pathname === item.href
                      ? "text-stone-900 bg-stone-100"
                      : "text-stone-700 hover:text-stone-900 hover:bg-stone-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
