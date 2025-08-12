"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const { theme } = useTheme()
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 px-8 py-4 rounded-full backdrop-blur-md border-2 transition-all duration-300 ${
        theme === "light" ? "bg-white/25 border-white/40 shadow-xl" : "bg-black/25 border-white/20 shadow-2xl"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        marginLeft: "-4px",
        boxShadow:
          theme === "dark"
            ? "0 0 30px rgba(139, 92, 246, 0.2), inset 0 0 30px rgba(139, 92, 246, 0.05)"
            : "0 20px 40px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(147, 51, 234, 0.05)",
      }}
    >
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => scrollToSection(item.href)}
              className={`relative px-4 py-3 text-base font-semibold transition-all duration-300 rounded-lg ${
                activeSection === item.href.substring(1)
                  ? theme === "light"
                    ? "text-purple-700 bg-purple-100/50"
                    : "text-violet-300 bg-violet-500/20"
                  : theme === "light"
                    ? "text-gray-700 hover:text-purple-600 hover:bg-purple-50/50"
                    : "text-gray-300 hover:text-violet-400 hover:bg-violet-500/10"
              }`}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.div
                  className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                    theme === "light" ? "bg-purple-600" : "bg-violet-400"
                  }`}
                  layoutId="activeTab"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
