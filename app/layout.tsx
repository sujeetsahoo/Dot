import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-context"
import { AnimationProviders } from "@/lib/animation-providers"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dot Communications - Creative Advertising Solutions",
  description: "Transform your brand with creative yet simplistic advertising solutions across all media channels.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black dark:bg-black text-white dark:text-white`}>
        <ThemeProvider>
          <AnimationProviders>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </AnimationProviders>
        </ThemeProvider>
      </body>
    </html>
  )
}
