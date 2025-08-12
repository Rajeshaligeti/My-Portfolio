"use client"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Sparkles, Target, Lightbulb } from "lucide-react"

export default function About() {
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
    hidden: { opacity: 0, y: 50, scale: 1.0 },
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
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <motion.div
            variants={itemVariants}
            className={`backdrop-blur-md rounded-3xl p-8 md:p-12 border-2 transition-all duration-700 relative overflow-hidden ${
              theme === "light" ? "bg-white/25 border-white/40 shadow-2xl" : "bg-black/25 border-white/20 shadow-2xl"
            }`}
            style={{
              boxShadow:
                theme === "dark"
                  ? "0 0 50px rgba(139, 92, 246, 0.2), inset 0 0 50px rgba(139, 92, 246, 0.05), 0 0 0 1px rgba(139, 92, 246, 0.1)"
                  : "0 25px 50px rgba(0, 0, 0, 0.15), inset 0 0 30px rgba(147, 51, 234, 0.05), 0 0 0 1px rgba(147, 51, 234, 0.1)",
            }}
            whileHover={{
              scale: 1.02,
              rotateX: 2,
              rotateY: 2,
              transition: { duration: 0.3 },
            }}
          >
            {/* Border lighting effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none"
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                background:
                  theme === "dark"
                    ? "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.3), transparent, rgba(168, 85, 247, 0.3), transparent)"
                    : "linear-gradient(45deg, transparent, rgba(147, 51, 234, 0.2), transparent, rgba(236, 72, 153, 0.2), transparent)",
                backgroundSize: "400% 400%",
              }}
            />

            <motion.h2
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-bold mb-8 text-center relative shine-text-metallic ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              About{" "}
              <motion.span
                className={`bg-gradient-to-r ${
                  theme === "light"
                    ? "from-purple-600 to-pink-600 shine-text-metallic-light"
                    : "from-violet-400 to-purple-400 shine-text-metallic-dark"
                } bg-clip-text text-transparent relative`}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Me
                <motion.div
                  className="absolute -top-2 -right-2"
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
                  <Sparkles size={20} className={theme === "light" ? "text-purple-500" : "text-violet-400"} />
                </motion.div>
              </motion.span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div variants={itemVariants}>
                <motion.p
                  className={`text-lg leading-relaxed mb-6 ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  I'm a creative, product-focused engineer who specializes in{" "}
                  <motion.span
                    className={`font-semibold ${theme === "light" ? "text-purple-600" : "text-violet-400"}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    artificial intelligence
                  </motion.span>
                  ,{" "}
                  <motion.span
                    className={`font-semibold ${theme === "light" ? "text-purple-600" : "text-violet-400"}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    backend systems
                  </motion.span>
                  , and{" "}
                  <motion.span
                    className={`font-semibold ${theme === "light" ? "text-purple-600" : "text-violet-400"}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    intelligent automation
                  </motion.span>
                  .
                </motion.p>

                <motion.p
                  className={`text-lg leading-relaxed ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
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
                className={`relative p-6 rounded-2xl backdrop-blur-sm border-2 ${
                  theme === "light" ? "bg-white/20 border-white/30" : "bg-black/20 border-white/20"
                }`}
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "0 0 30px rgba(139, 92, 246, 0.15), inset 0 0 30px rgba(139, 92, 246, 0.05)"
                      : "0 15px 30px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(147, 51, 234, 0.05)",
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="space-y-4">
                  {[
                    { icon: Target, text: "AI/ML Engineering", color: "bg-purple-500" },
                    { icon: Lightbulb, text: "Backend Development", color: "bg-pink-500" },
                    { icon: Sparkles, text: "Intelligent Automation", color: "bg-indigo-500" },
                    { icon: Target, text: "Product Innovation", color: "bg-emerald-500" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center space-x-3"
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
                        className={`w-3 h-3 rounded-full ${item.color}`}
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
                      <span className={`font-medium ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                        {item.text}
                      </span>
                      <item.icon
                        size={16}
                        className={`${theme === "light" ? "text-purple-500" : "text-violet-400"} opacity-70`}
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
