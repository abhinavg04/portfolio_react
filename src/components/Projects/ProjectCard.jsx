import React from 'react';

const ProjectCard = ({ title, image, link }) => {
  return (
    <div className="project-card group">
      <a href={link} target="_blank" className="block">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={image || "/api/placeholder/400/320"} 
            alt={title} 
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex items-center">
          <div className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 mr-2">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h3 className="text-lg font-medium font-sans">{title}</h3>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;