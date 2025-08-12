"use client"

import { motion } from "framer-motion"
import { useScrollProgress } from "@/hooks/use-scroll-animation"
import { useTheme } from "./theme-provider"

export default function ScrollProgress() {
  const scrollProgress = useScrollProgress()
  const { theme } = useTheme()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`h-full bg-gradient-to-r ${
          theme === "light"
            ? "from-purple-500 via-pink-500 to-indigo-500"
            : "from-violet-400 via-purple-400 to-cyan-400"
        }`}
        style={{
          width: `${scrollProgress}%`,
          boxShadow: theme === "dark" ? "0 0 10px rgba(139, 92, 246, 0.5)" : "0 0 10px rgba(147, 51, 234, 0.3)",
        }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </motion.div>
  )
}
