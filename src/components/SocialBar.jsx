import React from 'react';

const SocialBar = () => {
  return (
    <div className="py-8 flex justify-center space-x-6">
      <SocialLink href="https://github.com" icon="github" />
      <SocialLink href="https://linkedin.com" icon="linkedin" />
      <SocialLink href="https://twitter.com" icon="twitter" />
      <SocialLink href="mailto:your@email.com" icon="email" />
    </div>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors duration-200"
  >
    <i className={`fab fa-${icon} text-2xl`}></i>
  </a>
);

export default SocialBar;