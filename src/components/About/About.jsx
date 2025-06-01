import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const skills = [
    "Python", "Django", "Flask", "FastAPI",
    "React.js", "PostgreSQL", "MongoDB", "Docker"
  ];

  const education = {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    university: "Government College of Engineering, Thrissur",
    year: "2019-2023"
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a Full Stack Developer with a year of hands-on experience in building robust web applications. 
              Specializing in Python-based technologies, I craft efficient backend solutions while creating 
              seamless frontend experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My approach combines technical expertise with problem-solving skills to deliver scalable 
              and maintainable solutions that meet business objectives.
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-900 rounded-lg px-4 py-3 text-center"
                >
                  {skill}
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
            <div className="bg-gray-900 rounded-lg p-6">
              <h4 className="text-xl font-medium mb-2">{education.degree}</h4>
              <p className="text-gray-300 mb-2">{education.field}</p>
              <motion.a 
                href="https://gectcr.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <span>{education.university}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
              <p className="text-gray-400 mt-2">{education.year}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;