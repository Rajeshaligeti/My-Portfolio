"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"
import styles from "./Navigation.module.css"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

function Navigation() {
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

  const scrollToSection = (href) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className={`${styles.nav} ${theme === "light" ? styles.light : styles.dark}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => scrollToSection(item.href)}
              className={`${styles.navButton} ${
                activeSection === item.href.substring(1)
                  ? theme === "light"
                    ? styles.activeLightButton
                    : styles.activeDarkButton
                  : theme === "light"
                    ? styles.inactiveLightButton
                    : styles.inactiveDarkButton
              }`}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.div
                  className={`${styles.activeIndicator} ${theme === "light" ? styles.lightIndicator : styles.darkIndicator}`}
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

export default Navigation
