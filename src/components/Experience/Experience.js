"use client"

import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import { Calendar, MapPin, Building, Zap, TrendingUp, Award } from "lucide-react"
import experienceData from "../../data/experience.json"
import styles from "./Experience.module.css"

function Experience() {
  const { theme } = useTheme()
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            variants={itemVariants}
            className={`${styles.title} ${theme === "light" ? styles.lightTitle : styles.darkTitle}`}
          >
            Professional <span className={styles.gradientText}>Experience</span>
          </motion.h2>

          <div className={styles.timelineContainer}>
            {/* Enhanced Interactive Baseline */}
            <motion.div
              className={`${styles.baseline} ${theme === "light" ? styles.lightBaseline : styles.darkBaseline}`}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Animated flowing particles along the baseline */}
            <motion.div
              className={`${styles.flowingParticles} ${theme === "light" ? styles.lightParticles : styles.darkParticles}`}
              animate={{
                y: [0, -800],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: 1,
              }}
            />

            {/* Pulsing energy waves */}
            <motion.div
              className={`${styles.energyWave} ${theme === "light" ? styles.lightWave : styles.darkWave}`}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div className={styles.timelineItems}>
              {experienceData.map((experience, index) => {
                const isLeft = index % 2 === 0
                return (
                  <motion.div
                    key={experience.id}
                    variants={itemVariants}
                    className={`${styles.timelineItem} ${isLeft ? styles.leftItem : styles.rightItem}`}
                  >
                    {/* Enhanced Interactive Timeline Dot */}
                    <motion.div
                      className={`${styles.timelineDot} ${theme === "light" ? styles.lightDot : styles.darkDot}`}
                      whileHover={{
                        scale: 1.4,
                        rotate: 360,
                        transition: { duration: 0.6 },
                      }}
                      animate={{
                        boxShadow: [
                          theme === "dark" ? "0 0 20px rgba(139, 92, 246, 0.6)" : "0 0 15px rgba(147, 51, 234, 0.4)",
                          theme === "dark" ? "0 0 35px rgba(139, 92, 246, 0.9)" : "0 0 25px rgba(147, 51, 234, 0.7)",
                          theme === "dark" ? "0 0 20px rgba(139, 92, 246, 0.6)" : "0 0 15px rgba(147, 51, 234, 0.4)",
                        ],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.4,
                      }}
                    >
                      {/* Inner rotating ring */}
                      <motion.div
                        className={styles.dotInnerRing}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      />

                      {/* Company icon based on name */}
                      <motion.div className={styles.companyIcon} whileHover={{ scale: 1.2 }}>
                        {experience.company.includes("EY")
                          ? "🏢"
                          : experience.company.includes("IBM")
                            ? "🤖"
                            : experience.company.includes("Vault")
                              ? "💻"
                              : "🚀"}
                      </motion.div>
                    </motion.div>

                    {/* Enhanced Experience Card */}
                    <motion.div
                      className={`${styles.experienceCard} ${theme === "light" ? styles.lightCard : styles.darkCard}`}
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                        rotateY: isLeft ? 2 : -2,
                        transition: { duration: 0.3 },
                      }}
                      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                      {/* Card Header with Interactive Elements */}
                      <div className={styles.cardHeader}>
                        <motion.h3
                          className={`${styles.jobTitle} ${theme === "light" ? styles.lightJobTitle : styles.darkJobTitle}`}
                          whileHover={{ scale: 1.02 }}
                        >
                          {experience.title}
                        </motion.h3>

                        <div className={styles.jobDetails}>
                          <motion.div className={styles.jobDetail} whileHover={{ x: 3 }}>
                            <Building size={16} className={theme === "light" ? styles.lightIcon : styles.darkIcon} />
                            <span
                              className={`${styles.company} ${theme === "light" ? styles.lightCompany : styles.darkCompany}`}
                            >
                              {experience.company}
                            </span>
                          </motion.div>

                          <motion.div className={styles.jobDetail} whileHover={{ x: 3 }}>
                            <MapPin size={16} className={styles.grayIcon} />
                            <span className={styles.grayText}>{experience.location}</span>
                          </motion.div>

                          <motion.div className={styles.jobDetail} whileHover={{ x: 3 }}>
                            <Calendar size={16} className={styles.grayIcon} />
                            <span className={styles.grayText}>{experience.duration}</span>
                          </motion.div>
                        </div>

                        <motion.span
                          className={`${styles.jobType} ${
                            experience.type === "Full-time"
                              ? theme === "light"
                                ? styles.fullTimeLight
                                : styles.fullTimeDark
                              : theme === "light"
                                ? styles.internshipLight
                                : styles.internshipDark
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {experience.type}
                        </motion.span>
                      </div>

                      <motion.p
                        className={`${styles.description} ${theme === "light" ? styles.lightDescription : styles.darkDescription}`}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      >
                        {experience.description}
                      </motion.p>

                      {/* Interactive Achievements Section */}
                      <div>
                        <motion.h4
                          className={`${styles.achievementsTitle} ${theme === "light" ? styles.lightAchievementsTitle : styles.darkAchievementsTitle}`}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Award size={16} className={styles.achievementIcon} />
                          Key Achievements:
                        </motion.h4>

                        <ul className={styles.achievementsList}>
                          {experience.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className={`${styles.achievement} ${theme === "light" ? styles.lightAchievement : styles.darkAchievement}`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 + 0.5 }}
                              whileHover={{
                                x: 5,
                                scale: 1.01,
                                transition: { duration: 0.2 },
                              }}
                            >
                              <motion.div
                                className={`${styles.achievementDot} ${theme === "light" ? styles.lightAchievementDot : styles.darkAchievementDot}`}
                                animate={{
                                  scale: [1, 1.2, 1],
                                  rotate: [0, 180, 360],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: i * 0.5,
                                }}
                              />
                              <span>{achievement}</span>

                              {/* Achievement impact icons */}
                              {achievement.includes("%") && (
                                <motion.div
                                  className={styles.impactIcon}
                                  animate={{ rotate: [0, 360] }}
                                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                                >
                                  <TrendingUp size={14} />
                                </motion.div>
                              )}

                              {achievement.includes("built") ||
                                (achievement.includes("developed") && (
                                  <motion.div
                                    className={styles.impactIcon}
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                  >
                                    <Zap size={14} />
                                  </motion.div>
                                ))}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Interactive hover effects */}
                      <motion.div
                        className={styles.cardGlow}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
