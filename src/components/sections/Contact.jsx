import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { contact } from '../../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white text-center">
      <SectionTitle icon="📞">Contact Me</SectionTitle>

      {/* Email */}
      <p className="text-lg flex justify-center items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-envelope"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
        </svg>
        <span>Email:</span>
        <a href={`mailto:${contact.email}`} className="text-blue-500 underline">
          {contact.email}
        </a>
      </p>

      {/* LinkedIn */}
      <p className="text-lg flex justify-center items-center space-x-2 mt-4">
        <svg
          className="w-6 h-6 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 3a2 2 0 100 4 2 2 0 000-4zM4 7h4v10H4V7zm6 0h4v2.35h.05a4.4 4.4 0 013.95-2.35c4.19 0 4.95 2.76 4.95 6.35v6h-4v-5.64c0-1.34-.48-2.26-1.68-2.26-1.68 0-2.32 1.14-2.32 2.26V17h-4V7z"></path>
        </svg>
        <span>LinkedIn:</span>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          LinkedIn Profile
        </a>
      </p>

      {/* GitHub */}
      <p className="text-lg flex justify-center items-center space-x-2 mt-4">
        <svg
          className="w-6 h-6 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 00-3.16 19.47c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.13-1.1-1.43-1.1-1.43-.9-.62.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.1.64-1.35-2.22-.26-4.55-1.12-4.55-4.96 0-1.1.39-2 .99-2.7-.1-.25-.43-1.3.1-2.7 0 0 .81-.27 2.65 1.02a9.18 9.18 0 014.83 0c1.84-1.29 2.65-1.02 2.65-1.02.53 1.4.2 2.45.1 2.7.6.7.99 1.6.99 2.7 0 3.85-2.33 4.7-4.55 4.96.35.3.67.89.67 1.8v2.68c0 .26.18.57.68.48A10 10 0 0012 2z"></path>
        </svg>
        <span>GitHub:</span>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          GitHub Profile
        </a>
      </p>
    </section>
  );
};

export default Contact;
