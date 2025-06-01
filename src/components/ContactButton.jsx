import React, { useState } from 'react';

const ContactButton = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Handle mouse movement over the button
  const handleMouseMove = (e) => {
    const button = e.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    
    // Calculate the center of the button
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    
    // Calculate the mouse position relative to the center of the button
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation values (limiting the degree of rotation)
    const rotateX = mouseY * -0.2; // Invert Y axis for natural tilt
    const rotateY = mouseX * 0.2;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  // Ball gradient and highlights for realism
  const ballStyle = {
    background: 'linear-gradient(135deg, #4d83fb 0%, #3b68f0 50%, #2d4cdb 100%)',
    boxShadow: isHovered 
      ? '0 12px 24px rgba(0, 0, 0, 0.3), inset 0 -5px 15px rgba(0, 0, 0, 0.4), inset 0 5px 15px rgba(255, 255, 255, 0.4)'
      : '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 -3px 10px rgba(0, 0, 0, 0.3), inset 0 3px 10px rgba(255, 255, 255, 0.3)',
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'translateZ(10px)' : ''}`,
    transition: 'transform 0.15s ease-out, box-shadow 0.3s ease, background 0.3s ease',
    transformStyle: 'preserve-3d',
    position: 'relative',
    overflow: 'hidden'
  };
  
  // Light reflection overlay
  const highlightStyle = {
    position: 'absolute',
    top: '0',
    left: '5%',
    width: '90%',
    height: '50%',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
    transform: 'translateZ(1px)'
  };
  
  return (
    <a 
      href="#contact" 
      className="relative block w-32 h-32 rounded-full"
      style={ballStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div style={highlightStyle}></div>
      <div className="w-full h-full flex items-center justify-center">
        <span 
          className="text-white font-medium z-10"
          style={{ 
            transform: 'translateZ(5px)',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          Get in touch
        </span>
      </div>
    </a>
  );
};

export default ContactButton;