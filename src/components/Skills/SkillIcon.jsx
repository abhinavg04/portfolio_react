import React from 'react';

const SkillIcon = ({ type, color, label }) => {
  // For custom SVG icons, you would implement specific SVG paths here
  // based on the icon type
  const getIconContent = () => {
    // You could implement special SVG icons here based on type
    return label;
  };

  return (
    <div className={`w-8 h-8 rounded ${color} flex items-center justify-center`}>
      <span className="text-xs text-white">{getIconContent()}</span>
    </div>
  );
};

export default SkillIcon;