import React from 'react';
import Navigation from './Navigation';
import { personalInfo } from '../../data/portfolioData';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white md:w-1/5 sticky top-0 h-screen hidden md:block">
      <nav className="p-8 space-y-8">
        <h1 className="text-3xl font-bold">👨‍💻 {personalInfo.name}</h1>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
