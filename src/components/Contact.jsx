import React from "react";
import { Github, Linkedin, Facebook, Mail, Twitter, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const { animationState, sectionRef } = useScrollAnimation();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/atikshahriaopu",
      color: "from-solarized-base01 to-solarized-base00",
      hoverColor: "hover:bg-solarized-violet/20",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/atikshahriaopu",
      color: "from-solarized-blue to-solarized-cyan",
      hoverColor: "hover:bg-solarized-blue/20",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/atikshahriaopu",
      color: "from-solarized-cyan to-solarized-blue",
      hoverColor: "hover:bg-solarized-cyan/20",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/atikshahriaopu",
      color: "from-solarized-cyan to-solarized-green",
      hoverColor: "hover:bg-solarized-cyan/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    fadeOut: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    static: {
      opacity: 1,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    fadeOut: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
    static: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section ref={sectionRef} id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-solarized-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-solarized-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={
            animationState === "visible" 
              ? { opacity: 1, y: 0 } 
              : animationState === "fadeOut"
              ? { opacity: 0, y: -20 }
              : animationState === "static"
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-solarized-cyan via-solarized-blue to-solarized-violet bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={
            animationState === "visible" 
              ? { opacity: 1, y: 0 } 
              : animationState === "fadeOut"
              ? { opacity: 0, y: 20 }
              : animationState === "static"
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-solarized-base0 mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed px-2"
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </motion.p>

        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            animationState === "visible" 
              ? { opacity: 1, y: 0 } 
              : animationState === "fadeOut"
              ? { opacity: 0, y: 20 }
              : animationState === "static"
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <a
            href="mailto:atikshariaropu@gmail.com"
            className="group inline-block glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-solarized-base01 hover:border-solarized-blue transition-all duration-500 hover:scale-105 relative overflow-hidden"
          >
            {/* Gradient glow */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-solarized-blue to-solarized-violet opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="inline-block mb-3 sm:mb-4"
              >
                <div className="bg-gradient-to-br from-solarized-blue to-solarized-cyan p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl">
                  <Send size={32} className="text-solarized-base2 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
              </motion.div>

              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                Email Me
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-solarized-base0 break-all">
                atikshahriaopu@gmail.com
              </p>
            </div>

            {/* Decorative corner */}
            <div className="absolute -top-3 -right-3 w-24 h-24 sm:w-32 sm:h-32 bg-solarized-base01 opacity-0 group-hover:opacity-30 rounded-full blur-3xl transition-all duration-500"></div>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={animationState}
          className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative glass-effect p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 hover:scale-110 border border-solarized-base01 hover:border-solarized-blue hover:bg-solarized-blue/20`}
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-solarized-blue to-solarized-violet opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <Icon size={24} className="text-solarized-base0 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>

                {/* Hover effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 rounded-xl sm:rounded-2xl"></div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
