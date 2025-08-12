"use client"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, Calendar, ExternalLink, Download } from "lucide-react"

const certificationsData = [
  {
    "id": 1,
    "title": "Certificate of Participation by E-Cell IIT Hyderabad",
    "issuer": "Grad Guru",
    "issueDate": "May 2025",
    "category": "Hackathons",
    "credentialUrl": "https://cert.diceid.com/cid/rU3j6ZXmZf",
    "description": "Communication, Career Development, Design Thinking, Interpersonal Skills"

  },
  {
    "id": 2,
    "title": "Introduction to Large Language Models (LLMs)",
    "issuer": "NPTEL",
    "issueDate": "May 2025",
    "category": "AI/ML",
    "description": "Large Language Models (LLM), Transformer Models",
    "credentialUrl": "https://drive.google.com/file/d/14zckEA1WLfTJ94_vdC0eq-nvzFpYfO18/view",
    "credentialId": "NPTEL25CS45S553800051"
  },
  {
    "id": 3,
    "title": "Cisco Cybersecurity Essentials",
    "issuer": "Cisco Networking Academy",
    "issueDate": "Apr 2025",
    "category": "Cybersecurity",
    "description": "Cybersecurity, CSIRT, Cisco Identity Services Engine (ISE)"
  },
  {
    "id": 4,
    "title": "Google AIML Virtual Internship",
    "issuer": "EduSkills Foundation",
    "issueDate": "Apr 2025",
    "category": "AI/ML",
    "description": "TensorFlow, Computer Vision",
    "credentialUrl": "https://drive.google.com/file/d/1RE353c8W3ZzsMkRUWkGlRhCZI-NQ6a03/view",
    "credentialId": "6e43dc14d9e0b21c57a9986559027e0f"
  },
  {
    "id": 5,
    "title": "Data Analytics Essentials",
    "issuer": "Cisco",
    "issueDate": "Dec 2024",
    "category": "Data & Analytics",
    "credentialUrl": "https://www.credly.com/badges/b97ffe0f-a287-4e49-a039-c13c4c417f8b/linked_in_profile",
    "description": "Data Analysis, SQL, Microsoft Excel, Tableau"
  },
  {
    "id": 6,
    "title": "Postman API Fundamentals Student Expert",
    "issuer": "Postman",
    "issueDate": "Dec 2024",
    "category": "Developer Tools",
    "description": "Postman API",
    "credentialUrl": "https://api.badgr.io/public/assertions/7bZpuVqCRkC6mhvf3OJvHw",
    "credentialId": "676f0e050d87a13362ae801a"
  },
  {
    "id": 7,
    "title": "AWS Academy Cloud Foundations",
    "issuer": "Amazon Web Services",
    "issueDate": "Nov 2024",
    "category": "Cloud",
    "credentialUrl": "https://www.credly.com/badges/bbb059af-0dcd-4511-aa4f-e92a5a32999b/linked_in_profile",
    "description": "AWS CloudFormation, Amazon EC2, Amazon S3"
  },
  {
    "id": 8,
    "title": "Certificate of Participation in Innovasia 2024",
    "issuer": "Unstop",
    "issueDate": "Nov 2024",
    "category": "Hackathons",
    "description": "Hackathon, Innovation",
    "credentialUrl": "https://unstop.com/certificate-preview/4a05fa9f-3035-4a01-8ec6-e88a4f544034",
    "credentialId": "4a05fa9f-3035-4a01-8ec6-e88a4f544034"
  },
  {
    "id": 9,
    "title": "Explorations into Mindfulness",
    "issuer": "IBM",
    "issueDate": "Oct 2024",
    "description": "Mindfulness, Stress Management",
    "credentialUrl": "https://www.credly.com/badges/763dcc16-737e-4f27-8624-fb26f393b7ca/linked_in_profile",
    "category": "Hackathons"
  },
  {
    "id": 10,
    "title": "IBM SkillsBuild Machine Learning",
    "issuer": "IBM",
    "issueDate": "Oct 2024",
    "category": "AI/ML",
    "credentialUrl": "https://drive.google.com/drive/folders/1bo3Wml8yPahbKMOaB0Q1FOp3dAofeSV7",
    "description": "Machine Learning, IBM Certified Developer"
  },
  {
    "id": 11,
    "title": "Certificate of Participation in TATA Crucible Campus Quiz 2024",
    "issuer": "Unstop",
    "issueDate": "Sep 2024",
    "category": "Hackathons",
    "description": "Quiz Competition",
    "credentialUrl": "https://unstop.com/certificate-preview/81f74939-83ae-4a68-8238-529e30b96449",
    "credentialId": "81f74939-83ae-4a68-8238-529e30b96449"
  },
  {
    "id": 12,
    "title": "Google Android Developer Virtual Internship",
    "issuer": "EduSkills Foundation",
    "issueDate": "Sep 2024",
    "category": "Programming",
    "credentialUrl": "https://drive.google.com/file/d/1QZerRewwB1r1ywI9sNaaMCM3wOJbgexT/view",
    "description": "Android Development, Kotlin"
  },
  {
    "id": 13,
    "title": "Certificate of Participation - Tech Tussle 2024",
    "issuer": "Coding Brigade BVRIT",
    "issueDate": "Aug 2024",
    "category": "Hackathons",
    "credentialUrl": "https://drive.google.com/file/d/1RJnWAu43PB88e_sBIfkX-6V2fY-pmNyr/view",
    "description": "Competitive Programming"
  },
  {
    "id": 14,
    "title": "Java Intermediate",
    "issuer": "Sololearn",
    "issueDate": "Aug 2024",
    "category": "Programming",
    "description": "Java",
    "credentialUrl": "https://api2.sololearn.com/v2/certificates/CC-DHPHHPB9/image/png",
    "credentialId": "CC-DHPHHP89"
  },
  {
    "id": 15,
    "title": "Getting Started with Enterprise-grade AI",
    "issuer": "IBM",
    "issueDate": "Jun 2024",
    "credentialUrl": "https://www.credly.com/badges/66c85795-f9e4-401b-9576-a319bcd1c44f/linked_in_profile",
    "category": "AI/ML"
  },
  {
    "id": 16,
    "title": "Machine Learning for Data Science Projects",
    "issuer": "IBM",
    "issueDate": "Jun 2024",
    "description": "Machine Learning, Data Science",
    "credentialUrl": "https://www.credly.com/badges/daa82515-abaf-4ad6-99f2-3de088d647e6/linked_in_profile",
    "category": "AI/ML"
  },
  {
    "id": 17,
    "title": "Cognizant - Artificial Intelligence Job Simulation",
    "issuer": "Forage",
    "issueDate": "May 2024",
    "category": "AI/ML",
    "description": "AI Job Simulation, Cognizant",
    "credentialUrl": "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_KAWyHzoB8uND7ZL3X_1715796165112_completion_certificate.pdf",
    "credentialId": "pd7zwbeAYEsCav8Jv"
  },
  {
    "id": 18,
    "title": "Introduction to Generative AI",
    "issuer": "Google Cloud Skills Boost",
    "issueDate": "May 2024",
    "category": "AI/ML",
    "description": "GenAI",
    "credentialUrl": "https://www.cloudskillsboost.google/public_profiles/9e172b6b-7f4b-4849-bec1-9d87f8983888/badges/8936422?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    "credentialId": "8936422"
  },
  {
    "id": 19,
    "title": "Introduction to Large Language Models",
    "issuer": "Google Cloud Skills Boost",
    "issueDate": "May 2024",
    "category": "AI/ML",
    "credentialUrl": "https://www.cloudskillsboost.google/public_profiles/9e172b6b-7f4b-4849-bec1-9d87f8983888/badges/8965031?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    "description": "Large Language Models (LLM)",
    "credentialId": "8965031"
  },
  {
    "id": 20,
    "title": "Microsoft Certified: Azure AI Fundamentals",
    "issuer": "Microsoft",
    "issueDate": "May 2024",
    "category": "Cloud",
    "credentialUrl": "https://learn.microsoft.com/en-us/users/RajeshAligeti-9079/achievements/YMKYG3MR",
    "description": "Microsoft Azure Machine Learning"
  },
  {
    "id": 21,
    "title": "Problem Solving (Basic)",
    "issuer": "HackerRank",
    "issueDate": "May 2024",
    "category": "Programming",
    "description": "Problem Solving",
    "credentialUrl": "https://www.hackerrank.com/certificates/2a9580b15386",
    "credentialId": "2A9580B15386"
  },
  {
    "id": 22,
    "title": "Programming, Data Structures and Algorithms using Python: Elite",
    "issuer": "NPTEL",
    "issueDate": "Apr 2024",
    "category": "Programming",
    "description": "Problem Solving, Python, OOP",
    "credentialUrl": "https://drive.google.com/file/d/1b2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7/view",
    "credentialId": "NPTEL24CS45S557300001"
  },
  {
    "id": 23,
    "title": "Python (Basic)",
    "issuer": "HackerRank",
    "issueDate": "Mar 2024",
    "category": "Programming",
    "credentialUrl": "https://www.hackerrank.com/certificates/aaa5f01741d5",
    "description": "Python",
    "credentialId": "AAA5F01741D5"
  },
  {
    "id": 24,
    "title": "Python Developer",
    "issuer": "Sololearn",
    "issueDate": "Mar 2024",
    "category": "Programming",
    "credentialUrl": "https://api2.sololearn.com/v2/certificates/CC-JASJTP0U/image/png",
    "description": "Python, Python Advanced",
    "credentialId": "CC-JASJTP0U"
  },
  {
    "id": 25,
    "title": "Certificate of Participation in Tech-Hacks",
    "issuer": "Unstop",
    "issueDate": "Jan 2024",
    "category": "Hackathons",
    "credentialUrl": "https://unstop.com/certificate-preview/187e7f85-bad7-44cc-93c0-a1cfd65c08d7",
    "credentialId": "187e7f85-bad7-44cc-93c0-a1cfd65c08d7"
  },
  {
    "id": 26,
    "title": "Git Essential Training",
    "issuer": "LinkedIn",
    "issueDate": "Nov 2023",
    "credentialUrl": "https://www.linkedin.com/learning/certificates/1f0ddfd1d7957d50178c6294f31644c7792f18b2433f4bd3dd98c052a56e9e7e",
    "category": "Developer Tools",
    "description": "GitHub, Version Control, Git"
  },
  {
    "id": 27,
    "title": "Certificate of Participation - Adobe India Hackathon (Round 1)",
    "issuer": "Unstop",
    "issueDate": "Aug 2025",
    "credentialUrl": "https://drive.google.com/file/d/1OOgiLnu7pDQjnMy02GKfzbB4sxLdTIvJ/view?usp=sharing",
    "category": "Hackathons"
  }
    
]



