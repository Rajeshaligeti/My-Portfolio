"use client"

import { useEffect } from "react"

export default function ResourcePreloader() {
  useEffect(() => {
    // Preload critical fonts
    const fontUrls = [
      '/fonts/geist-sans.woff2',
      '/fonts/geist-mono.woff2'
    ]

    fontUrls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
      link.href = url
      document.head.appendChild(link)
    })

    // Preload critical images
    const criticalImages = [
      '/placeholder-user.jpg',
      '/placeholder-logo.png'
    ]

    criticalImages.forEach(src => {
      const img = new Image()
      img.src = src
    })

    // Warm up GPU for animations
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = 'transparent'
      ctx.fillRect(0, 0, 1, 1)
    }

    return () => {
      // Cleanup if needed
    }
  }, [])

  return null
}
