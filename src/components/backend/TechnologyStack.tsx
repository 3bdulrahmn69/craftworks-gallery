import React from 'react';
import { FiLayers } from 'react-icons/fi';
import Section from '../ui/Section';

const TechnologyStack: React.FC = () => {
  const technologies = [
    {
      category: 'Backend Core',
      items: ['Node.js', 'Express.js', 'TypeScript', 'ES6 Modules'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Database',
      items: [
        'MongoDB',
        'Mongoose ODM',
        'Database Indexing',
        'Data Validation',
      ],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      category: 'Real-time',
      items: ['Socket.IO', 'WebSockets', 'Event Emitters', 'Live Messaging'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Security',
      items: [
        'JWT Authentication',
        'bcrypt Hashing',
        'Rate Limiting',
        'CORS Protection',
      ],
      color: 'from-red-500 to-orange-500',
    },
    {
      category: 'File Management',
      items: [
        'Cloudinary Integration',
        'Multer Upload',
        'Image Processing',
        'File Validation',
      ],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      category: 'Development',
      items: ['Jest Testing', 'ESLint', 'Winston Logging', 'Git Workflows'],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <Section
      title="Technology Stack"
      subtitle="Modern, enterprise-grade technologies powering the complete Herfa ecosystem"
      titleIcon={<FiLayers className="w-8 h-8 text-blue-600" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${tech.color} group-hover:scale-125 transition-transform`}
              ></div>
              <h3 className="text-lg font-bold text-gray-900">
                {tech.category}
              </h3>
            </div>
            <div className="space-y-2">
              {tech.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechnologyStack;
