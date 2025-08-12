"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, Filter } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import projectsData from "../../data/projects.json"
import styles from "./Projects.module.css"

const categories = ["All", "AI/ML", "Backend", "Automation", "Frontend"]

function Projects() {
  const { theme } = useTheme()
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projectsData : projectsData.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`${styles.title} ${theme === "light" ? "title-metallic-premium-light" : "title-metallic-premium-dark"} ${theme === "light" ? styles.lightTitle : styles.darkTitle}`}
          >
            Featured <span className={styles.gradientText}>Projects</span>
          </h2>

          {/* Category Filter */}
          <motion.div
            className={styles.filterContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles.filterButton} ${
                  selectedCategory === category
                    ? theme === "light"
                      ? styles.activeFilterLight
                      : styles.activeFilterDark
                    : theme === "light"
                      ? styles.inactiveFilterLight
                      : styles.inactiveFilterDark
                }`}
              >
                <Filter className={styles.filterIcon} />
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className={styles.grid}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`${styles.projectCard} ${theme === "light" ? styles.lightCard : styles.darkCard}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{
                  transform: "perspective(1000px) rotateX(-5deg) rotateY(5deg)",
                }}
              >
                {project.featured && (
                  <div
                    className={`${styles.featuredBadge} ${theme === "light" ? styles.lightBadge : styles.darkBadge}`}
                  >
                    Featured
                  </div>
                )}

                <div className={styles.cardContent}>
                  <h3
                    className={`${styles.projectTitle} ${theme === "light" ? styles.lightProjectTitle : styles.darkProjectTitle}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${styles.projectDescription} ${theme === "light" ? styles.lightDescription : styles.darkDescription}`}
                  >
                    {project.description}
                  </p>
                </div>

                <div className={styles.techStack}>
                  <div className={styles.techTags}>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`${styles.techTag} ${theme === "light" ? styles.lightTechTag : styles.darkTechTag}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.projectLinks}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${theme === "light" ? styles.lightLink : styles.darkLink}`}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.demoLink} ${theme === "light" ? styles.lightDemoLink : styles.darkDemoLink}`}
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
