import { Menu, X } from "lucide-react";
import PropTypes from "prop-types";

const Navbar = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}) => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-black/30 backdrop-blur-md z-50 border border-white/10 rounded-full shadow-lg">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="text-base sm:text-xl md:text-2xl font-bold text-solarized-base2 hover:text-solarized-cyan transition-colors duration-300 cursor-pointer truncate max-w-[180px] sm:max-w-none">
            Atik Shahriar Opu
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              "Home",
              "Skills",
              "Projects",
              "Achievements",
              "Education",
              "Contact",
            ].map((item) => {
              const sectionId =
                item === "Achievements" ? "experience" : item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`transition-colors duration-300 font-medium text-base ${
                    isActive
                      ? "text-solarized-cyan font-semibold"
                      : "text-solarized-base1 hover:text-solarized-base2"
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
        <div className="md:hidden bg-black/40 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {[
              "Home",
              "Skills",
              "Projects",
              "Achievements",
              "Education",
              "GitHub",
              "Contact",
            ].map((item) => {
              const sectionId =
                item === "Achievements"
                  ? "experience"
                  : item === "GitHub"
                  ? "github"
                  : item.toLowerCase();
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`block w-full text-left px-5 py-3 rounded-lg transition-all duration-300 font-medium ${
                    isActive
                      ? "text-solarized-cyan bg-gray-800 font-semibold"
                      : "text-solarized-base1 hover:text-solarized-base2 hover:bg-gray-800"
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

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default Navbar;
