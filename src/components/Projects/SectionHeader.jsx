import React from 'react';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6">
      <h2 className="text-4xl font-medium mb-4 md:mb-0 font-inter">{title}</h2>
      {description && (
        <p className="md:w-1/2 text-xs uppercase font-sans tracking-wider text-gray-600 text-right">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;