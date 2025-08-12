"use client"
import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"
import { useScrollProgress } from "../../hooks/useScrollProgress"
import styles from "./ScrollProgress.module.css"

function ScrollProgress() {
  const scrollProgress = useScrollProgress()
  const { theme } = useTheme()

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`${styles.progress} ${theme === "light" ? styles.lightProgress : styles.darkProgress}`}
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </motion.div>
  )
}

export default ScrollProgress
