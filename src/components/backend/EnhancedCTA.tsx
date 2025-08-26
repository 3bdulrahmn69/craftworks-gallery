import React from 'react';
import {
  FiDownload,
  FiDatabase,
  FiShield,
  FiZap,
  FiLayers,
} from 'react-icons/fi';

const EnhancedCTA: React.FC = () => {
  const stats = [
    { icon: FiZap, value: '<100ms', label: 'Response Time' },
    { icon: FiShield, value: '100%', label: 'Type Safe' },
    { icon: FiDatabase, value: '80+', label: 'Endpoints' },
    { icon: FiLayers, value: '3', label: 'Applications' },
  ];

  return (
    <section
      className="py-16 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
      role="region"
      aria-labelledby="cta-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-4">
          Comprehensive Backend Architecture
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore our complete backend system that powers the entire Herfa
          ecosystem. From web platform to mobile app, our TypeScript backend
          delivers enterprise-grade performance and reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="/Craftworks-API-Collection.json"
            download="Herfa-API-Collection.json"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/20"
            aria-label="Download Herfa API collection for development reference"
          >
            <FiDownload className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download API Collection
          </a>
        </div>

        {/* Technical Specifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-blue-200" />
                </div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnhancedCTA;
