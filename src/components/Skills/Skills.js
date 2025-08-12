"use client"

import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import skillsData from "../../data/skills.json"
import styles from "./Skills.module.css"

function Skills() {
  const { theme } = useTheme()
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`${styles.title} ${theme === "light" ? "title-metallic-premium-light" : "title-metallic-premium-dark"} ${theme === "light" ? styles.lightTitle : styles.darkTitle}`}
          >
            Technical <span className={styles.gradientText}>Skills</span>
          </h2>

          <div className={styles.grid}>
            {Object.entries(skillsData.categories).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                className={`${styles.skillCategory} ${theme === "light" ? styles.lightCategory : styles.darkCategory}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                whileHover={{ scale: 1.01 }}
              >
                <h3
                  className={`${styles.categoryTitle} ${theme === "light" ? styles.lightCategoryTitle : styles.darkCategoryTitle}`}
                >
                  {category}
                </h3>

                <div className={styles.skillsList}>
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                      transition={{ duration: 0.4, delay: 0.05 * skillIndex }}
                    >
                      <div className={styles.skillHeader}>
                        <span
                          className={`${styles.skillName} ${theme === "light" ? styles.lightSkillName : styles.darkSkillName}`}
                        >
                          {skill.name}
                        </span>
                        <span
                          className={`${styles.skillLevel} ${
                            theme === "light" ? styles.lightSkillLevel : styles.darkSkillLevel
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      <div
                        className={`${styles.progressBar} ${theme === "light" ? styles.lightProgressBar : styles.darkProgressBar}`}
                      >
                        <motion.div
                          className={`${styles.progressFill} ${theme === "light" ? styles.lightProgressFill : styles.darkProgressFill}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 0.8, delay: 0.1 * skillIndex, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Pills */}
          <motion.div
            className={styles.additionalSkills}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3
              className={`${styles.additionalTitle} ${theme === "light" ? styles.lightAdditionalTitle : styles.darkAdditionalTitle}`}
            >
              Additional Technologies
            </h3>

            <div className={styles.techPills}>
              {skillsData.additional.map((tech, index) => (
                <motion.span
                  key={tech}
                  className={`${styles.techPill} ${theme === "light" ? styles.lightTechPill : styles.darkTechPill}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.03 * index }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
