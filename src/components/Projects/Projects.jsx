import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const projectsData = [
  {
    id: 1,
    title: 'BuntsMatch matrmimony website',
    image: 'images/Buntsmatch.png',
    link: 'https://buntsmatch.com/'
  },
  {
    id: 2,
    title: 'Prepaid auto booking website',
    image: 'images/prepaidauto.png',
    link: '#'
  },
  {
    id: 3,
    title: 'Milk procurement website',
    image: 'images/spiderman.jpg',
    link: '#'
  },
  {
    id: 4,
    title: 'Updatr, Freelancer - Client Management System',
    image: 'images/spiderman.jpg',
    link: '#'
  }
];

const Projects = () => {
  return (
    <div className="w-full bg-gray-200 py-16 px-6" id='projects'>
      {/* Projects Section */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader 
            title="Impressive Works" 
            description="HERE'S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR SOFTWARE DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION." 
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