"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "../../contexts/ThemeContext"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import { Mail, Linkedin, Download, Send, CheckCircle, AlertCircle, Github } from "lucide-react"
import styles from "./Contact.module.css"

function Contact() {
  const { theme } = useTheme()
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 4000)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "aligetirajesh782@gmail.com",
      href: "mailto:aligetirajesh782@gmail.com",
      color: "blue",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Rajeshaligeti",
      href: "https://github.com/Rajeshaligeti",
      color: "gray",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/aligeti-rajesh",
      color: "indigo",
    },
  ]

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`${styles.title} ${theme === "light" ? styles.lightTitle : styles.darkTitle}`}>
            Get In <span className={styles.gradientText}>Touch</span>
          </h2>

          <div className={styles.grid}>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className={`${styles.contactInfo} ${theme === "light" ? styles.lightContactInfo : styles.darkContactInfo}`}
              >
                <h3
                  className={`${styles.sectionTitle} ${theme === "light" ? styles.lightSectionTitle : styles.darkSectionTitle}`}
                >
                  Let's Connect
                </h3>

                <motion.p
                  className={`${styles.description} ${theme === "light" ? styles.lightDescription : styles.darkDescription}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  I'm always interested in new opportunities, collaborations, and interesting projects. Feel free to
                  reach out if you'd like to discuss AI/ML solutions, full-stack development, or just want to connect!
                </motion.p>

                <div className={styles.contactMethods}>
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon
                    return (
                      <motion.a
                        key={method.label}
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.contactMethod} ${theme === "light" ? styles.lightContactMethod : styles.darkContactMethod}`}
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                        transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
                        whileHover={{ scale: 1.01, y: -1 }}
                      >
                        <div className={`${styles.methodIcon} ${styles[`${method.color}Icon`]}`}>
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h4
                            className={`${styles.methodLabel} ${theme === "light" ? styles.lightMethodLabel : styles.darkMethodLabel}`}
                          >
                            {method.label}
                          </h4>
                          <p
                            className={`${styles.methodValue} ${theme === "light" ? styles.lightMethodValue : styles.darkMethodValue}`}
                          >
                            {method.value}
                          </p>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>

                {/* Resume Download */}
                <motion.div
                  className={styles.resumeSection}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <a
                    href="/resume.pdf"
                    download
                    className={`${styles.resumeButton} ${theme === "light" ? styles.lightResumeButton : styles.darkResumeButton}`}
                  >
                    <Download size={20} />
                    <span>Download Resume</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div
                className={`${styles.contactForm} ${theme === "light" ? styles.lightContactForm : styles.darkContactForm}`}
              >
                <h3
                  className={`${styles.sectionTitle} ${theme === "light" ? styles.lightSectionTitle : styles.darkSectionTitle}`}
                >
                  Send a Message
                </h3>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    className={styles.successMessage}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className={styles.errorMessage}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={20} />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <label className={`${styles.label} ${theme === "light" ? styles.lightLabel : styles.darkLabel}`}>
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`${styles.input} ${theme === "light" ? styles.lightInput : styles.darkInput}`}
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    >
                      <label className={`${styles.label} ${theme === "light" ? styles.lightLabel : styles.darkLabel}`}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`${styles.input} ${theme === "light" ? styles.lightInput : styles.darkInput}`}
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <label className={`${styles.label} ${theme === "light" ? styles.lightLabel : styles.darkLabel}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`${styles.input} ${theme === "light" ? styles.lightInput : styles.darkInput}`}
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                  >
                    <label className={`${styles.label} ${theme === "light" ? styles.lightLabel : styles.darkLabel}`}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className={`${styles.textarea} ${theme === "light" ? styles.lightTextarea : styles.darkTextarea}`}
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${styles.submitButton} ${theme === "light" ? styles.lightSubmitButton : styles.darkSubmitButton}`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.4, delay: 1.0 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className={styles.spinner}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
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

export default Contact
