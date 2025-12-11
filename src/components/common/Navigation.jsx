import React from 'react';
import { navigation } from '../../data/portfolioData';

const Navigation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className="space-y-6">
      {navigation.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
            className="block hover:text-blue-400"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
