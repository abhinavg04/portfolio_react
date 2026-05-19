import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const projectsData = [
  {
    id: 1,
    title: 'D-Care Milk Procurement Website',
    description: 'Designed and implemented a milk procurement system that streamlined farmer onboarding, milk collection monitoring, and real-time inventory management. Designed optimized MySQL schemas and APIs for handling large-scale transactional data with real-time quality and route-wise tracking.',
    technologies: ['Django', 'REST API', 'MySQL'],
    image: 'images/dcare.png',
    link: '#'
  },
  {
    id: 2,
    title: 'Prepaid Auto Booking',
    description: 'Developed a digital prepaid auto booking and fare management platform for Bangalore Metro Rail Corporation Ltd (BMRCL) to automate passenger ride scheduling. Built dynamic dashboards using Django templates and AJAX for live booking insights, vehicle allocation, and transaction analytics.',
    technologies: ['Django', 'MySQL', 'Bootstrap'],
    image: 'images/prepaidauto.png',
    link: '#'
  },
  {
    id: 3,
    title: 'OpsChain Supply Chain Management System',
    description: 'Built a full-stack supply chain management platform with JWT-based authentication and seamless communication between FastAPI backend and React frontend. Developed and optimized RESTful APIs for real-time inventory tracking, supplier management, and order processing across multiple warehouses.',
    technologies: ['FastAPI', 'React'],
    image: 'images/updatr.png',
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
                description={project.description}
                technologies={project.technologies}
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
          <a
            href="https://github.com/abhinavg04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button 
              className="px-4 py-2 flex items-center rounded-full border border-gray-300 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">•</span>
              Explore more
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;