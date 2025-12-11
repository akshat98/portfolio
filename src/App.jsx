import React from 'react';
import Header from './components/common/Header';
import MobileHeader from './components/common/MobileHeader';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Interests from './components/sections/Interests';
import Contact from './components/sections/Contact';
import './styles/index.css';

function App() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 font-sans leading-normal tracking-normal">
      {/* Desktop Header */}
      <Header />

      {/* Mobile Header */}
      <MobileHeader />

      {/* Main Content */}
      <main className="w-full md:w-4/5">
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Interests />
        <Contact />
      </main>
    </div>
  );
}

export default App;
