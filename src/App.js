"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeProvider } from "./contexts/ThemeContext"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience/Experience"
import Skills from "./components/Skills/Skills"
import DeveloperProfiles from "./components/DeveloperProfiles/DeveloperProfiles"
import Certifications from "./components/Certifications/Certifications"
import Contact from "./components/Contact/Contact"
import ParallaxBackground from "./components/ParallaxBackground/ParallaxBackground"
import ParticleSystem from "./components/ParticleSystem/ParticleSystem"
import ScrollProgress from "./components/ScrollProgress/ScrollProgress"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"
import Navigation from "./components/Navigation/Navigation"
import "./App.css"

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider>
      <div className="app">
        <ParallaxBackground />
        <ParticleSystem />
        <ScrollProgress />
        <ThemeToggle />
        <Navigation />

        <main className="main-content">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
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
      </div>
    </ThemeProvider>
  )
}

export default App
