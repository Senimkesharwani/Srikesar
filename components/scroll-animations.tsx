"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

export default function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is entering the viewport
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }

          timeoutRef.current = setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay)
        } else {
          // Element is leaving the viewport
          if (hasAnimated) {
            // Reset the animation state when element goes out of view
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current)
            }
            setIsVisible(false)
            // Small delay before allowing re-animation
            setTimeout(() => {
              setHasAnimated(false)
            }, 100)
          }
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [delay, threshold, rootMargin, hasAnimated])

  const getTransformClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "left":
          return "translate-x-[-100px] opacity-0"
        case "right":
          return "translate-x-[100px] opacity-0"
        case "up":
          return "translate-y-[50px] opacity-0"
        case "down":
          return "translate-y-[-50px] opacity-0"
        default:
          return "translate-y-[50px] opacity-0"
      }
    }
    return "translate-x-0 translate-y-0 opacity-100"
  }

  return (
    <div ref={ref} className={`transform transition-all duration-700 ease-out ${getTransformClass()} ${className}`}>
      {children}
    </div>
  )
}

interface StaggeredAnimationProps {
  children: React.ReactNode[]
  direction?: "left" | "right"
  staggerDelay?: number
  className?: string
  threshold?: number
}

export function StaggeredAnimation({
  children,
  direction = "left",
  staggerDelay = 100,
  className = "",
  threshold = 0.1,
}: StaggeredAnimationProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation key={index} direction={direction} delay={index * staggerDelay} threshold={threshold}>
          {child}
        </ScrollAnimation>
      ))}
    </div>
  )
}

// Alternative hook-based approach for more control
export function useScrollAnimation(threshold = 0.1, rootMargin = "0px 0px -50px 0px") {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Always update visibility based on intersection
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin])

  return { ref, isVisible }
}
