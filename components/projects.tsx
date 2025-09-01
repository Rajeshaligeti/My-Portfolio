"use client"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, Filter } from "lucide-react"
import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants"

const projectsData = [
  {
    id: 1,
    title: "Photorealistic Style Transfer",
    description: "Neural style transfer preserving realism and content structure.",
    techStack: ["Python", "PyTorch"],
    category: "AI/ML",
    github: "https://github.com/Rajeshaligeti/Photorealistic_Style_Transfer",
    demo: "https://photorealisticstyletransfer.streamlit.app",
    featured: true,
  },
  {
    id: 2,
    title: "Editkaro‑Streamcast",
    description: "Interactive platform for collaborative editing and livestreaming.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/Rajeshaligeti/Editkaro-Streamcast",
    demo: "https://rajeshaligeti.github.io/Editkaro-Streamcast/",
    featured: false,
  },
  {
    id: 3,
    title: "InsightViz",
    description: "Web-based data visualization tool with dynamic filtering and plots.",
    techStack: ["Django", "Pandas", "Matplotlib"],
    category: "Full-stack",
    github: "https://github.com/Rajeshaligeti/InsightViz",
    demo: "N/A",
    featured: true,
  },
  {
    id: 4,
    title: "AI Sentiment Analyser",
    description: "Sentiment analysis tool with batch input and word‑cloud visualization.",
    techStack: ["Streamlit", "Python", "LangChain", "Ollama"],
    category: "AI/ML",
    github: "https://github.com/Rajeshaligeti/AI-Sentiment-Analyser",
    demo: "N/A",
    featured: false,
  },
  {
    id: 5,
    title: "To‑Do List App",
    description: "A simple task management app with add, edit, delete functionalities.",
    techStack: ["JavaScript", "HTML", "CSS"],
    category: "Frontend",
    github: "https://github.com/Rajeshaligeti/To-Do-List",
    demo: "https://rajeshaligeti.github.io/To-Do-List",
    featured: false,
  },
  {
    id: 6,
    title: "AI ChatBot App",
    description: "Android chat application powered by AI (Gemini API integration).",
    techStack: ["Android", "Kotlin"],
    category: "Mobile",
    github: "https://github.com/Rajeshaligeti/AI_ChatBot_App",
    demo: "N/A",
    featured: false,
  },
  {
    id: 7,
    title: "Interactive Recipe Card",
    description: "Visual recipe UI component with interactive steps and styling.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/Rajeshaligeti/Interactive-Recipe-Card",
    demo: "https://rajeshaligeti.github.io/Interactive-Recipe-Card/",
    featured: false,
  },
  {
    id: 8,
    title: "AI Sentiment Analyser (Flask)",
    description: "Flask-based sentiment analysis tool using LangChain and Flask backend.",
    techStack: ["Python", "Flask", "LangChain"],
    category: "AI/ML",
    github: "https://github.com/Rajeshaligeti/AI_Sentiment_Analyser_using_Flask",
    demo: "N/A",
    featured: true,
  },
  {
    id: 9,
    title: "Editkaro.in",
    description: "Frontend implementation of Editkaro platform for editing workflows.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    category: "Full-stack",
    github: "https://github.com/Rajeshaligeti/Editkaro.in",
    demo: "https://web-project-xnt2.onrender.com/",
    featured: true
  },
  {
    id: 10,
    title: "Cardiovascular Risk Prediction",
    description: "Machine learning model predicting heart disease risk using logistic regression.",
    techStack: ["Python", "Scikit‑Learn", "Pandas"],
    category: "AI/ML",
    github: "https://github.com/Rajeshaligeti/Cardiovascular_Risk_Prediction",
    demo: "N/A",
    featured: true,
  },
  {
    id: 11,
    title: "Promethan‑CodeQuest",
    description: "Competitive coding entry for university hackathon event.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/Rajeshaligeti/Promethan-CodeQuest",
    demo: "https://promethean-codequest.netlify.app/",
    featured: false,
  },
  {
    id: 12,
    title: "AudioWave",
    description: "Music streaming app with React frontend, MongoDB backend, and Spotify integration.",
    techStack: ["React", "MongoDB", "Spotify API"],
    category: "Full‑Stack",
    github: "https://github.com/Rajeshaligeti/AudioWave",
    demo: "N/A",
    featured: true,
  }
];


const categories = ["Featured", "AI/ML", "Full-stack", "Frontend", "Backend", "Mobile"]

export default function Projects() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-70px" }) // Reduced margin for faster trigger
  const [selectedCategory, setSelectedCategory] = useState("Featured")

  const filteredProjects =
    selectedCategory === "Featured" ? projectsData.filter((project) => project.featured) : projectsData.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }} // Reduced initial offset
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Faster duration
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 text-center shine-text-metallic ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Featured{" "}
            <span
              className={`bg-gradient-to-r ${
                theme === "light"
                  ? "from-purple-600 to-pink-600 shine-text-metallic-light"
                  : "from-violet-400 to-purple-400 shine-text-metallic-dark"
              } bg-clip-text text-transparent`}
            >
              Projects
            </span>
          </h2>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 15 }} // Reduced offset
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }} // Faster with shorter delay
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full backdrop-blur-md border font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? theme === "light"
                      ? "bg-purple-500/30 border-purple-500/50 text-purple-700"
                      : "bg-violet-500/30 border-violet-500/50 text-violet-300"
                    : theme === "light"
                      ? "bg-white/20 border-white/30 text-gray-700 hover:bg-white/30"
                      : "bg-black/20 border-white/20 text-white hover:bg-black/30"
                }`}
              >
                <Filter className="inline-block w-4 h-4 mr-2" />
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }} // Faster with shorter delay
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group relative backdrop-blur-md rounded-2xl p-6 border transition-all duration-500 hover:scale-105 ${
                  theme === "light"
                    ? "bg-white/20 border-white/30 shadow-xl hover:shadow-2xl"
                    : "bg-black/20 border-white/10 shadow-2xl shadow-violet-500/10 hover:shadow-violet-500/20"
                }`}
                initial={{ opacity: 0, y: 30 }} // Reduced offset
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: 0.05 * index, ease: "easeOut" }} // Faster with shorter stagger
                style={{
                  transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                }}
                whileHover={{
                  transform: "perspective(1000px) rotateX(-5deg) rotateY(5deg)",
                }}
              >
                {project.featured && (
                  <div
                    className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold ${
                      theme === "light" ? "bg-purple-500 text-white" : "bg-violet-500 text-white"
                    }`}
                  >
                    Featured
                  </div>
                )}

                <div className="mb-4">
                  <h3 className={`text-xl font-bold mb-2 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          theme === "light" ? "bg-purple-100 text-purple-700" : "bg-violet-500/20 text-violet-300"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-sm border font-medium transition-all duration-300 ${
                      theme === "light"
                        ? "bg-white/20 border-white/30 text-gray-700 hover:bg-white/30"
                        : "bg-black/20 border-white/20 text-white hover:bg-black/30"
                    }`}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-sm border font-medium transition-all duration-300 ${
                      theme === "light"
                        ? "bg-purple-500/20 border-purple-500/30 text-purple-700 hover:bg-purple-500/30"
                        : "bg-violet-500/20 border-violet-500/30 text-violet-300 hover:bg-violet-500/30"
                    }`}
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
