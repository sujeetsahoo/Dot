"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  services: [
    { name: "Print & Production", href: "/services#print" },
    { name: "Digital Marketing", href: "/services#digital" },
    { name: "TV & Radio", href: "/services#broadcast" },
    { name: "Events & Exhibitions", href: "/services#events" },
    { name: "Brand Strategy", href: "/services#branding" },
    { name: "Creative Conceptualization", href: "/services#creative" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/work" },
    { name: "Clients", href: "/clients" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  specialties: [
    { name: "Magazine Design", href: "/work#magazines" },
    { name: "Coffee Table Books", href: "/work#books" },
    { name: "EPCH Solutions", href: "/work#epch" },
    { name: "Corporate Branding", href: "/work#corporate" },
    { name: "Export Marketing", href: "/work#export" },
    { name: "Trade Shows", href: "/work#tradeshows" },
  ],
}

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
  { icon: <Youtube className="w-5 h-5" />, href: "#", name: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/">
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 mb-6">
                  <motion.div
                    className="relative w-12 h-12"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-pulse" />
                    <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">•</span>
                    </div>
                  </motion.div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Dot Communications
                  </span>
                </motion.div>
              </Link>

              <p className="text-gray-400 mb-6 leading-relaxed">
                A place where we bring together our spirit and answer complex queries with creative yet simplistic
                advertising solutions. We endow marketing and advertising services across all media channels.
              </p>

              <div className="space-y-3">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>hello@dotcommunications.in</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+91 98765 43210</span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Mumbai, Maharashtra, India</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-cyan-400">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <motion.span whileHover={{ x: 5 }} className="group-hover:text-cyan-400 transition-colors">
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-purple-400">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <motion.span whileHover={{ x: 5 }} className="group-hover:text-purple-400 transition-colors">
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Specialties */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-pink-400">Specialties</h3>
              <ul className="space-y-3">
                {footerLinks.specialties.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <motion.span whileHover={{ x: 5 }} className="group-hover:text-pink-400 transition-colors">
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Stay Updated</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest updates on creative trends, industry insights, and our newest
                projects.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Enter your email"
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 transition-colors flex-1"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8">
                  Subscribe <Send className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/50">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
          >
            <p>&copy; 2024 Dot Communications. All rights reserved. Bringing spirit to advertising.</p>
            <p className="mt-2 md:mt-0">Made with ❤️ in India | Designed for Global Impact</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
