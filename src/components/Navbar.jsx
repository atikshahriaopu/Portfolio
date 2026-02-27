import { Menu, X, Download } from "lucide-react";
import PropTypes from "prop-types";

const Navbar = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}) => {
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] xl:w-[90%] max-w-6xl bg-black/30 backdrop-blur-md z-[10001] border border-white/10 rounded-2xl xl:rounded-full shadow-lg">
        <div className="px-4 sm:px-6 xl:px-10">
          <div className="flex justify-between items-center h-14 xl:h-16">
            <div className="text-sm sm:text-lg xl:text-2xl font-bold text-solarized-base2 xl:hover:text-[#B8B8FF] transition-colors duration-300 cursor-pointer whitespace-nowrap">
              Atik Shahria Opu
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center gap-5 2xl:gap-6">
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
                        : "text-solarized-base1 xl:hover:text-solarized-base2"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
              <a
                href="/CV/Atik_Shahria_Opu.pdf"
                download="Atik_Shahria_Opu_Resume.pdf"
                className="flex items-center gap-1.5 px-5 py-2 bg-solarized-violet text-white font-medium text-sm rounded-full xl:hover:shadow-lg xl:hover:shadow-solarized-violet/50 transition-all duration-300 transform xl:hover:scale-105 ml-2"
              >
                <Download size={15} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-white p-2 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-[10000]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeInBackdrop_0.2s_ease-out]"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="absolute top-0 right-0 h-full w-[280px] bg-gradient-to-br from-[#0a0f29] via-[#060817] to-[#0d1224] border-l border-white/10 shadow-2xl animate-[slideInFromRight_0.3s_ease-out]">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-[#B8B8FF]">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="p-4 space-y-2 overflow-y-auto h-[calc(100%-140px)]">
              {[
                "Home",
                "Skills",
                "Projects",
                "Experience",
                "Achievements",
                "Education",
                "GitHub",
                "Contact",
              ].map((item, index) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`block w-full text-left px-4 py-3.5 rounded-xl transition-all duration-300 font-medium text-base relative overflow-hidden group ${
                      isActive
                        ? "text-white bg-gradient-to-r from-solarized-violet/80 to-solarized-blue/60 shadow-lg shadow-solarized-violet/30"
                        : "text-solarized-base1 hover:text-white hover:bg-white/5"
                    }`}
                    style={{
                      animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`,
                    }}
                  >
                    <span className="relative z-10">{item}</span>
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-solarized-violet/20 to-solarized-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Download Resume Button */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-gradient-to-t from-[#060817] to-transparent">
              <a
                href="/CV/Atik_Shahria_Opu.pdf"
                download="Atik_Shahria_Opu_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-r from-solarized-violet to-solarized-blue text-white font-semibold text-base rounded-xl shadow-lg shadow-solarized-violet/30 hover:shadow-solarized-violet/50 hover:scale-105 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default Navbar;
