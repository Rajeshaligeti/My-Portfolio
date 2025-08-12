"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useTheme } from "./theme-provider"
import { useRef, useState } from "react"
import { Mail, MessageSquare, LinkedinIcon, Download, Send, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { theme } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS not configured. Please set up your EmailJS credentials in .env.local')
        // Fallback: Open default email client
        const subject = encodeURIComponent(formData.subject)
        const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)
        window.open(`mailto:aligetirajesh782@gmail.com?subject=${subject}&body=${body}`)
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        return
      }

      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Rajesh Aligeti',
        to_email: 'aligetirajesh782@gmail.com'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "aligetirajesh782@gmail.com",
      href: "mailto:aligetirajesh782@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+91 8247025410",
      href: "https://wa.me/918247025410",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/rajeshaligeti",
      href: "https://www.linkedin.com/in/rajesh-aligeti-38a6a227b/",
      color: "from-blue-600 to-indigo-600",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
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
            Get In{" "}
            <span
              className={`${
                theme === "light" ? "shine-contact-metallic" : "shine-contact-metallic-dark"
              } !text-transparent`}
            >
              Touch
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className={`backdrop-blur-md rounded-2xl p-8 border shadow-xl ${
                  theme === "light" ? "bg-white/30 border-white/40" : "bg-black/30 border-white/20"
                }`}
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "0 0 40px rgba(139, 92, 246, 0.2), inset 0 0 40px rgba(139, 92, 246, 0.05)"
                      : "0 25px 50px rgba(0, 0, 0, 0.1), inset 0 0 30px rgba(147, 51, 234, 0.05)",
                }}
              >
                <h3 className={`text-2xl font-bold mb-6 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                  Let's Connect
                </h3>

                <motion.p
                  className={`text-lg mb-8 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I'm always interested in new opportunities, collaborations, and interesting projects. Feel free to
                  reach out if you'd like to discuss AI/ML solutions, backend development, or just want to connect!
                </motion.p>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon
                    return (
                      <motion.a
                        key={method.label}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center space-x-4 p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 shadow-lg hover:shadow-xl ${
                          theme === "light"
                            ? "bg-white/20 border-white/30 hover:bg-white/30"
                            : "bg-black/20 border-white/20 hover:bg-black/30"
                        }`}
                        style={{
                          boxShadow:
                            theme === "dark" ? "0 0 20px rgba(139, 92, 246, 0.1)" : "0 10px 25px rgba(0, 0, 0, 0.1)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 * index + 0.5 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div
                          className={`p-3 rounded-full bg-gradient-to-r ${method.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        >
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h4 className={`font-semibold ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                            {method.label}
                          </h4>
                          <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                            {method.value}
                          </p>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>

                {/* Resume Download */}
                <motion.div
                  className="mt-8 pt-6 border-t border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <a
                    href="/resume.pdf"
                    download
                    className={`group flex items-center justify-center space-x-3 w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      theme === "light"
                        ? "bg-purple-500/20 border border-purple-500/30 text-purple-700 hover:bg-purple-500/30 hover:shadow-purple-500/25"
                        : "bg-violet-500/20 border border-violet-500/30 text-violet-300 hover:bg-violet-500/30 hover:shadow-violet-500/25"
                    }`}
                  >
                    <Download className="group-hover:animate-bounce" size={20} />
                    <span>Download Resume</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div
                className={`backdrop-blur-md rounded-2xl p-8 border shadow-xl ${
                  theme === "light" ? "bg-white/30 border-white/40" : "bg-black/30 border-white/20"
                }`}
                style={{
                  boxShadow:
                    theme === "dark"
                      ? "0 0 40px rgba(139, 92, 246, 0.2), inset 0 0 40px rgba(139, 92, 246, 0.05)"
                      : "0 25px 50px rgba(0, 0, 0, 0.1), inset 0 0 30px rgba(147, 51, 234, 0.05)",
                }}
              >
                <h3 className={`text-2xl font-bold mb-6 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                  Send a Message
                </h3>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-600 flex items-center space-x-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-600 flex items-center space-x-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={20} />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <label
                        className={`block text-sm font-medium mb-2 ${
                          theme === "light" ? "text-gray-700" : "text-gray-300"
                        }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all duration-300 focus:outline-none focus:ring-2 ${
                          theme === "light"
                            ? "bg-white/30 border-white/40 text-gray-800 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                            : "bg-black/30 border-white/30 text-white placeholder-gray-400 focus:ring-violet-500 focus:border-violet-500"
                        }`}
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <label
                        className={`block text-sm font-medium mb-2 ${
                          theme === "light" ? "text-gray-700" : "text-gray-300"
                        }`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all duration-300 focus:outline-none focus:ring-2 ${
                          theme === "light"
                            ? "bg-white/30 border-white/40 text-gray-800 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                            : "bg-black/30 border-white/30 text-white placeholder-gray-400 focus:ring-violet-500 focus:border-violet-500"
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all duration-300 focus:outline-none focus:ring-2 ${
                        theme === "light"
                          ? "bg-white/30 border-white/40 text-gray-800 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                          : "bg-black/30 border-white/30 text-white placeholder-gray-400 focus:ring-violet-500 focus:border-violet-500"
                      }`}
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg backdrop-blur-sm border transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                        theme === "light"
                          ? "bg-white/30 border-white/40 text-gray-800 placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                          : "bg-black/30 border-white/30 text-white placeholder-gray-400 focus:ring-violet-500 focus:border-violet-500"
                      }`}
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full flex items-center justify-center space-x-3 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${
                      theme === "light"
                        ? "bg-purple-500/20 border border-purple-500/30 text-purple-700 hover:bg-purple-500/30 hover:shadow-purple-500/25"
                        : "bg-violet-500/20 border border-violet-500/30 text-violet-300 hover:bg-violet-500/30 hover:shadow-violet-500/25"
                    }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
