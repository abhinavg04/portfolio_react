import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, image, link }) => {
  return (
    <motion.div 
      className="project-card group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -8 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative overflow-hidden">
          <img 
            src={image || "/api/placeholder/400/320"} 
            alt={title} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold font-sans text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-blue-600 transition-colors">
              <svg className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies && technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;