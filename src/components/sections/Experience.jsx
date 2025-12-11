import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { experience } from '../../data/portfolioData';

const ExperienceCard = ({ company, location, duration, role, projects, linkedinUrl, websiteUrl, logo }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 mb-3">
        {/* Company Logo */}
        {logo && (
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-12 h-12 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}

        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-2xl font-semibold">
              {company}, {location}
            </h3>
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors"
                title={`Visit ${company} website`}
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors"
                title={`Visit ${company} on LinkedIn`}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 3a2 2 0 100 4 2 2 0 000-4zM4 7h4v10H4V7zm6 0h4v2.35h.05a4.4 4.4 0 013.95-2.35c4.19 0 4.95 2.76 4.95 6.35v6h-4v-5.64c0-1.34-.48-2.26-1.68-2.26-1.68 0-2.32 1.14-2.32 2.26V17h-4V7z"></path>
                </svg>
              </a>
            )}
          </div>
          <p className="text-gray-600">{duration}</p>
        </div>
      </div>

      <div className="border-l-4 border-blue-500 pl-6 mt-4 space-y-8">
        <div>
          <h4 className="text-xl font-semibold">{role}</h4>

          {projects.map((project, index) => (
            <div key={index} className="mt-4">
              <h5 className="text-lg font-semibold text-blue-600 mt-4">
                {project.title}
              </h5>
              <p className="italic text-gray-600">
                Technologies: {project.technologies.join(', ')}
              </p>
              <ul className="list-inside space-y-2 mt-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: achievement }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-16 px-4 sm:px-16">
      <SectionTitle>Experience & Projects</SectionTitle>

      {experience.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </section>
  );
};

export default Experience;
