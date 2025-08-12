"use client"
import { motion } from "framer-motion"
import { Download, Mail, Eye, Sparkles, Code, Brain } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"
import { useRealTimeEmojis } from "../../hooks/useRealTimeEmojis"
import styles from "./Hero.module.css"

function Hero() {
  const { theme } = useTheme()
  const { currentEmoji, techEmojis } = useRealTimeEmojis()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left side - Text content */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Floating icons with smoother animation */}
            <motion.div
              className={`${styles.floatingIcon} ${styles.iconBrain} ${theme === "light" ? styles.lightIcon : styles.darkIcon}`}
              animate={{
                y: [0, -8, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Brain size={24} />
            </motion.div>

            <motion.div
              className={`${styles.floatingIcon} ${styles.iconCode} ${theme === "light" ? styles.lightIcon : styles.darkIcon}`}
              animate={{
                y: [0, -10, 0],
                rotate: [0, -3, 3, 0],
              }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            >
              <Code size={20} />
            </motion.div>

            <motion.div
              className={`${styles.floatingIcon} ${styles.iconSparkles} ${theme === "light" ? styles.lightIcon : styles.darkIcon}`}
              animate={{
                y: [0, -6, 0],
                x: [0, 3, 0],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
            >
              <Sparkles size={18} />
            </motion.div>

            <motion.h1
              className={`${styles.title} ${theme === "light" ? styles.lightText : styles.darkText} title-metallic-premium`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <motion.span
                className={styles.gradientText}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                Aligeti
              </motion.span>{" "}
              <br className={styles.titleBreak} />
              Rajesh
            </motion.h1>

            <motion.h2
              className={`${styles.subtitle} ${theme === "light" ? styles.lightSubtitle : styles.darkSubtitle}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Python Full Stack | AIML Developer
            </motion.h2>

            <motion.p
              className={`${styles.quote} ${theme === "light" ? styles.lightQuote : styles.darkQuote}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              "I don't just build applications — I craft{" "}
              <motion.span
                className={`${styles.highlightText} ${theme === "light" ? styles.lightHighlight : styles.darkHighlight}`}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                intelligent solutions
              </motion.span>
              ."
            </motion.p>

            {/* Action Buttons with smoother hover */}
            <motion.div
              className={styles.buttonGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <motion.a
                href="/resume.pdf"
                download
                className={`${styles.button} ${styles.primaryButton} ${theme === "light" ? styles.lightPrimary : styles.darkPrimary}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Download className={styles.buttonIcon} />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className={`${styles.button} ${styles.secondaryButton} ${theme === "light" ? styles.lightSecondary : styles.darkSecondary}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Mail className={styles.buttonIcon} />
                Contact Me
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("projects")}
                className={`${styles.button} ${styles.secondaryButton} ${theme === "light" ? styles.lightSecondary : styles.darkSecondary}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Eye className={styles.buttonIcon} />
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced Avatar with real-time emojis */}
          <motion.div
            className={styles.avatarContainer}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 80, delay: 0.3 }}
          >
            {/* Floating rings with smoother rotation */}
            <motion.div
              className={`${styles.ring} ${styles.outerRing} ${theme === "light" ? styles.lightRing : styles.darkRing}`}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div
              className={`${styles.ring} ${styles.innerRing} ${theme === "light" ? styles.lightRing : styles.darkRing}`}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Main avatar with real-time emoji */}
            <div className={`${styles.avatar} ${theme === "light" ? styles.lightAvatar : styles.darkAvatar}`}>
              <motion.div
                className={styles.emoji}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.4 },
                }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                key={currentEmoji}
              >
                {currentEmoji}
              </motion.div>

              {/* Smoother glowing pulse */}
              <motion.div
                className={`${styles.pulse} ${theme === "dark" ? styles.darkPulse : styles.lightPulse}`}
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              {/* Smoother rotating gradient ring for dark mode */}
              {theme === "dark" && (
                <motion.div
                  className={styles.gradientRing}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              )}
            </div>

            {/* Real-time rotating tech emojis */}
            {techEmojis.map((item, index) => (
              <motion.div
                key={`${item.emoji}-${index}`}
                className={`${styles.techIcon} ${theme === "light" ? styles.lightTechIcon : styles.darkTechIcon}`}
                animate={{ rotate: 360 }}
                transition={{
                  duration: item.speed,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: item.delay,
                }}
                style={{
                  left: "50%",
                  top: "50%",
                  transformOrigin: `0 ${item.radius}px`,
                  marginLeft: "-12px",
                  marginTop: `-${item.radius}px`,
                }}
              >
                {item.emoji}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
