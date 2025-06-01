import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Hero = () => {
  const titles = ["Full Stack Developer", "Software Engineer", "UI/UX Designer"];
  const combinedText = titles.join("   •   ");
  
  const navItems = [
    { icon: "🏠", label: "Home", href: "#" },
    { icon: ">_", label: "Terminal", href: "#terminal" },
    { icon: "📦", label: "Projects", href: "#projects" },
    { icon: "👤", label: "About", href: "#about" },
    { icon: "📄", label: "Resume", href: "#resume" },
    { icon: "🐱", label: "Github", href: "#github" },
    { icon: "↩", label: "Back", href: "#back" },
  ];

  return (
    <section className="relative h-dvh bg-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col">
        <Navbar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-80 md:w-[450px] aspect-square rounded-full overflow-hidden mb-12 relative"
          >
            <img
              src="/images/hero.png"
              alt="Profile"
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>

          {/* Scrolling Text Container - Now positioned absolute */}
          <div className="absolute top-2/3 -translate-y-2/3 w-full z-[99]">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: 2 // Initial delay to show the text
              }}
              className="whitespace-nowrap mix-blend-difference"
            >
              <h1 className="text-white text-5xl font-inter md:text-9xl inline-block tracking-wider">
                {combinedText + "   •   " + combinedText}
              </h1>
            </motion.div>
          </div>

        {/* Bottom Navigation Menu */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="bg-gray-900/90 backdrop-blur-lg rounded-full px-6 py-3 flex items-center gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-800 transition-all"
                >
                  <span className="text-gray-200 text-xl">{item.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;