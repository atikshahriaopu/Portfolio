import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievement from "./components/Achievement";
import Education from "./components/Education";
import Projects from "./components/Projects";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to top on page load/refresh and handle initial hash
  useEffect(() => {
    // Check if there's a hash in the URL on load
    const hash = window.location.hash.substring(1); // Remove the '#'
    if (hash) {
      // Wait for components to render, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "auto",
          });
          setActiveSection(hash);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "skills",
        "projects",
        "experience",
        "achievements",
        "education",
        "github",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
        // Update URL without page reload
        const newUrl = current === "home" ? "/" : `/#${current}`;
        window.history.replaceState(null, "", newUrl);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "auto", // Changed from "smooth" to "auto" for instant scrolling
      });
      setIsMenuOpen(false);

      // Update URL when clicking navigation
      const newUrl = id === "home" ? "/" : `/#${id}`;
      window.history.pushState(null, "", newUrl);
    }
  };

  return (
    <div
      className="min-h-screen text-solarized-base1 font-sans relative overflow-hidden"
      style={{
        backgroundColor: "#060817",
        backgroundImage: "url(#)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar - Outside content wrapper for proper z-index */}
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Content */}
      <div className="relative z-10">
        <Hero scrollToSection={scrollToSection} />

        <Skills />

        <Projects />

        <Experience />

        <Achievement />

        <Education />

        <GitHub />

        <Contact />

        <Footer />
      </div>

      <style>
        {`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

        * {
          font-family: "Poppins", sans-serif;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}
      </style>
    </div>
  );
};

export default App;
