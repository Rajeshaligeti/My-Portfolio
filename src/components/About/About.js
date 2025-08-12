"use client"
import { motion } from "framer-motion"
import { Sparkles, Target, Lightbulb } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import styles from "./About.module.css"

function About() {
  const { theme } = useTheme()
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1,
      },
    },
  }

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={styles.content}
        >
          <motion.div
            variants={itemVariants}
            className={`${styles.card} ${theme === "light" ? styles.lightCard : styles.darkCard}`}
          >
            <motion.h2
              variants={itemVariants}
              className={`${styles.title} ${theme === "light" ? "title-metallic-premium-light" : "title-metallic-premium-dark"} ${theme === "light" ? styles.lightTitle : styles.darkTitle}`}
            >
              About{" "}
              <motion.span
                className={`${styles.gradientText}`}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Me
                <motion.div
                  className={styles.sparkleIcon}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles size={20} className={theme === "light" ? styles.lightSparkle : styles.darkSparkle} />
                </motion.div>
              </motion.span>
            </motion.h2>

            <div className={styles.grid}>
              <motion.div variants={itemVariants}>
                <motion.p
                  className={`${styles.paragraph} ${theme === "light" ? styles.lightText : styles.darkText}`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  I'm a creative, product-focused engineer who specializes in{" "}
                  <motion.span
                    className={`${styles.highlight} ${theme === "light" ? styles.lightHighlight : styles.darkHighlight}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    artificial intelligence
                  </motion.span>
                  ,{" "}
                  <motion.span
                    className={`${styles.highlight} ${theme === "light" ? styles.lightHighlight : styles.darkHighlight}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    backend systems
                  </motion.span>
                  , and{" "}
                  <motion.span
                    className={`${styles.highlight} ${theme === "light" ? styles.lightHighlight : styles.darkHighlight}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    intelligent automation
                  </motion.span>
                  .
                </motion.p>

                <motion.p
                  className={`${styles.paragraph} ${theme === "light" ? styles.lightText : styles.darkText}`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  My passion lies in building AI solutions that don't just work—they make a real impact. From developing
                  machine learning models to architecting scalable backend infrastructures, I bridge the gap between
                  cutting-edge technology and practical business solutions.
                </motion.p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                className={`${styles.skillsCard} ${theme === "light" ? styles.lightSkillsCard : styles.darkSkillsCard}`}
              >
                <div className={styles.skillsList}>
                  {[
                    { icon: Target, text: "AI/ML Engineering", color: "purple" },
                    { icon: Lightbulb, text: "Backend Development", color: "pink" },
                    { icon: Sparkles, text: "Intelligent Automation", color: "indigo" },
                    { icon: Target, text: "Product Innovation", color: "emerald" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      className={styles.skillItem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.div
                        className={`${styles.skillDot} ${styles[`${item.color}Dot`]}`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 0.5,
                        }}
                      />
                      <span
                        className={`${styles.skillText} ${theme === "light" ? styles.lightSkillText : styles.darkSkillText}`}
                      >
                        {item.text}
                      </span>
                      <item.icon
                        size={16}
                        className={`${styles.skillIcon} ${theme === "light" ? styles.lightSkillIcon : styles.darkSkillIcon}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
