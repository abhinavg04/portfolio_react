import React from 'react';
import SkillIcon from './SkillIcon';

const SkillCard = ({ title, description, icons, tools = [] }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-5">
      {/* Icons */}
      <div className="flex space-x-2 mb-5">
        {icons.map((icon, index) => (
          <SkillIcon 
            key={index}
            type={icon.type}
            color={icon.color}
            label={icon.label}
          />
        ))}
      </div>
      
      {/* Title and Description */}
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      
      {/* Tools */}
      {tools.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span 
              key={index} 
              className="inline-block rounded-full bg-gray-800 p-1"
            >
              <ToolIcon type={tool} />
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

// Tool icon component for the small circular icons
const ToolIcon = ({ type }) => {
  const getIcon = () => {
    switch(type) {
      case 'react':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#61DAFB">
            <circle cx="12" cy="12" r="2.5" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          </svg>
        );
      case 'tailwind':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#06B6D4">
            <path d="M12 6C9.5 6 7.9 7.1 7 9.2 7.5 8.3 8.4 7.7 9.5 7.5c.7-.1 1.3.1 1.8.6.5.5.9 1.1 1.3 1.7.7 1 1.5 2.1 3.2 2.1 2.5 0 4.1-1.1 5-3.2-.5.9-1.4 1.5-2.5 1.7-.7.1-1.3-.1-1.8-.6-.5-.5-.9-1.1-1.3-1.7-.7-1-1.5-2.1-3.2-2.1zM7 12c-2.5 0-4.1 1.1-5 3.2.5-.9 1.4-1.5 2.5-1.7.7-.1 1.3.1 1.8.6.5.5.9 1.1 1.3 1.7.7 1 1.5 2.1 3.2 2.1 2.5 0 4.1-1.1 5-3.2-.5.9-1.4 1.5-2.5 1.7-.7.1-1.3-.1-1.8-.6-.5-.5-.9-1.1-1.3-1.7-.7-1-1.5-2.1-3.2-2.1z" />
          </svg>
        );
      case 'figma':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#F24E1E">
            <path d="M12 12a4 4 0 1 1-4 4v-4h4z" />
            <path d="M12 4a4 4 0 0 1 0 8H8V4h4z" />
            <path d="M12 4a4 4 0 1 0 4 4V4h-4z" />
            <path d="M8 12a4 4 0 1 0 4 4v-4H8z" />
            <path d="M8 4a4 4 0 0 0-4 4 4 4 0 0 0 4 4V4z" />
          </svg>
        );
      case 'sass':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#CC6699">
            <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm-1 15c.8 0 1.5-.6 1.5-1.2 0-.5-.3-.8-.8-1.2-.6-.3-.7-.5-.7-.7 0-.3.3-.6.7-.6.2 0 .4.1.5.1l.3-.6c-.3-.1-.6-.2-.9-.2-.8 0-1.4.5-1.4 1.2 0 .5.3.8.8 1.1.6.3.7.5.7.8 0 .3-.3.5-.7.5-.3 0-.6-.1-.8-.3l-.3.6c.3.2.7.3 1.1.5z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  return getIcon();
};

export default SkillCard;