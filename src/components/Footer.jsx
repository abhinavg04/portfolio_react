import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8 px-6 h-[15rem]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <p className="text-xl font-light mb-2">your friendly chaos creator</p>
          <h2 className="text-7xl font-bold">Abhinav G</h2>
        </div>
        
        <div>
          <a 
            href="#top" 
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-300"
            aria-label="Back to top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-black"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;