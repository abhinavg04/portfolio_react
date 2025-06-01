// Main SkillsShowcase component
import React from 'react';
import SkillsHeader from './SkillsHeader';
import SkillCard from './SkillCard';

const SkillsShowcase = () => {
  // Skills data array
  const skillsData = [
    {
        id: 1,
        title: 'Back-End Development',
        description: 'Building robust server-side logic to power web applications and handle data processing.',
        icons: [
          { type: 'node', color: 'bg-green-600', label: 'ND' },
          { type: 'express', color: 'bg-gray-600', label: 'EX' },
          { type: 'django', color: 'bg-green-800', label: 'DJ' },
          { type: 'rails', color: 'bg-red-700', label: 'RL' }
        ],
        tools: []
      },
    {
      id: 2,
      title: 'Front-End Development',
      description: 'Creating beautiful, intuitive, and responsive interfaces that deliver exceptional user experiences.',
      icons: [
        { type: 'html', color: 'bg-red-800', label: '<>' },
        { type: 'js', color: 'bg-yellow-600', label: 'JS' },
        { type: 'css', color: 'bg-blue-600', label: 'CSS' }
      ],
      tools: ['react', 'tailwind']
    },
    {
      id: 3,
      title: 'Programming Languages',
      description: 'Proficient in modern programming languages that power web applications and software solutions.',
      icons: [
        { type: 'js', color: 'bg-yellow-500', label: 'JS' },
        { type: 'typescript', color: 'bg-blue-600', label: 'TS' },
        { type: 'python', color: 'bg-blue-500', label: 'PY' },
        { type: 'ruby', color: 'bg-red-600', label: 'RB' }
      ],
      tools: []
    },
    {
      id: 6,
      title: 'Database Management',
      description: 'Designing and implementing efficient database solutions for storing and retrieving data.',
      icons: [
        { type: 'mongodb', color: 'bg-green-600', label: 'MG' },
        { type: 'postgresql', color: 'bg-blue-600', label: 'PG' },
        { type: 'mysql', color: 'bg-blue-800', label: 'MY' }
      ],
      tools: []
    },
    {
      id: 7,
      title: 'Core Computer Science Concepts',
      description: 'Understanding the fundamental principles that form the foundation of software development.',
      icons: [
        { type: 'algorithms', color: 'bg-blue-700', label: 'AL' },
        { type: 'data-structures', color: 'bg-green-700', label: 'DS' }
      ],
      tools: []
    },
    // {
    //   id: 8,
    //   title: 'Cloud & Deployment',
    //   description: 'Leveraging cloud platforms for deploying, scaling, and managing applications.',
    //   icons: [
    //     { type: 'aws', color: 'bg-orange-500', label: 'AWS' },
    //     { type: 'azure', color: 'bg-blue-600', label: 'AZ' },
    //     { type: 'gcp', color: 'bg-blue-400', label: 'GCP' }
    //   ],
    //   tools: []
    // },
    {
      id: 10,
      title: 'Version Control & Collaboration',
      description: 'Using modern tools for code management, collaboration, and efficient workflows.',
      icons: [
        { type: 'github', color: 'bg-gray-800', label: 'GH' },
        { type: 'gitlab', color: 'bg-orange-600', label: 'GL' }
      ],
      tools: []
    },
    // {
    //   id: 11,
    //   title: 'UI/UX Design',
    //   description: 'Creating user-centered interfaces that balance usability with aesthetic appeal.',
    //   icons: [
    //     { type: 'sketch', color: 'bg-orange-500', label: 'SK' },
    //     { type: 'figma', color: 'bg-purple-700', label: 'FG' },
    //     { type: 'xd', color: 'bg-pink-600', label: 'XD' }
    //   ],
    //   tools: []
    // },
    {
      id: 12,
      title: 'Testing & Debugging',
      description: 'Ensuring application quality through comprehensive testing and efficient debugging.',
      icons: [
        { type: 'jest', color: 'bg-red-500', label: 'JS' },
        { type: 'cypress', color: 'bg-green-500', label: 'CY' },
        { type: 'selenium', color: 'bg-green-600', label: 'SE' }
      ],
      tools: []
    }
  ];

  return (
    <div className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header and Filter Buttons */}
        <SkillsHeader title="Skills that fuel my passion" />
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {skillsData.map(skill => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
              icons={skill.icons}
              tools={skill.tools}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;