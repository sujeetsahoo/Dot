"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function GSAPTextReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll(".char")

      gsap.fromTo(
        chars,
        {
          y: 100,
          opacity: 0,
          rotationX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}

export function GSAPParallax({
  children,
  speed = 0.5,
  className = "",
}: { children: React.ReactNode; speed?: number; className?: string }) {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }
  }, [speed])

  return (
    <div ref={parallaxRef} className={className}>
      {children}
    </div>
  )
}

export function GSAPMorphing({ className = "" }: { className?: string }) {
  const morphRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (morphRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true })

      tl.to("#morph-path", {
        duration: 2,
        morphSVG: "M50,10 C80,10 90,40 90,50 C90,60 80,90 50,90 C20,90 10,60 10,50 C10,40 20,10 50,10 Z",
        ease: "power2.inOut",
      }).to("#morph-path", {
        duration: 2,
        morphSVG: "M50,5 C85,5 95,35 95,50 C95,65 85,95 50,95 C15,95 5,65 5,50 C5,35 15,5 50,5 Z",
        ease: "power2.inOut",
      })
    }
  }, [])

  return (
    <svg ref={morphRef} className={className} viewBox="0 0 100 100">
      <path
        id="morph-path"
        d="M50,20 C70,20 80,30 80,50 C80,70 70,80 50,80 C30,80 20,70 20,50 C20,30 30,20 50,20 Z"
        fill="url(#gradient)"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}
