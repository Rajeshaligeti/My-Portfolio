"use client"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Calendar, MapPin, Building } from "lucide-react"

const experienceData = [
  {
    id: 1,
    title: "AI-ML Intern",
    company: "Diigoo",
    location: "Remote",
    duration: "Jun 2025 - Present",
    type: "Internship",
    description:
      "Currently contributing to AI/ML-driven solutions by assisting in research, development, and model experimentation for intelligent systems.",
    achievements: [
      "Worked on ML models involving real-time prediction and analytics",
      "Participated in model fine-tuning for production-level efficiency",
      "Engaged in cross-functional meetings to translate AI insights into business impact"
    ],
  },
  {
    id: 2,
    title: "Full-Stack Intern (MERN)",
    company: "EY GDS (NextGen)",
    location: "Remote",
    duration: "Dec 2024 - Jan 2025",
    type: "Internship",
    description:
      "Engineered scalable MERN stack applications for enterprise use cases while enhancing UI/UX and deploying secure backend APIs.",
    achievements: [
      "Optimized performance of an enterprise app by 30%",
      "Increased user engagement by 25% through UI/UX improvements",
      "Built and integrated RESTful APIs with MongoDB backend"
    ],
  },
  {
    id: 3,
    title: "Web Developer",
    company: "VaultofCodes",
    location: "Remote",
    duration: "Sep 2024 - Oct 2024",
    type: "Internship",
    description:
      "Built and deployed a production-ready website for Editkaro using modern frontend and backend technologies.",
    achievements: [
      "Implemented email automation using Nodemailer and Google Sheets API",
      "Improved traffic by 20% through feature enhancements",
      "Stabilized the codebase by fixing major link and layout bugs"
    ],
  },
  {
    id: 4,
    title: "AI & Cloud Intern",
    company: "Edunet Foundation",
    location: "Hyderabad, India",
    duration: "Jun 2024 - Jul 2024",
    type: "Part-time Internship",
    description:
      "Developed AI solutions using IBM WatsonX and built logistic regression models for medical diagnosis.",
    achievements: [
      "Built an AI chatbot for customer support using IBM WatsonX",
      "Created a heart disease prediction model with 91.90% accuracy",
      "Collaborated with data engineers for feature extraction and EDA"
    ],
  },
  {
    id: 5,
    title: "Intern - Machine Learning & NLP",
    company: "IBM SkillsBuild",
    location: "Remote",
    duration: "Oct 2024 - Nov 2024",
    type: "Internship",
    description:
      "Developed a Flask-based AI Sentiment Analyzer integrating LangChain and Ollama, with visualization features.",
    achievements: [
      "Classified batch text inputs into sentiment categories",
      "Integrated word cloud generation for sentiment visualization",
      "Used LangChain pipelines for efficient response generation"
    ],
  }
];


