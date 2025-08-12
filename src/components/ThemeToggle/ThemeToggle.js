"use client"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"
import styles from "./ThemeToggle.module.css"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      className={`${styles.toggle} ${theme === "light" ? styles.light : styles.dark}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div initial={false} animate={{ rotate: theme === "light" ? 0 : 180 }} transition={{ duration: 0.3 }}>
        {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
