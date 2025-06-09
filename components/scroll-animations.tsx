"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

// Custom scroll reveal component to replace AOS
export function ScrollReveal({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
}: {
  children: React.ReactNode
  className?: string
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "zoomIn"
  delay?: number
  duration?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      let fromVars: any = {}
      let toVars: any = {}

      switch (animation) {
        case "fadeUp":
          fromVars = { opacity: 0, y: 50 }
          toVars = { opacity: 1, y: 0 }
          break
        case "fadeIn":
          fromVars = { opacity: 0 }
          toVars = { opacity: 1 }
          break
        case "slideLeft":
          fromVars = { opacity: 0, x: -50 }
          toVars = { opacity: 1, x: 0 }
          break
        case "slideRight":
          fromVars = { opacity: 0, x: 50 }
          toVars = { opacity: 1, x: 0 }
          break
        case "zoomIn":
          fromVars = { opacity: 0, scale: 0.8 }
          toVars = { opacity: 1, scale: 1 }
          break
      }

      gsap.fromTo(ref.current, fromVars, {
        ...toVars,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    }
  }, [animation, delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Stagger animation component
export function StaggerReveal({
  children,
  className = "",
  stagger = 0.1,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const items = ref.current.children

      gsap.fromTo(
        items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