export default function Experience() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            variants={itemVariants}
            className={`text-4xl md:text-5xl font-bold mb-16 text-center shine-text-metallic ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Professional{" "}
            <span
              className={`bg-gradient-to-r ${
                theme === "light"
                  ? "from-purple-600 to-pink-600 shine-text-metallic-light"
                  : "from-violet-400 to-purple-400 shine-text-metallic-dark"
              } bg-clip-text text-transparent`}
            >
              Experience
            </span>
          </motion.h2>

          <div className="relative">
            {/* Enhanced Baseline - continuous line with glow */}
            <motion.div
              className={`absolute left-1/2 transform -translate-x-1/2 top-0 w-1 rounded-full ${
                theme === "light"
                  ? "bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400"
                  : "bg-gradient-to-b from-violet-400 via-purple-400 to-violet-400"
              }`}
              style={{
                height: "100%",
                minHeight: "calc(100% - 2rem)",
                boxShadow:
                  theme === "dark"
                    ? "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)"
                    : "0 0 15px rgba(147, 51, 234, 0.4), 0 0 30px rgba(147, 51, 234, 0.2)",
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Animated glow pulse on the baseline */}
            <motion.div
              className={`absolute left-1/2 transform -translate-x-1/2 top-0 w-2 rounded-full blur-sm ${
                theme === "light" ? "bg-purple-300/50" : "bg-violet-300/50"
              }`}
              style={{
                height: "100%",
                minHeight: "calc(100% - 2rem)",
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleX: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div className="space-y-16">
              {experienceData.map((experience, index) => {
                const isLeft = index % 2 === 0
                return (
                  <motion.div
                    key={experience.id}
                    variants={itemVariants}
                    className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
                  >
                    {/* Timeline dot with enhanced styling */}
                    <motion.div
                      className={`absolute left-1/2 transform -translate-x-1/2 z-18 w-8 h-8 rounded-full border-4 shadow-2xl ${
                        theme === "light"
                          ? "bg-purple-500 border-white shadow-purple-500/50"
                          : "bg-violet-500 border-gray-900 shadow-violet-500/50"
                      }`}
                      style={{
                        boxShadow:
                          theme === "dark"
                            ? "0 0 25px rgba(139, 92, 246, 0.8), inset 0 0 10px rgba(139, 92, 246, 0.3)"
                            : "0 0 20px rgba(147, 51, 234, 0.6), inset 0 0 8px rgba(147, 51, 234, 0.2)",
                      }}
                      whileHover={{ scale: 1.3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      animate={{
                        boxShadow: [
                          theme === "dark" ? "0 0 25px rgba(139, 92, 246, 0.8)" : "0 0 20px rgba(147, 51, 234, 0.6)",
                          theme === "dark" ? "0 0 35px rgba(139, 92, 246, 1)" : "0 0 30px rgba(147, 51, 234, 0.8)",
                          theme === "dark" ? "0 0 25px rgba(139, 92, 246, 0.8)" : "0 0 20px rgba(147, 51, 234, 0.6)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    />

                    {/* Experience card */}
                    <motion.div
                      className={`w-full max-w-md backdrop-blur-md rounded-2xl p-6 border-2 transition-all duration-500 shadow-xl ${
                        isLeft ? "mr-12" : "ml-12"
                      } ${
                        theme === "light"
                          ? "bg-white/30 border-white/40 shadow-purple-500/10"
                          : "bg-black/30 border-white/20 shadow-violet-500/20"
                      }`}
                      style={{
                        boxShadow:
                          theme === "dark"
                            ? "0 0 30px rgba(139, 92, 246, 0.2), inset 0 0 30px rgba(139, 92, 246, 0.05)"
                            : "0 20px 40px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(147, 51, 234, 0.05)",
                      }}
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <div className="mb-4">
                        <h3 className={`text-xl font-bold mb-2 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                          {experience.title}
                        </h3>
                        <div className="flex flex-col space-y-2 mb-3">
                          <div className="flex items-center space-x-2">
                            <Building size={16} className={theme === "light" ? "text-purple-600" : "text-violet-400"} />
                            <span
                              className={`font-medium text-sm ${theme === "light" ? "text-purple-600" : "text-violet-400"}`}
                            >
                              {experience.company}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} className={theme === "light" ? "text-gray-600" : "text-gray-400"} />
                            <span className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                              {experience.location}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} className={theme === "light" ? "text-gray-600" : "text-gray-400"} />
                            <span className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                              {experience.duration}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            experience.type === "Full-time"
                              ? theme === "light"
                                ? "bg-green-100 text-green-700"
                                : "bg-green-500/20 text-green-400"
                              : theme === "light"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {experience.type}
                        </span>
                      </div>

                      <p className={`mb-4 text-sm ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                        {experience.description}
                      </p>

                      <div>
                        <h4
                          className={`font-semibold mb-2 text-sm ${theme === "light" ? "text-gray-800" : "text-white"}`}
                        >
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className={`flex items-start space-x-2 text-xs ${
                                theme === "light" ? "text-gray-600" : "text-gray-400"
                              }`}
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                                  theme === "light" ? "bg-purple-500" : "bg-violet-400"
                                }`}
                              />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
