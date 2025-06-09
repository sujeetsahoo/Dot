"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function LocomotiveScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveScrollRef = useRef<any>(null)
  const pathname = usePathname()

  useEffect(() => {
    let locomotiveScroll: any

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default

        if (scrollRef.current) {
          locomotiveScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            class: "is-revealed",
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          })

          locomotiveScrollRef.current = locomotiveScroll
        }
      } catch (error) {
        console.warn("Locomotive Scroll failed to load:", error)
      }
    }

    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(initLocomotiveScroll, 100)

    return () => {
      clearTimeout(timer)
      if (locomotiveScroll) {
        locomotiveScroll.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.update()
    }
  }, [pathname])

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}
