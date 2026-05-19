import React from 'react';

const SectionHeader = ({ title, description, dark = false }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 md:mb-0 font-inter ${dark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
      {description && (
        <p className={`md:w-1/2 text-xs uppercase font-sans tracking-wider text-right ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;