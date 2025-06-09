"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Tv, Smartphone, Megaphone, Calendar, Target, Lightbulb } from "lucide-react"
import { useRouter } from "next/navigation"
import { ScrollReveal } from "./scroll-animations"

const services = [
  {
    icon: <Tv className="w-12 h-12" />,
    title: "TV & Radio",
    description: "Compelling broadcast content that captures attention and drives engagement.",
    gradient: "from-red-500 to-orange-600",
    delay: 0.1,
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Digital Marketing",
    description: "Comprehensive digital strategies including social media and SEO.",
    gradient: "from-blue-500 to-cyan-600",
    delay: 0.2,
  },
  {
    icon: <Megaphone className="w-12 h-12" />,
    title: "Print & Outdoor",
    description: "Eye-catching print materials and outdoor advertising solutions.",
    gradient: "from-green-500 to-teal-600",
    delay: 0.3,
  },
  {
    icon: <Calendar className="w-12 h-12" />,
    title: "Events & Exhibitions",
    description: "Memorable event experiences and exhibition designs.",
    gradient: "from-purple-500 to-pink-600",
    delay: 0.4,
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: "Brand Strategy",
    description: "Strategic brand positioning and messaging that resonates.",
    gradient: "from-yellow-500 to-orange-600",
    delay: 0.5,
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Creative Conceptualization",
    description: "Innovative concepts that transform complex ideas.",
    gradient: "from-indigo-500 to-purple-600",
    delay: 0.6,
  },
]

export function AdvancedServiceCards() {
  const router = useRouter()
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".service-card")

      // Initial state
      gsap.set(cards, {
        y: 100,
        opacity: 0,
        rotationX: -15,
        transformPerspective: 1000,
      })

      // Scroll-triggered animation
      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(cards, {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
          })
        },
      })

      // Hover animations for each card
      cards.forEach((card) => {
        const icon = card.querySelector(".service-icon")
        const title = card.querySelector(".service-title")
        const arrow = card.querySelector(".service-arrow")

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -20,
            scale: 1.05,
            rotationY: 5,
            duration: 0.4,
            ease: "power2.out",
          })

          if (icon) {
            gsap.to(icon, {
              scale: 1.2,
              rotation: 360,
              duration: 0.6,
              ease: "back.out(1.7)",
            })
          }

          if (title) {
            gsap.to(title, {
              color: "#06b6d4",
              duration: 0.3,
            })
          }

          if (arrow) {
            gsap.to(arrow, {
              x: 10,
              duration: 0.3,
            })
          }
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.4,
            ease: "power2.out",
          })

          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.4,
            })
          }

          if (title) {
            gsap.to(title, {
              color: "#ffffff",
              duration: 0.3,
            })
          }

          if (arrow) {
            gsap.to(arrow, {
              x: 0,
              duration: 0.3,
            })
          }
        })
      })
    }
  }, [])

  return (
    <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ScrollReveal key={index} animation="fadeUp" delay={service.delay}>
          <Card
            className="service-card h-full glass border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer transform-gpu"
            onClick={() => router.push("/services")}
          >
            <CardContent className="p-8">
              <div
                className={`service-icon w-20 h-20 mb-6 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg transform-gpu`}
              >
                {service.icon}
              </div>

              <h3 className="service-title text-2xl font-bold mb-4 text-white transition-colors">{service.title}</h3>

              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <div className="service-arrow flex items-center text-cyan-400 font-semibold">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  )
}
