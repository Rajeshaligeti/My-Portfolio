"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import DeveloperProfiles from "@/components/developer-profiles"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import ParallaxBackground from "@/components/parallax-background"
import ParticleSystem from "@/components/particle-system"
import ScrollProgress from "@/components/scroll-progress"
import ThemeToggle from "@/components/theme-toggle"
import Navigation from "@/components/navigation"
import SmoothLoader from "@/components/smooth-loader"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SmoothLoader key="loader" onLoadComplete={handleLoadComplete} />
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1,
              ease: [0.4, 0, 0.2, 1],
              staggerChildren: 0.1
            }}
            className="relative min-h-screen overflow-x-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ParallaxBackground />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ParticleSystem />
            </motion.div>
            
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ScrollProgress />
              <ThemeToggle />
              <Navigation />
            </motion.div>

            <main className="relative z-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Skills />
                <DeveloperProfiles />
                <Certifications />
                <Contact />
              </motion.div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}
