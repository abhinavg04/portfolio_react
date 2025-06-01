import React from 'react';

const SkillsHeader = ({ title }) => {
  return (
    <div className="max-w-4xl mx-auto mb-6 text-center">
      <h2 className="text-6xl font-sans font-light">{title}</h2>
    </div>
  );
};

export default SkillsHeader;