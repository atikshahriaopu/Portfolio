import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";
import { styles } from "../styles";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const { animationState, sectionRef } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Add the form data to Firestore
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
        status: "new",
      });

      // Reset form and show success message
      setFormData({ name: "", email: "", message: "" });
      setSubmitStatus("success");

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");

      // Hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      name: "Email",
      icon: Mail,
      value: "atikshariaropu@gmail.com",
      href: "mailto:atikshariaropu@gmail.com",
      gradient: "solarized-violet/10",
      iconBg: "solarized-violet",
    },
    {
      name: "GitHub",
      icon: Github,
      value: "@atikshahriaopu",
      href: "https://github.com/atikshahriaopu",
      gradient: "solarized-violet/10",
      iconBg: "solarized-violet",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      value: "@atikshahriaopu",
      href: "https://linkedin.com/in/atikshahriaopu",
      gradient: "solarized-violet/10",
      iconBg: "solarized-violet",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    fadeOut: {
      opacity: 0,
      x: -30,
      transition: {
        duration: 0.3,
      },
    },
    static: {
      opacity: 1,
      x: 0,
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    fadeOut: {
      opacity: 0,
      x: 30,
      transition: {
        duration: 0.3,
      },
    },
    static: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={animationState}
            className="space-y-6"
          >
            {/* Title and Subtitle */}
            <div className="mb-8">
              <h2 className={`${styles.sectionHeadText} mb-4`}>Get in touch</h2>
              <p className="text-base sm:text-lg text-solarized-base1 leading-relaxed">
                Looking to build a high-performance backend, optimize a complex
                system, or solve a challenging technical problem? Let’s discuss
                how we can turn your idea into robust, scalable, and efficient
                software.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={index}
                    href={card.href}
                    target={card.name !== "Email" ? "_blank" : undefined}
                    rel={
                      card.name !== "Email" ? "noopener noreferrer" : undefined
                    }
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      animationState === "visible"
                        ? { opacity: 1, y: 0 }
                        : animationState === "fadeOut"
                          ? { opacity: 0, y: 10 }
                          : animationState === "static"
                            ? { opacity: 1, y: 0 }
                            : {}
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative block"
                  >
                    <div className="relative backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-solarized-violet/30 transition-all duration-500 hover:shadow-lg hover:shadow-solarized-violet/10 hover:-translate-y-1">
                      {/* Background on hover */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>

                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {/* Icon */}
                          <div
                            className={`bg-${card.iconBg} p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                          >
                            <Icon size={24} className="text-white" />
                          </div>

                          {/* Text */}
                          <div>
                            <h3 className="text-sm font-semibold text-solarized-base2 mb-1">
                              {card.name}
                            </h3>
                            <p className="text-sm sm:text-base text-solarized-base1 group-hover:text-solarized-violet transition-colors duration-300">
                              {card.value}
                            </p>
                          </div>
                        </div>

                        {/* Arrow Icon */}
                        <ArrowRight
                          size={20}
                          className="text-solarized-base1 group-hover:text-solarized-violet group-hover:translate-x-1 transition-all duration-300"
                        />
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute -inset-px rounded-2xl bg-solarized-violet/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate={animationState}
          >
            <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
              {/* Decorative background */}
              <div className="absolute inset-0 rounded-3xl bg-solarized-violet/3 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-solarized-violet p-2.5 rounded-lg">
                    <Send size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#B8B8FF]">
                    Send a message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-solarized-base2 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-solarized-base2 placeholder-solarized-base01 focus:outline-none focus:ring-2 focus:ring-solarized-violet/50 focus:border-solarized-violet/50 transition-all duration-300 shadow-inner"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-solarized-base2 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-solarized-base2 placeholder-solarized-base01 focus:outline-none focus:ring-2 focus:ring-solarized-violet/50 focus:border-solarized-violet/50 transition-all duration-300 shadow-inner"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-solarized-base2 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-solarized-base2 placeholder-solarized-base01 focus:outline-none focus:ring-2 focus:ring-solarized-violet/50 focus:border-solarized-violet/50 transition-all duration-300 shadow-inner resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`w-full ${
                      isSubmitting
                        ? "bg-solarized-violet/50 cursor-not-allowed"
                        : "bg-solarized-violet hover:bg-solarized-violet/80"
                    } text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-solarized-violet/25 flex items-center justify-center space-x-2`}
                  >
                    <span>{isSubmitting ? "Sending..." : "Submit"}</span>
                    {!isSubmitting && <Send size={18} />}
                    {isSubmitting && (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    )}
                  </motion.button>

                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400"
                    >
                      <CheckCircle size={20} />
                      <span className="text-sm font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400"
                    >
                      <AlertCircle size={20} />
                      <span className="text-sm font-medium">
                        Failed to send message. Please try again or contact me
                        directly via email.
                      </span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
