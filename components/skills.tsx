"use client"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillsData = {
  "Programming Languages": [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "SQL", level: 88 },
    { name: "HTML/CSS", level: 92 },
  ],
  "AI/ML Frameworks": [
    { name: "PyTorch", level: 90 },
    { name: "TensorFlow", level: 85 },
    { name: "Scikit-learn", level: 92 },
    { name: "Pandas", level: 95 },
    { name: "NumPy", level: 93 },
  ],
  "Backend Technologies": [
    { name: "Flask", level: 90 },
    { name: "FastAPI", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 82 },
    { name: "MongoDB", level: 87 },
  ],
  "Frontend & Tools": [
    { name: "React", level: 85 },
    { name: "Streamlit", level: 90 },
    { name: "Git", level: 92 },
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
  ],
}

export default function Skills() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
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
                  {category}
                </h3>

                <div className="space-y-4">
                  {skills.map((skill, skillIndex) => (
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
                        <span
                          className={`text-sm font-semibold ${
                            theme === "light" ? "text-purple-600" : "text-violet-400"
                          }`}
                        >
                          {skill.level}%
                        </span>
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
              {[
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
              ].map((tech, index) => (
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
