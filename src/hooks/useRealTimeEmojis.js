"use client"

import { useState, useEffect } from "react"

export function useRealTimeEmojis() {
  const [currentEmoji, setCurrentEmoji] = useState("😊")
  const [techEmojis, setTechEmojis] = useState([])

  useEffect(() => {
    const updateEmojis = () => {
      const now = new Date()
      const hour = now.getHours()
      const minutes = now.getMinutes()

      // Time-based main emoji
      let emoji = "😊"
      if (hour >= 6 && hour < 9)
        emoji = "🌅" // Early morning
      else if (hour >= 9 && hour < 12)
        emoji = "☀️" // Morning
      else if (hour >= 12 && hour < 14)
        emoji = "🍽️" // Lunch
      else if (hour >= 14 && hour < 17)
        emoji = "💻" // Afternoon work
      else if (hour >= 17 && hour < 19)
        emoji = "🌆" // Evening
      else if (hour >= 19 && hour < 22)
        emoji = "🌙" // Night
      else if (hour >= 22 || hour < 2)
        emoji = "😴" // Late night
      else emoji = "🌃" // Very late night

      setCurrentEmoji(emoji)

      // Time-based tech emojis
      let techSet = []
      if (hour >= 6 && hour < 12) {
        techSet = ["☕", "📊", "💼", "📈"]
      } else if (hour >= 12 && hour < 18) {
        techSet = ["🔥", "⚙️", "🎨", "📱"]
      } else if (hour >= 18 && hour < 22) {
        techSet = ["🌟", "🎵", "🎮", "📚"]
      } else {
        techSet = ["🌙", "✨", "🔮", "🎭"]
      }

      const newTechEmojis = techSet.map((emoji, index) => ({
        emoji,
        delay: index,
        radius: 140 + index * 10,
        speed: 20 + (minutes % 10) + index * 2, // Speed varies with time
      }))

      setTechEmojis(newTechEmojis)
    }

    // Update immediately
    updateEmojis()

    // Update every minute
    const interval = setInterval(updateEmojis, 60000)

    return () => clearInterval(interval)
  }, [])

  return { currentEmoji, techEmojis }
}
