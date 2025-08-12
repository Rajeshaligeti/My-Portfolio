"use client"
import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  brightness: number
  twinkleDelay: number
}

interface Constellation {
  stars: number[]
  connections: [number, number][]
}

export default function ParallaxBackground() {
  const { theme } = useTheme()
  const [stars, setStars] = useState<Star[]>([])
  const [constellations, setConstellations] = useState<Constellation[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const newStars: Star[] = []
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 0.5,
          brightness: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 5,
        })
      }
      return newStars
    }

    // Generate more constellations with very short lines
    const generateConstellations = (stars: Star[]) => {
      const newConstellations: Constellation[] = []
      const usedStars = new Set<number>()

      // Create 50+ very small constellations
      for (let i = 0; i < 60; i++) {
        const constellationStars: number[] = []
        const connections: [number, number][] = []

        // Each constellation has 2-3 stars (very tiny groups)
        const numStars = Math.floor(Math.random() * 2) + 2
        const availableStars = stars.filter((star) => !usedStars.has(star.id))

        if (availableStars.length < numStars) continue

        // Select stars for this constellation that are extremely close to each other
        const centerStar = availableStars[Math.floor(Math.random() * availableStars.length)]
        constellationStars.push(centerStar.id)
        usedStars.add(centerStar.id)

        // Find extremely nearby stars for the constellation
        const nearbyStars = availableStars
          .filter((star) => {
            const distance = Math.sqrt(Math.pow(star.x - centerStar.x, 2) + Math.pow(star.y - centerStar.y, 2))
            return distance < 5 && !usedStars.has(star.id) // Even shorter distance
          })
          .sort((a, b) => {
            const distA = Math.sqrt(Math.pow(a.x - centerStar.x, 2) + Math.pow(a.y - centerStar.y, 2))
            const distB = Math.sqrt(Math.pow(b.x - centerStar.x, 2) + Math.pow(b.y - centerStar.y, 2))
            return distA - distB
          })

        // Add the closest stars
        for (let j = 0; j < Math.min(numStars - 1, nearbyStars.length); j++) {
          constellationStars.push(nearbyStars[j].id)
          usedStars.add(nearbyStars[j].id)
        }

        // Create connections between all stars in the small group
        for (let j = 0; j < constellationStars.length - 1; j++) {
          const star1 = stars.find((s) => s.id === constellationStars[j])!
          const star2 = stars.find((s) => s.id === constellationStars[j + 1])!

          const distance = Math.sqrt(Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2))

          // Only connect if distance is extremely short
          if (distance < 4) {
            connections.push([constellationStars[j], constellationStars[j + 1]])
          }
        }

        if (connections.length > 0) {
          newConstellations.push({
            stars: constellationStars,
            connections,
          })
        }
      }

      return newConstellations
    }

    const newStars = generateStars()
    const newConstellations = generateConstellations(newStars)

    setStars(newStars)
    setConstellations(newConstellations)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base starfield background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          theme === "light"
            ? "bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100"
            : "bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950"
        }`}
      />

      {/* Stars */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {stars.map((star) => (
          <motion.circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill={theme === "light" ? "#6366f1" : "#a855f7"}
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [star.brightness * 0.4, star.brightness, star.brightness * 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: star.twinkleDelay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Constellation lines */}
        {constellations.map((constellation, constellationIndex) =>
          constellation.connections.map(([star1Id, star2Id], connectionIndex) => {
            const star1 = stars.find((s) => s.id === star1Id)
            const star2 = stars.find((s) => s.id === star2Id)

            if (!star1 || !star2) return null

            return (
              <motion.line
                key={`${constellationIndex}-${connectionIndex}`}
                x1={`${star1.x}%`}
                y1={`${star1.y}%`}
                x2={`${star2.x}%`}
                y2={`${star2.y}%`}
                stroke={theme === "light" ? "#8b5cf6" : "#a855f7"}
                strokeWidth="0.5"
                opacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: 1.5,
                  delay: constellationIndex * 0.1 + connectionIndex * 0.05,
                  ease: "easeInOut",
                }}
              />
            )
          }),
        )}
      </svg>

      {/* Interactive glow effect following mouse */}
      <motion.div
        className={`absolute w-80 h-80 rounded-full blur-3xl pointer-events-none ${
          theme === "light"
            ? "bg-gradient-radial from-purple-300/15 to-transparent"
            : "bg-gradient-radial from-violet-500/15 to-transparent"
        }`}
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 30,
        }}
        style={{
          left: 0,
          top: 0,
          transform: `translate(${mousePosition.x - 160}px, ${mousePosition.y - 160}px)`,
        }}
      />
    </div>
  )
}
