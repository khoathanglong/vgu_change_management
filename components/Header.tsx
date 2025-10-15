import React, { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#Home' },
  { name: 'Key Findings', href: '#KeyFindings' },
  { name: 'Pillars of Change', href: '#TheFourPillars' },
  { name: 'Recommendations', href: '#Recommendations' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#Home" className="text-2xl font-bold text-[#0A4C7A]">
          COIL Insights
        </a>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[#009688] transition-colors duration-300 font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#009688] transition-colors duration-300 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;