import React from 'react';
import { education } from '../../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {education.degree}
            </h3>
            <p className="text-gray-600">{education.institution}</p>
            <p className="text-gray-500">{education.duration}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
