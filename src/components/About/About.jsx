import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../Projects/SectionHeader';

function About() {
  const skills = [
    "Python", "Java", "JavaScript", "Django", "Django REST Framework", "FastAPI",
    "React", "HTML", "CSS", "Bootstrap", "TailwindCSS", "MySQL", "SQLite3",
    "Docker", "Git", "GitHub", "BitBucket", "AWS", "Pandas", "Redis", "Selenium"
  ];

  const educations = [
    {
      degree: "B Tech in CSE",
      field: "Computer Science, Core Java, Data Structure, Database Management",
      university: "Government Engineering College, Thrissur",
      year: "2019-2023",
      website: "https://gectcr.ac.in/",
      grade: "7.75 CGPA"
    },
    {
      degree: "Higher Secondary Education",
      field: "Computer Science",
      university: "GVHSS Payyoli",
      year: "2017-2019",
      website: "#",
      grade: "97.4%"
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6" id='about'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <SectionHeader 
            title="About Me" 
            description="PASSIONATE PYTHON FULL STACK DEVELOPER WITH EXPERTISE IN BUILDING SCALABLE WEB APPLICATIONS"
            dark={true}
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a Python Full Stack Developer with hands-on experience in building and deploying scalable 
              Python-based web applications using Django and REST APIs. I specialize in designing and optimizing 
              complex relational database schemas in MySQL, implementing efficient query optimization strategies 
              to handle large-scale transactional data with high accuracy, integrity, and performance.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My approach combines technical expertise with collaborative problem-solving to deliver scalable 
              and maintainable solutions. I work effectively in cross-functional teams, focusing on creating 
              seamless user experiences while ensuring robust backend architecture.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-gray-900 rounded-lg px-4 py-3 text-center border border-gray-800 hover:border-blue-500 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              {educations.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  className="bg-gray-900 rounded-lg p-6 border-l-4 border-blue-500 hover:border-blue-400 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">{edu.degree}</h4>
                    <span className="text-blue-400 font-semibold">{edu.grade}</span>
                  </div>
                  <p className="text-gray-300 mb-2">{edu.field}</p>
                  <div className="flex justify-between items-center">
                    <motion.a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span>{edu.university}</span>
                      {edu.website !== "#" && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </motion.a>
                    <span className="text-gray-500 text-sm">{edu.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;