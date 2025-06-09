"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const slides = [
  {
    id: 1,
    title: "Print &",
    subtitle: "Production",
    description:
      "Creative solutions for all your print and production needs. From concept to execution, we deliver exceptional quality.",
    image: "/images/print-production-hero.png",
    cta: "Explore Services",
  },
  {
    id: 2,
    title: "Digital",
    subtitle: "Excellence",
    description: "Comprehensive digital marketing strategies that drive engagement and deliver measurable results.",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "View Our Work",
  },
  {
    id: 3,
    title: "Creative",
    subtitle: "Advertising",
    description: "Where spirit meets strategy. We transform complex ideas into powerful communications.",
    image: "/placeholder.svg?height=800&width=1200",
    cta: "Get Started",
  },
]

export function AdvancedHeroSlider() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLSpanElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    // GSAP slide transition animation
    const tl = gsap.timeline()

    // Animate out current content
    tl.to([titleRef.current, subtitleRef.current, descriptionRef.current, ctaRef.current], {
      y: 50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
    })
      // Animate in new content
      .fromTo(
        [titleRef.current, subtitleRef.current, descriptionRef.current, ctaRef.current],
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
      )

    // Background image parallax effect
    if (sliderRef.current) {
      const bgImage = sliderRef.current.querySelector(".bg-image")
      if (bgImage) {
        gsap.fromTo(bgImage, { scale: 1.1 }, { scale: 1, duration: 1.5, ease: "power2.out" })
      }
    }
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleCTAClick = (action: string) => {
    switch (action) {
      case "Explore Services":
        router.push("/services")
        break
      case "View Our Work":
        router.push("/work")
        break
      case "Get Started":
        router.push("/contact")
        break
      default:
        router.push("/contact")
    }
  }

  return (
    <div ref={sliderRef} className="relative h-screen overflow-hidden bg-black">
      {/* Background with GSAP parallax */}
      <div className="absolute inset-0">
        <div
          className="bg-image w-full h-full bg-cover bg-center transform scale-110"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="space-y-6">
              <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold">
                <span className="block text-white mb-2">{slides[currentSlide].title}</span>
                <span
                  ref={subtitleRef}
                  className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                >
                  {slides[currentSlide].subtitle}
                </span>
              </h1>

              <p ref={descriptionRef} className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                {slides[currentSlide].description}
              </p>

              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-transform"
                  onClick={() => handleCTAClick(slides[currentSlide].cta)}
                >
                  {slides[currentSlide].cta}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transform hover:scale-105 transition-transform"
                  onClick={() => router.push("/work")}
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Reel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation with GSAP hover effects */}
      <button
        onClick={prevSlide}
        className="nav-arrow absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        onMouseEnter={(e) => gsap.to(e.target, { scale: 1.2, x: -5, duration: 0.3 })}
        onMouseLeave={(e) => gsap.to(e.target, { scale: 1, x: 0, duration: 0.3 })}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="nav-arrow absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        onMouseEnter={(e) => gsap.to(e.target, { scale: 1.2, x: 5, duration: 0.3 })}
        onMouseLeave={(e) => gsap.to(e.target, { scale: 1, x: 0, duration: 0.3 })}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators with GSAP animations */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-to-r from-cyan-400 to-purple-500 w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
            onMouseEnter={(e) => gsap.to(e.target, { scale: 1.3, duration: 0.2 })}
            onMouseLeave={(e) => gsap.to(e.target, { scale: 1, duration: 0.2 })}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-24 right-6 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        onMouseEnter={(e) => gsap.to(e.target, { scale: 1.2, rotation: 360, duration: 0.5 })}
        onMouseLeave={(e) => gsap.to(e.target, { scale: 1, rotation: 0, duration: 0.5 })}
      >
        {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>
    </div>
  )
}
