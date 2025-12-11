import React from 'react';
import { certifications } from '../../data/portfolioData';

const Certifications = () => {
  const renderItem = (c, idx) => {
    // category with items
    if (c && c.category && Array.isArray(c.items)) {
      return (
        <div key={idx}>
          <h3 className="text-xl font-semibold text-gray-800">{c.category}</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {c.items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>
      );
    }

    // profile/platform entry
    if (c && (c.profileLink || c.description || c.category)) {
      return (
        <div key={idx}>
          {c.category && <h3 className="text-xl font-semibold text-gray-800">{c.category}</h3>}
          {c.description && <p className="text-gray-600 mt-2">{c.description}</p>}
          {c.profileLink && (
            <p className="text-gray-500 mt-1">
              Profile:{' '}
              <a href={c.profileLink} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                {c.profileName || c.profileLink}
              </a>
            </p>
          )}
        </div>
      );
    }

    // fallback: stringify
    return (
      <pre key={idx} className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
        {JSON.stringify(c)}
      </pre>
    );
  };

  return (
    <section id="certifications" className="p-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications And Publications</h2>

        <div className="space-y-6">
          {Array.isArray(certifications) ? (
            certifications.map((c, idx) => renderItem(c, idx))
          ) : certifications && typeof certifications === 'object' ? (
            renderItem(certifications, 0)
          ) : (
            <p className="text-center text-gray-600">No certifications listed.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
