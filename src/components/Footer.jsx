import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 border-t border-solarized-base01 bg-solarized-base02/95">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-solarized-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-solarized-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <p className="text-solarized-base00 text-sm font-light tracking-wide">
          © {new Date().getFullYear()} Atik Shahria Opu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
