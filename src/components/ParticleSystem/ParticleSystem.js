"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "../../contexts/ThemeContext"
import styles from "./ParticleSystem.module.css"

function ParticleSystem() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (x, y) => {
      const colors =
        theme === "light" ? ["#8b5cf6", "#a855f7", "#c084fc", "#e879f9"] : ["#a855f7", "#8b5cf6", "#7c3aed", "#6d28d9"]

      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 120 + 60,
      }
    }

    const updateParticles = () => {
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        particle.opacity = Math.max(0, 1 - particle.life / particle.maxLife)
        particle.vy += 0.02

        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const force = ((100 - distance) / 100) * 0.5
          particle.vx += (dx / distance) * force * 0.1
          particle.vy += (dy / distance) * force * 0.1
        }

        return (
          particle.life < particle.maxLife &&
          particle.x > -10 &&
          particle.x < canvas.width + 10 &&
          particle.y > -10 &&
          particle.y < canvas.height + 10
        )
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        ctx.save()
        ctx.globalAlpha = particle.opacity

        ctx.shadowBlur = 10
        ctx.shadowColor = particle.color
        ctx.fillStyle = particle.color

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        particlesRef.current.forEach((otherParticle) => {
          if (particle === otherParticle) return

          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 80) {
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = (1 - distance / 80) * particle.opacity * 0.3
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })

        ctx.restore()
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      if (Math.random() < 0.1) {
        for (let i = 0; i < 2; i++) {
          particlesRef.current.push(
            createParticle(e.clientX + (Math.random() - 0.5) * 20, e.clientY + (Math.random() - 0.5) * 20),
          )
        }
      }
    }

    const handleClick = (e) => {
      for (let i = 0; i < 15; i++) {
        particlesRef.current.push(
          createParticle(e.clientX + (Math.random() - 0.5) * 30, e.clientY + (Math.random() - 0.5) * 30),
        )
      }
    }

    resizeCanvas()

    for (let i = 0; i < 50; i++) {
      particlesRef.current.push(createParticle(Math.random() * canvas.width, Math.random() * canvas.height))
    }

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.canvas} ${theme === "light" ? styles.lightCanvas : styles.darkCanvas}`}
    />
  )
}

export default ParticleSystem
