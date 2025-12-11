import React from 'react';
import { personalInfo } from '../../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 py-16 shadow-lg rounded-lg">
        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <img
            src={personalInfo.profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-md object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Name */}
          <h2 className="text-3xl font-bold text-gray-800">
            {personalInfo.name}
          </h2>

          {/* Introduction */}
          <p className="text-lg text-gray-600">{personalInfo.introduction}</p>

          {/* Work Visa Details */}
          <p className="text-lg text-gray-600">
            🇯🇵 I hold a <b>{personalInfo.visa}</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
