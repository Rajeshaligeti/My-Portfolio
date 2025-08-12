"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      className={`fixed top-28 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
        theme === "light"
          ? "bg-white/20 border-white/30 text-gray-800 hover:bg-white/30"
          : "bg-black/20 border-white/20 text-white hover:bg-black/30"
      }`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div 
        initial={false} 
        animate={{ rotate: 0 }} 
        transition={{ duration: 0.3 }}
      >
        {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  )
}
