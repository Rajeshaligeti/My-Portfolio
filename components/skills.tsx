"use client"

import { motion, useInView } from "framer-motion"
import { useTheme } from "./theme-provider"
import { useRef } from "react"

type SkillLevel = "Advanced" | "Intermediate" | "Working"

type SkillItem = {
  name: string
  level: number
  mastery: SkillLevel
}

type SkillCategory = {
  title: string
  subtitle: string
  skills: SkillItem[]
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    subtitle: "Core languages used across AI, backend, and frontend work",
    skills: [
      { name: "Python", level: 95, mastery: "Advanced" },
      { name: "JavaScript", level: 90, mastery: "Advanced" },
      { name: "TypeScript", level: 86, mastery: "Intermediate" },
      { name: "SQL", level: 88, mastery: "Intermediate" },
      { name: "HTML/CSS", level: 92, mastery: "Advanced" },
    ],
  },
  {
    title: "AI/ML Stack",
    subtitle: "Modeling, analytics, and intelligent feature engineering",
    skills: [
      { name: "PyTorch", level: 90, mastery: "Advanced" },
      { name: "TensorFlow", level: 84, mastery: "Intermediate" },
      { name: "Scikit-learn", level: 92, mastery: "Advanced" },
      { name: "Pandas", level: 95, mastery: "Advanced" },
      { name: "NumPy", level: 93, mastery: "Advanced" },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "API design, service logic, and data-driven architectures",
    skills: [
      { name: "Flask", level: 90, mastery: "Advanced" },
      { name: "FastAPI", level: 88, mastery: "Intermediate" },
      { name: "Node.js", level: 86, mastery: "Intermediate" },
      { name: "Express", level: 84, mastery: "Intermediate" },
      { name: "MongoDB", level: 87, mastery: "Intermediate" },
    ],
  },
  {
    title: "Frontend & Product Tools",
    subtitle: "Interfaces, user experience, and delivery workflows",
    skills: [
      { name: "React", level: 87, mastery: "Intermediate" },
      { name: "Streamlit", level: 90, mastery: "Advanced" },
      { name: "Git", level: 92, mastery: "Advanced" },
      { name: "Docker", level: 78, mastery: "Working" },
      { name: "Cloud Deployment", level: 60, mastery: "Working" },
    ],
  },
]

const additionalTech = [
  "Jupyter",
  "Matplotlib",
  "Seaborn",
  "OpenCV",
  "NLTK",
  "spaCy",
  "PostgreSQL",
  "MySQL",
  "REST APIs",
  "Bash",
  "Postman",
]

const masteryStyles: Record<SkillLevel, string> = {
  Advanced: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Intermediate: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Working: "bg-sky-500/15 text-sky-300 border-sky-500/30",
}

export default function Skills() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center shine-text-metallic ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Technical{" "}
            <span
              className={`bg-gradient-to-r ${
                theme === "light"
                  ? "from-purple-600 to-pink-600 shine-text-metallic-light"
                  : "from-violet-400 to-purple-400 shine-text-metallic-dark"
              } bg-clip-text text-transparent`}
            >
              Skills
            </span>
          </h2>

          <p className={`text-center max-w-3xl mx-auto mb-12 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            A practical skill map focused on building AI products end-to-end. Cloud deployment is currently in progress and
            intentionally marked as a working area.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className={`backdrop-blur-md rounded-2xl p-6 border transition-all duration-500 ${
                  theme === "light"
                    ? "bg-white/20 border-white/30 shadow-xl"
                    : "bg-black/20 border-white/10 shadow-2xl shadow-violet-500/10"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 * categoryIndex }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className={`text-xl font-bold mb-6 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                  {category.title}
                </h3>

                <p className={`text-sm mb-6 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>{category.subtitle}</p>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.1 * skillIndex }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-medium ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}>
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full border ${
                              theme === "light"
                                ? skill.mastery === "Advanced"
                                  ? "bg-emerald-100 text-emerald-700 border-emerald-300"
                                  : skill.mastery === "Intermediate"
                                    ? "bg-amber-100 text-amber-700 border-amber-300"
                                    : "bg-sky-100 text-sky-700 border-sky-300"
                                : masteryStyles[skill.mastery]
                            }`}
                          >
                            {skill.mastery}
                          </span>
                          <span
                            className={`text-sm font-semibold ${
                              theme === "light" ? "text-purple-600" : "text-violet-400"
                            }`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      <div
                        className={`w-full h-2 rounded-full overflow-hidden ${
                          theme === "light" ? "bg-gray-200" : "bg-gray-700"
                        }`}
                      >
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${
                            theme === "light" ? "from-purple-500 to-pink-500" : "from-violet-500 to-purple-500"
                          }`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.2 * skillIndex, ease: "easeOut" }}
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
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className={`text-2xl font-bold mb-6 text-center ${theme === "light" ? "text-gray-800" : "text-white"}`}>
              Additional Technologies
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {additionalTech.map((tech, index) => (
                <motion.span
                  key={tech}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                    theme === "light"
                      ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                      : "bg-violet-500/20 text-violet-300 hover:bg-violet-500/30"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
