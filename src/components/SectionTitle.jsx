import React from 'react';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1E33] mb-3">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto"></div>
      {subtitle && (
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;