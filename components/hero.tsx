"use client"

import { motion } from "framer-motion"
import { Download, Mail, Eye, Sparkles, Code, Brain } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useState, useEffect } from "react"
import { useMobileOptimization, getAnimationConfig, getMobileClasses } from "../hooks/use-mobile-optimization"

// Add custom JSX type for 'model-viewer'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string
        alt?: string
        'auto-rotate'?: boolean
        'camera-controls'?: boolean
        'auto-rotate-delay'?: string | number
        'rotation-per-second'?: string
        'shadow-intensity'?: string | number
        exposure?: string | number
        poster?: string
        loading?: string
        reveal?: string
        className?: string
        'environment-image'?: string
        'camera-orbit'?: string
        'min-camera-orbit'?: string
        'max-camera-orbit'?: string
        'field-of-view'?: string
        'interaction-prompt'?: string
        'touch-action'?: string
        'disable-zoom'?: boolean
        'disable-tap'?: boolean
      }
    }
  }
}

export default function Hero() {
  const { theme } = useTheme()
  const mobileInfo = useMobileOptimization()
  const animConfig = getAnimationConfig(mobileInfo)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side - Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left relative z-10"
            initial={{ opacity: 0, x: -50 }} // Reduced offset
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} // Faster
          >
            {/* Floating icons around text - Mobile optimized */}
            <motion.div
              className={getMobileClasses(mobileInfo, `absolute -top-8 -left-8 p-3 rounded-full ${
                theme === "light" ? "bg-purple-100/80 text-purple-600" : "bg-violet-500/20 text-violet-400"
              }`)}
              animate={mobileInfo.isHydrated && !mobileInfo.prefersReducedMotion ? {
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              } : {}}
              transition={{ 
                duration: animConfig.duration * 2.5, 
                repeat: animConfig.repeat === Infinity ? Number.POSITIVE_INFINITY : animConfig.repeat, 
                ease: animConfig.ease 
              }}
            >
              <Brain size={mobileInfo.isMobile ? 20 : 24} />
            </motion.div>

            <motion.div
              className={getMobileClasses(mobileInfo, `absolute -top-4 -right-12 p-3 rounded-full ${
                theme === "light" ? "bg-pink-100/80 text-pink-600" : "bg-purple-500/20 text-purple-400"
              }`)}
              animate={mobileInfo.isHydrated && !mobileInfo.prefersReducedMotion ? {
                y: [0, -15, 0],
                rotate: [0, -5, 5, 0],
              } : {}}
              transition={{ 
                duration: animConfig.duration * 3, 
                repeat: animConfig.repeat === Infinity ? Number.POSITIVE_INFINITY : animConfig.repeat, 
                ease: animConfig.ease, 
                delay: mobileInfo.isMobile ? 0.2 : 1 
              }}
            >
              <Code size={20} />
            </motion.div>

            <motion.div
              className={`absolute top-20 -left-16 p-2 rounded-full ${
                theme === "light" ? "bg-indigo-100/80 text-indigo-600" : "bg-cyan-500/20 text-cyan-400"
              }`}
              animate={{
                y: [0, -8, 0],
                x: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
            >
              <Sparkles size={18} />
            </motion.div>

            <motion.h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
              initial={{ opacity: 0, y: 30 }} // Reduced offset
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} // Faster with shorter delay
            >
              <motion.span
                className={`bg-gradient-to-r ${
                  theme === "light"
                    ? "from-purple-600 via-pink-600 to-indigo-600"
                    : "from-violet-400 via-purple-400 to-cyan-400"
                } bg-clip-text text-transparent`}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Rajesh
              </motion.span>{" "}
              <br className="hidden sm:block" />
              Aligeti
            </motion.h1>

            <motion.h2
              className={`text-2xl md:text-3xl font-semibold mb-8 ${
                theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}
              initial={{ opacity: 0, y: 20 }} // Reduced offset
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }} // Faster
            >
              AI/ML Engineer & Backend Developer
            </motion.h2>

            <motion.p
              className={`text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed shine-text-metallic ${
                theme === "light" ? "text-gray-700" : "text-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <span className="typewriter-no-caret">
                "I don't just train models — I train them to{" "}
                <span
                  className={`font-bold shine-text-metallic ${theme === "light" ? "text-purple-600" : "text-violet-400"}`}
                >
                  matter
                </span>
                ."
              </span>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            >
              <motion.a
                href="/Aligeti Rajesh Resume.pdf"
                download
                className={`group px-8 py-4 rounded-full backdrop-blur-md border-2 font-bold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl ${
                  theme === "light"
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-700 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-500/60 hover:shadow-purple-500/30"
                    : "bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-500/40 text-violet-300 hover:from-violet-500/30 hover:to-purple-500/30 hover:border-violet-500/60 hover:shadow-violet-500/30"
                }`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Download className="inline-block w-6 h-6 mr-3 group-hover:animate-bounce" />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-4 rounded-full backdrop-blur-md border-2 font-bold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl ${
                  theme === "light"
                    ? "bg-white/30 border-white/50 text-gray-700 hover:bg-white/40 hover:border-white/70 hover:shadow-white/30"
                    : "bg-black/30 border-white/40 text-white hover:bg-black/40 hover:border-white/60 hover:shadow-white/20"
                }`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Mail className="inline-block w-6 h-6 mr-3" />
                Contact Me
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("projects")}
                className={`px-8 py-4 rounded-full backdrop-blur-md border-2 font-bold text-lg transition-all duration-500 shadow-xl hover:shadow-2xl ${
                  theme === "light"
                    ? "bg-white/30 border-white/50 text-gray-700 hover:bg-white/40 hover:border-white/70 hover:shadow-white/30"
                    : "bg-black/30 border-white/40 text-white hover:bg-black/40 hover:border-white/60 hover:shadow-white/20"
                }`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Eye className="inline-block w-6 h-6 mr-3" />
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Planet Model */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ scale: 0.8, rotate: -90, opacity: 0 }} // Less dramatic rotation
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120, delay: 0.2 }} // Faster spring
          >
            {/* 3D Planet Container */}
            <div
              className={`relative w-88 h-88 lg:w-[26rem] lg:h-[26rem] rounded-full backdrop-blur-md border-4 transition-all duration-700 shadow-2xl overflow-hidden ${
                theme === "light"
                  ? "bg-gradient-to-br from-white/40 to-purple-100/40 border-white/60 shadow-purple-500/30"
                  : "bg-gradient-to-br from-black/40 to-violet-900/40 border-violet-500/60 shadow-violet-500/40"
              }`}
              style={{
                boxShadow:
                  theme === "dark"
                    ? "0 0 80px rgba(139, 92, 246, 0.4), inset 0 0 80px rgba(139, 92, 246, 0.1)"
                    : "0 30px 60px rgba(0, 0, 0, 0.15), inset 0 0 40px rgba(147, 51, 234, 0.1)",
              }}
            >
              {/* Google Model Viewer 3D Planet */}
              <motion.div
                className="absolute inset-4 rounded-full overflow-hidden"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <model-viewer
                    src="/stylized_planet.glb"
                    alt="Stylized Planet"
                    auto-rotate
                    camera-controls
                    auto-rotate-delay="1000"
                    rotation-per-second="0.2rad"
                    shadow-intensity="0"
                    exposure="1.2"
                    poster="/preview.jpg"
                    loading="eager"
                    reveal="auto"
                    className="w-full h-full rounded-full"
                    environment-image="neutral"
                    camera-orbit="0deg 75deg 3.6m"
                    min-camera-orbit="auto auto 2.7m"
                    max-camera-orbit="auto auto 4.5m"
                    field-of-view="35deg"
                    interaction-prompt="none"
                    touch-action="none"
                    disable-zoom
                    disable-tap
                    tone-mapping="aces"
                    style={{
                      '--poster-color': 'transparent',
                      background: 'transparent'
                    } as any}
                  />
                </div>
              </motion.div>

              {/* Glowing pulse effect */}
              <motion.div
                className={`absolute inset-0 rounded-full pointer-events-none ${
                  theme === "dark" ? "bg-violet-500/10" : "bg-purple-500/5"
                }`}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating gradient ring for dark mode */}
              
            </div>

            {/* Floating tech icons around avatar */}
            {/* Currently disabled - can be re-enabled by adding tech icons data */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
