import React from 'react';

const SectionTitle = ({ children, icon = '' }) => {
  return (
    <h2 className="text-3xl font-bold mb-8">
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </h2>
  );
};

export default SectionTitle;
