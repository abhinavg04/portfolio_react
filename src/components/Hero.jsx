import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Hero = () => {
  const titles = ["Full Stack Developer", "Software Engineer", "UI/UX Designer"];
  const combinedText = titles.join("   •   ");
  
  const navItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688 3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65 3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z" />
        </svg>
      ),
      label: "Github",
      href: "https://github.com/abhinavg04"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhinav-g-628850192/"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      label: "Home",
      href: ""
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M9 8h4"
          />
        </svg>
      ),
      label: "Resume",
      href: "/resume/Abhinav_G_Resume.pdf",
      download: true
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
        </svg>
      ),
      label: "Email",
      href: "mailto:abhinavg1024@email.com"
    },
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
              <h1 className="text-white text-5xl font-inter md:text-9xl inline-block tracking-wider select-none">
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
          <div className="bg-black backdrop-blur-lg rounded-full px-8 py-2 flex items-center gap-8 relative">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  index === Math.floor(navItems.length / 2)
                    ? "text-white bg-blue-600 p-3 rounded-full -translate-y-4 shadow-lg shadow-blue-500/20 scale-110"
                    : "text-gray-400 hover:text-white"
                } transition-all duration-300`}
              >
                {item.icon}
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