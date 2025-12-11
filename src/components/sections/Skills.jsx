import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { skills } from '../../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-16 text-center bg-gray-100">
      <SectionTitle icon="🛠️">Technical Skills</SectionTitle>

      {/* Languages */}
      <p className="text-lg">
        <strong>Languages:</strong> {skills.languages.join(', ')}
      </p>

      {/* Frameworks */}
      <p className="text-lg">
        <strong>Frameworks:</strong> {skills.frameworks.join(', ')}
      </p>

      {/* Databases */}
      <p className="text-lg">
        <strong>Databases:</strong> NoSQL ({skills.databases.nosql.join(', ')}), RDBMS ({skills.databases.rdbms.join(', ')})
      </p>

      {/* Cloud & DevOps */}
      <p className="text-lg">
        <strong>Cloud & DevOps:</strong> {skills.cloudDevOps.cloud}, CI/CD ({skills.cloudDevOps.cicd})
      </p>

      {/* Testing */}
      <p className="text-lg">
        <strong>Testing Tools:</strong> {skills.testing.join(', ')}
      </p>

      {/* Monitoring */}
      <p className="text-lg">
        <strong>Monitoring:</strong> {skills.monitoring.join(', ')}
      </p>
    </section>
  );
};

export default Skills;
