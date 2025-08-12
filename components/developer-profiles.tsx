"use client"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink, Cloud, Code, MessageSquare, Link, HelpCircle, Bot, Trophy, Users, Lightbulb, ChefHat } from "lucide-react"

const profilesData = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/rajeshaligeti",
    description: "Code repositories",
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "LeetCode",
    icon: Code,
    url: "https://leetcode.com/rajeshaligeti",
    description: "Coding challenges",
    color: "from-orange-500 to-yellow-600",
  },
  {
    name: "Google Cloud",
    icon: Cloud,
    url: "https://developers.google.com/profile/u/aligetirajesh_bvrit",
    description: "Cloud & ML services",
    color: "from-blue-500 to-green-500",
  },
  {
    name: "Microsoft Learn",
    icon: ExternalLink,
    url: "https://learn.microsoft.com/en-us/users/rajeshaligeti-9079/",
    description: "Azure certifications",
    color: "from-blue-600 to-cyan-600",
  },
  {
    name: "CodeChef",
    icon: ChefHat,
    url: "https://www.codechef.com/users/aligetirajesh",
    description: "Coding experiments",
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "GeeksforGeeks",
    icon: Code,
    url: "https://www.geeksforgeeks.org/user/aligetirajcn4/",
    description: "Quick Coding",
    color: "from-green-500 to-teal-600",
  },
  {
    name: "Smart Interviews",
    icon: Lightbulb,
    url: "https://smartinterviews.in/profile/Aligeti_Rajesh",
    description: "Competitive coding",
    color: "from-yellow-600 to-orange-600",
  },
  {
    name: "Linktree",
    icon: Link,
    url: "https://linktr.ee/rajeshaligeti",
    description: "All social links",
    color: "from-green-400 to-blue-500",
  },
  {
    name: "Stack Overflow",
    icon: HelpCircle,
    url: "https://stackoverflow.com/users/rajeshaligeti",
    description: "Technical Q&A",
    color: "from-orange-600 to-red-600",
  },
  {
    name: "Hugging Face",
    icon: Bot,
    url: "https://huggingface.co/rajeshaligeti",
    description: "ML models & AI",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "Kaggle",
    icon: Trophy,
    url: "https://www.kaggle.com/aligetirajesh",
    description: "Data competitions",
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Discord",
    icon: Users,
    url: "discordapp.com/users/raedeonn_00635",
    description: "Developer communities",
    color: "from-indigo-500 to-purple-600",
  },
]

export default function DeveloperProfiles() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="developer-profiles" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Developer{" "}
            <span
              className={`bg-gradient-to-r ${
                theme === "light" 
                  ? "from-purple-600 to-pink-600 shine-text-metallic-light" 
                  : "from-violet-400 to-purple-400 shine-text-metallic-dark"
              } bg-clip-text text-transparent`}
            >
              Profiles
            </span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {profilesData.map((profile, index) => {
              const IconComponent = profile.icon
              return (
                <motion.a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative backdrop-blur-md rounded-xl p-4 border transition-all duration-500 hover:scale-105 ${
                    theme === "light"
                      ? "bg-white/30 border-white/40 shadow-lg hover:shadow-xl"
                      : "bg-black/30 border-white/20 shadow-lg hover:shadow-2xl"
                  }`}
                  style={{
                    boxShadow:
                      theme === "dark"
                        ? "0 0 20px rgba(139, 92, 246, 0.1), inset 0 0 20px rgba(139, 92, 246, 0.05)"
                        : "0 10px 25px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(147, 51, 234, 0.05)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.05 * index }}
                  whileHover={{ y: -3 }}
                >
                  <div className="text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-r ${profile.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <IconComponent size={20} />
                    </div>

                    <h3 className={`font-semibold text-sm mb-1 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                      {profile.name}
                    </h3>

                    <p className={`text-xs ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                      {profile.description}
                    </p>
                  </div>

                  {/* Edge lighting effect */}
                  <div
                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-violet-500/20 via-transparent to-purple-500/20"
                        : "bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10"
                    }`}
                    style={{
                      background:
                        theme === "dark"
                          ? "linear-gradient(45deg, rgba(139, 92, 246, 0.2) 0%, transparent 50%, rgba(168, 85, 247, 0.2) 100%)"
                          : "linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%, rgba(236, 72, 153, 0.1) 100%)",
                    }}
                  />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
