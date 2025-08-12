"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"
import styles from "./ParallaxBackground.module.css"

function ParallaxBackground() {
  const { theme } = useTheme()
  const [stars, setStars] = useState([])
  const [constellations, setConstellations] = useState([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Generate more stars for denser field
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 400; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.3,
          brightness: Math.random() * 0.7 + 0.3,
          twinkleDelay: Math.random() * 8,
        })
      }
      return newStars
    }

    // Generate many more smaller constellations
    const generateConstellations = (stars) => {
      const newConstellations = []
      const usedStars = new Set()

      // Create 120+ very small constellations
      for (let i = 0; i < 120; i++) {
        const constellationStars = []
        const connections = []

        // Each constellation has only 2-3 stars (very tiny groups)
        const numStars = Math.floor(Math.random() * 2) + 2
        const availableStars = stars.filter((star) => !usedStars.has(star.id))

        if (availableStars.length < numStars) continue

        // Select a random center star
        const centerStar = availableStars[Math.floor(Math.random() * availableStars.length)]
        constellationStars.push(centerStar.id)
        usedStars.add(centerStar.id)

        // Find very nearby stars for micro-constellations
        const nearbyStars = availableStars
          .filter((star) => {
            const distance = Math.sqrt(Math.pow(star.x - centerStar.x, 2) + Math.pow(star.y - centerStar.y, 2))
            return distance < 3 && !usedStars.has(star.id) // Very short distance
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

        // Create connections between consecutive stars only
        for (let j = 0; j < constellationStars.length - 1; j++) {
          const star1 = stars.find((s) => s.id === constellationStars[j])
          const star2 = stars.find((s) => s.id === constellationStars[j + 1])

          if (star1 && star2) {
            const distance = Math.sqrt(Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2))

            // Only connect if distance is very short
            if (distance < 2.5) {
              connections.push([constellationStars[j], constellationStars[j + 1]])
            }
          }
        }

        // Sometimes create triangular connections for 3-star constellations
        if (constellationStars.length === 3 && Math.random() < 0.3) {
          const star1 = stars.find((s) => s.id === constellationStars[0])
          const star3 = stars.find((s) => s.id === constellationStars[2])

          if (star1 && star3) {
            const distance = Math.sqrt(Math.pow(star1.x - star3.x, 2) + Math.pow(star1.y - star3.y, 2))
            if (distance < 2.5) {
              connections.push([constellationStars[0], constellationStars[2]])
            }
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
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className={styles.background}>
      <div className={`${styles.gradient} ${theme === "light" ? styles.lightGradient : styles.darkGradient}`} />

      <svg className={styles.starfield}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
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
              opacity: [star.brightness * 0.3, star.brightness, star.brightness * 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: star.twinkleDelay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Constellation lines with smoother animation */}
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
                strokeWidth="0.3"
                opacity="0.4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{
                  duration: 1,
                  delay: constellationIndex * 0.05 + connectionIndex * 0.02,
                  ease: "easeOut",
                }}
              />
            )
          }),
        )}
      </svg>

      {/* Smoother mouse glow effect */}
      <motion.div
        className={`${styles.mouseGlow} ${theme === "light" ? styles.lightGlow : styles.darkGlow}`}
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        transition={{
          type: "spring",
          stiffness: 15,
          damping: 25,
          mass: 0.5,
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

export default ParallaxBackground
