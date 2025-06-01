import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const projectsData = [
  {
    id: 1,
    title: 'Learnlogicify Landing Page',
    image: 'images/spiderman.jpg',
    link: '#'
  },
  {
    id: 2,
    title: 'Winzee Web Chat application',
    image: 'images/spiderman.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'ChatGPT clone',
    image: 'images/spiderman.jpg',
    link: '#'
  },
  {
    id: 4,
    title: 'Gemini Clone',
    image: 'images/spiderman.jpg',
    link: '#'
  }
];

const Projects = () => {
  return (
    <div className="w-full bg-white py-16 px-6">
      {/* Bio Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between mb-16"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="md:w-1/2 pr-8"
        >
          <p className="text-lg font-sans font-medium mb-6">
            Driven by curiosity and a love for design, I create
            simple, functional, and visually striking digital
            experiences. As a student, I'm always learning and
            exploring new ideas.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="md:w-1/2 md:text-right mt-6 md:mt-0"
        >
          <p className="text-sm text-gray-600 mb-4 font-sans">
            The fusion of my passion for design, development, and seamless user experiences
            places me at the intersection of creativity and technology in the digital world.
          </p>
          <motion.a 
            href="#about" 
            className="inline-flex items-center text-gray-700 font-medium font-sans"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            More about me
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            title="Impressive Works" 
            description="HERE'S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION." 
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard 
                title={project.title}
                image={project.image}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <motion.button 
            className="px-4 py-2 flex items-center rounded-full border border-gray-300 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">•</span>
            Explore more
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;