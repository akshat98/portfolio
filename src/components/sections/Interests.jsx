import React from 'react';
import { interests } from '../../data/portfolioData';

const Interests = () => {
  return (
    <section id="interests" className="p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interests</h2>
        <ul className="space-y-2 text-lg text-gray-600">
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Interests;
