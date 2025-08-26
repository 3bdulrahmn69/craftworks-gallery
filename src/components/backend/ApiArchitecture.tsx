import React from 'react';
import {
  FiLayers,
  FiDatabase,
  FiShield,
  FiZap,
  FiCheck,
  FiMessageCircle,
  FiGlobe,
  FiCpu,
} from 'react-icons/fi';
import Section from '../ui/Section';

const ApiArchitecture: React.FC = () => {
  const architectureComponents = [
    {
      icon: FiCpu,
      title: 'Core Backend',
      description:
        'TypeScript-powered Express.js backend serving web, mobile, and admin platforms',
      features: [
        'Express.js RESTful APIs',
        'TypeScript type safety',
        '80+ endpoints coverage',
      ],
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: FiDatabase,
      title: 'Data Management',
      description:
        'MongoDB with Mongoose ODM providing flexible and scalable data storage',
      features: [
        'Document-based storage',
        'Automatic indexing & optimization',
        'Real-time data aggregation',
      ],
      color: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: FiShield,
      title: 'Security Layer',
      description:
        'Multi-layered security with JWT authentication and comprehensive access control',
      features: [
        'JWT token authentication',
        'Role-based access control',
        'API rate limiting & validation',
      ],
      color: 'bg-red-100',
      iconColor: 'text-red-600',
    },
    {
      icon: FiMessageCircle,
      title: 'Real-time Engine',
      description:
        'Socket.IO powered real-time communication for instant messaging and updates',
      features: [
        'Socket.IO integration',
        'Real-time messaging',
        'Live status updates',
      ],
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      icon: FiZap,
      title: 'Performance',
      description:
        'Optimized architecture delivering sub-100ms response times with efficient caching',
      features: [
        'Optimized database queries',
        'Efficient file handling',
        'Auto-scaling capabilities',
      ],
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
    {
      icon: FiGlobe,
      title: 'Multi-Platform',
      description:
        'Single backend serving React web app, Flutter mobile app, and admin dashboard',
      features: [
        'Cross-platform compatibility',
        'Unified API endpoints',
        'Consistent data models',
      ],
      color: 'bg-teal-100',
      iconColor: 'text-teal-600',
    },
  ];

  return (
    <Section
      id="architecture"
      title="System Architecture"
      subtitle="Technical foundation powering the complete Herfa marketplace ecosystem"
      className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-blue-50"
      titleIcon={<FiLayers className="w-8 h-8 text-blue-600" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {architectureComponents.map((component, index) => {
          const Icon = component.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 ${component.color} rounded-lg`}>
                  <Icon className={`w-6 h-6 ${component.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {component.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{component.description}</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {component.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <FiCheck className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ApiArchitecture;
