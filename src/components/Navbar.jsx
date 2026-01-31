import { Menu, X, Download } from "lucide-react";
import PropTypes from "prop-types";

const Navbar = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}) => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-6xl bg-black/30 backdrop-blur-md z-[9999] border border-white/10 rounded-2xl md:rounded-full shadow-lg">
      <div className="px-4 sm:px-6 md:px-10">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="text-sm sm:text-lg md:text-2xl font-bold text-solarized-base2 md:hover:text-[#B8B8FF] transition-colors duration-300 cursor-pointer whitespace-nowrap">
            Atik Shahria Opu
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {[
              "Home",
              "Skills",
              "Projects",
              "Experience",
              "Achievements",
              "Education",
              "Contact",
            ].map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`transition-colors duration-300 font-medium text-base ${
                    isActive
                      ? "text-[#B8B8FF] font-semibold"
                      : "text-solarized-base1 md:hover:text-solarized-base2"
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <a
              href="/CV/Atik_Shahria_Opu.pdf"
              download="Atik_Shahria_Opu_Resume.pdf"
              className="flex items-center gap-1.5 px-5 py-2 bg-solarized-violet text-white font-medium text-sm rounded-full md:hover:shadow-lg md:hover:shadow-solarized-violet/50 transition-all duration-300 transform md:hover:scale-105 ml-2"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-2 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-3 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
            {[
              "Home",
              "Skills",
              "Projects",
              "Experience",
              "Achievements",
              "Education",
              "GitHub",
              "Contact",
            ].map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl transition-all duration-300 font-medium text-sm ${
                    isActive
                      ? "text-[#B8B8FF] bg-gray-800/80 font-semibold"
                      : "text-solarized-base1"
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <a
              href="/CV/Atik_Shahria_Opu.pdf"
              download="Atik_Shahria_Opu_Resume.pdf"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-solarized-violet text-white font-semibold text-sm rounded-xl transition-all duration-300 mt-2"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default Navbar;
