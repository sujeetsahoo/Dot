"use client"

import type React from "react"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

export function AnimationProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize AOS dynamically
    const initAOS = async () => {
      try {
        const AOS = await import("aos")
        await import("aos/dist/aos.css")

        AOS.init({
          duration: 1000,
          easing: "ease-out-cubic",
          once: true,
          offset: 100,
          disable: false,
        })
      } catch (error) {
        console.warn("AOS failed to load:", error)
      }
    }

    initAOS()

    // GSAP global settings
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    })

    // Refresh ScrollTrigger on route changes
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