const categories = ["AI/ML", "Cloud", "Cybersecurity", "Data & Analytics", "Developer Tools", "Programming", "Hackathons"]

export default function Certifications() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" }) // Faster trigger
  const [selectedCategory, setSelectedCategory] = useState("AI/ML")

  // Function to parse date strings and convert to comparable format
  const parseDate = (dateString: string) => {
    const [month, year] = dateString.split(' ')
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const monthIndex = monthNames.indexOf(month)
    return new Date(parseInt(year), monthIndex)
  }

  // Filter and sort certifications based on selected category
  const filteredCertifications = certificationsData
    .filter(cert => cert.category === selectedCategory)
    .sort((a, b) => parseDate(b.issueDate).getTime() - parseDate(a.issueDate).getTime())

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }} // Reduced offset
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: "easeOut" }} // Faster
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-8 text-center ${
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
              Certifications
            </span>
          </h2>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? theme === "light"
                      ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                      : "bg-violet-500 text-white shadow-lg shadow-violet-500/30"
                    : theme === "light"
                    ? "bg-white/20 text-gray-700 border border-white/30 hover:bg-white/30"
                    : "bg-black/20 text-white border border-white/20 hover:bg-black/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className={`group backdrop-blur-md rounded-2xl p-6 border transition-all duration-500 hover:scale-105 ${
                  theme === "light"
                    ? "bg-white/20 border-white/30 shadow-xl hover:shadow-2xl"
                    : "bg-black/20 border-white/10 shadow-2xl shadow-violet-500/10 hover:shadow-violet-500/20"
                }`}
                initial={{ opacity: 0, y: 30 }} // Reduced offset
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: 0.05 * index, ease: "easeOut" }} // Faster with shorter stagger
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-full ${
                      theme === "light" ? "bg-purple-100 text-purple-600" : "bg-violet-500/20 text-violet-400"
                    }`}
                  >
                    <Award size={24} />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      theme === "light" ? "bg-green-100 text-green-700" : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {cert.category}
                  </span>
                </div>

                <h3 className={`font-bold mb-2 ${theme === "light" ? "text-gray-800" : "text-white"}`}>{cert.title}</h3>

                <p className={`text-sm mb-3 ${theme === "light" ? "text-purple-600" : "text-violet-400"} font-medium`}>
                  {cert.issuer}
                </p>

                <p className={`text-sm mb-4 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                  {cert.description}
                </p>

                <div className="flex items-center space-x-1 mb-4">
                  <Calendar size={16} className={theme === "light" ? "text-gray-500" : "text-gray-500"} />
                  <span className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-500"}`}>
                    Issued: {cert.issueDate}
                  </span>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      theme === "light"
                        ? "bg-white/20 border border-white/30 text-gray-700 hover:bg-white/30"
                        : "bg-black/20 border border-white/20 text-white hover:bg-black/30"
                    }`}
                  >
                    <ExternalLink size={14} />
                    <span>View</span>
                  </a>
                  <a
                    href={cert.credentialUrl}
                    download
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      theme === "light"
                        ? "bg-purple-500/20 border border-purple-500/30 text-purple-700 hover:bg-purple-500/30"
                        : "bg-violet-500/20 border border-violet-500/30 text-violet-300 hover:bg-violet-500/30"
                    }`}
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
