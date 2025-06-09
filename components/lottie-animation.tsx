"use client"

import { useEffect, useRef } from "react"

interface LottieAnimationProps {
  animationData?: any
  src?: string
  className?: string
  loop?: boolean
  autoplay?: boolean
  speed?: number
  onComplete?: () => void
}

export function LottieAnimation({
  animationData,
  src,
  className = "",
  loop = true,
  autoplay = true,
  speed = 1,
  onComplete,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<any>(null)

  useEffect(() => {
    const loadLottie = async () => {
      try {
        const lottie = await import("lottie-web")

        if (containerRef.current && (animationData || src)) {
          animationRef.current = lottie.default.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop,
            autoplay,
            animationData: animationData,
            path: src,
          })

          animationRef.current.setSpeed(speed)

          if (onComplete) {
            animationRef.current.addEventListener("complete", onComplete)
          }
        }
      } catch (error) {
        console.warn("Lottie failed to load:", error)
      }
    }

    loadLottie()

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
    }
  }, [animationData, src, loop, autoplay, speed, onComplete])

  return <div ref={containerRef} className={className} />
}
