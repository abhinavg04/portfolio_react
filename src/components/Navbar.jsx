import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-8 px-4 flex justify-between items-center backdrop-blur-sm bg-gray-200/30">
      <div className="text-gray-900 font-extrabold font-inter text-xl tracking-tight">
        <span className="text-black">@</span>abhinavg
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-12">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact" className="px-6 py-2.5 bg-gray-900 text-white rounded-full hover:bg-black transition-all duration-300">
          Contact
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-full transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg md:hidden border border-gray-100">
          <div className="flex flex-col py-4">
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#work">Work</MobileNavLink>
            <MobileNavLink href="#projects">Projects</MobileNavLink>
            <MobileNavLink href="#contact" className="text-gray-900 font-semibold">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, className = "" }) => (
  <a 
    href={href} 
    className={`text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 ${className}`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, className = "" }) => (
  <a 
    href={href} 
    className={`px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-all ${className}`}
  >
    {children}
  </a>
);

export default Navbar;