"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AdvancedHeroSlider } from "@/components/advanced-hero-slider"
import { AdvancedServiceCards } from "@/components/advanced-service-cards"
import { ScrollReveal, StaggerReveal } from "@/components/scroll-animations"
import { MagneticButton } from "@/components/magnetic-button"
import { ArrowRight, Target, Users, Award, Globe } from "lucide-react"
import { useRouter } from "next/navigation"
import '../styles/globals.css';   

const stats = [
  { number: "500+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
  { number: "150+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
  { number: "8+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
  { number: "24/7", label: "Support Available", icon: <Globe className="w-6 h-6" /> },
]

export default function HomePage() {
  const router = useRouter()
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Stats counter animation
    if (statsRef.current) {
      const statNumbers = statsRef.current.querySelectorAll(".stat-number")

      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => {
          statNumbers.forEach((stat, index) => {
            const finalValue = stat.textContent || "0"
            const numericValue = Number.parseInt(finalValue.replace(/\D/g, ""))

            gsap.fromTo(
              stat,
              { textContent: 0 },
              {
                textContent: numericValue,
                duration: 2,
                delay: index * 0.2,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate: function () {
                  const current = Math.round(this.targets()[0].textContent)
                  if (finalValue.includes("+")) {
                    stat.textContent = current + "+"
                  } else if (finalValue.includes("/")) {
                    stat.textContent = current + "/7"
                  } else {
                    stat.textContent = current.toString()
                  }
                },
              },
            )
          })
        },
      })
    }
  }, [])

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Advanced Hero Slider */}
      <AdvancedHeroSlider />

      {/* Stats Section with GSAP Animations */}
      <section ref={statsRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h2>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white transform group-hover:rotate-360 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <div className="stat-number text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Services Section with Advanced Cards */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Comprehensive solutions across all media channels</p>
          </ScrollReveal>

          <AdvancedServiceCards />

          <ScrollReveal animation="zoomIn" delay={0.7} className="text-center mt-12">
            <MagneticButton
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transform transition-all duration-300"
              onClick={() => handleNavigation("/services")}
            >
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="zoomIn" className="max-w-4xl mx-auto">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Brand?
            </h2>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Your vision, our expertise.
            </p>

            <MagneticButton
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-full animate-glow transform transition-all duration-300"
              onClick={() => handleNavigation("/contact")}
              strength={0.5}
            >
              Start Your Project <ArrowRight className="ml-3 w-6 h-6" />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
