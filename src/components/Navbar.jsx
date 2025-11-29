import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}) => {
  return (
    <nav className="fixed top-0 w-full bg-solarized-base02/95 z-50 border-b border-solarized-base01">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-xl font-bold bg-gradient-to-r from-solarized-cyan via-solarized-blue to-solarized-violet bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            {"<atikshahriaopu/>"}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {[
              "Home",
              "Skills",
              "Achivments",
              "Education",
              "Projects",
              "Contact",
            ].map((item) => {
              const sectionId = item === "Achivments" ? "experience" : item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium ${
                    activeSection === sectionId
                      ? "bg-solarized-blue text-white shadow-lg shadow-solarized-blue/50"
                      : "text-solarized-base0 hover:bg-solarized-cyan/20 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-solarized-base02/95 border-t border-solarized-base01">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {[
              "Home",
              "Skills",
              "Achivments",
              "Education",
              "Projects",
              "Contact",
            ].map((item) => {
              const sectionId = item === "Achivments" ? "experience" : item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`block w-full text-left px-5 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeSection === sectionId
                      ? "bg-solarized-blue text-white"
                      : "text-solarized-base0 hover:bg-solarized-cyan/20 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
