"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme-context"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gray-700 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div animate={{ rotate: theme === "dark" ? 0 : 180 }} transition={{ duration: 0.3 }}>
          {theme === "dark" ? <Moon className="w-4 h-4 text-gray-700" /> : <Sun className="w-4 h-4 text-yellow-500" />}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}
