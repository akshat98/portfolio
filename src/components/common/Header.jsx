import React from 'react';
import Navigation from './Navigation';
import { personalInfo, resumeDownloads } from '../../data/portfolioData';

const Header = () => {
  const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + `/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-gray-800 text-white md:w-1/5 sticky top-0 h-screen hidden md:block">
      <nav className="p-8 space-y-8">
        <h1 className="text-3xl font-bold">👨‍💻 {personalInfo.name}</h1>
        <Navigation />

        <div className="space-y-3">
          {resumeDownloads.map((item) => (
            <button
              key={item.file}
              onClick={() => handleDownload(item.file)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
