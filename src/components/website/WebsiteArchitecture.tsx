import React from 'react';
import {
  FiLayers,
  FiMonitor,
  FiDatabase,
  FiCloud,
  FiCheck,
} from 'react-icons/fi';
import Section from '../ui/Section';

const WebsiteArchitecture: React.FC = () => {
  const architectureLayers = [
    {
      title: 'Frontend Layer',
      icon: <FiMonitor className="w-8 h-8 text-white" />,
      gradient: 'from-blue-500 to-indigo-500',
      technologies: [
        { name: 'Next.js 15', description: 'React Framework', color: 'blue' },
        { name: 'TypeScript', description: 'Type Safety', color: 'purple' },
        { name: 'Tailwind CSS', description: 'Utility Styling', color: 'cyan' },
      ],
    },
    {
      title: 'Communication Layer',
      icon: <FiCloud className="w-8 h-8 text-white" />,
      gradient: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Axios', description: 'HTTP Client', color: 'green' },
        {
          name: 'Socket.IO',
          description: 'Real-time Events',
          color: 'emerald',
        },
        { name: 'REST API', description: 'Data Exchange', color: 'teal' },
      ],
    },
    {
      title: 'Backend Integration',
      icon: <FiDatabase className="w-8 h-8 text-white" />,
      gradient: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'Express.js', description: 'API Server', color: 'orange' },
        { name: 'MongoDB', description: 'Database', color: 'red' },
        { name: 'JWT Auth', description: 'Security', color: 'pink' },
      ],
    },
  ];

  const architectureFeatures = [
    {
      title: 'Component Architecture',
      icon: <FiLayers className="w-6 h-6" />,
      color: 'blue',
      features: [
        'Modular component structure with atomic design',
        'Reusable UI components with TypeScript interfaces',
        'Custom hooks for business logic separation',
        'Context API for global state management',
        'Component composition patterns',
      ],
    },
    {
      title: 'Performance & Optimization',
      icon: <FiMonitor className="w-6 h-6" />,
      color: 'green',
      features: [
        'Code splitting with React.lazy and Suspense',
        'Image optimization with Next.js Image component',
        'Bundle analysis and tree shaking',
        'Progressive Web App capabilities',
        'Service Worker for offline functionality',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-900 border-blue-200',
      indigo: 'bg-indigo-50 text-indigo-900 border-indigo-200',
      purple: 'bg-purple-50 text-purple-900 border-purple-200',
      cyan: 'bg-cyan-50 text-cyan-900 border-cyan-200',
      green: 'bg-green-50 text-green-900 border-green-200',
      emerald: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      teal: 'bg-teal-50 text-teal-900 border-teal-200',
      lime: 'bg-lime-50 text-lime-900 border-lime-200',
      orange: 'bg-orange-50 text-orange-900 border-orange-200',
      red: 'bg-red-50 text-red-900 border-red-200',
      pink: 'bg-pink-50 text-pink-900 border-pink-200',
      rose: 'bg-rose-50 text-rose-900 border-rose-200',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <Section
      id="architecture"
      title="Frontend Architecture"
      subtitle="Modern Next.js architecture with optimized performance and scalable component structure"
      className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50"
      titleIcon={<FiLayers className="w-8 h-8 text-blue-600" />}
    >
      <div className="max-w-7xl mx-auto">
        {/* Architecture Overview */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our frontend architecture follows modern best practices with a clear
            separation of concerns, optimized performance, and maintainable code
            structure.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {architectureLayers.map((layer, index) => (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${layer.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  {layer.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {layer.title}
                </h3>

                {/* Technologies */}
                <div className="space-y-3">
                  {layer.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${getColorClasses(
                        tech.color
                      )}`}
                    >
                      <div className="font-semibold text-sm mb-1">
                        {tech.name}
                      </div>
                      <div className="text-xs opacity-80">
                        {tech.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {architectureFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center`}
                >
                  <span className={`text-${feature.color}-600`}>
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {feature.features.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <FiCheck
                      className={`w-5 h-5 text-${feature.color}-500 mt-0.5 flex-shrink-0`}
                    />
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                metric: 'Bundle Size',
                value: '< 200KB',
                description: 'Optimized production build',
              },
              {
                metric: 'First Contentful Paint',
                value: '< 1.5s',
                description: 'Fast initial page load',
              },
              {
                metric: 'Lighthouse Score',
                value: '95+',
                description: 'Performance, accessibility, SEO',
              },
            ].map((spec, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {spec.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {spec.metric}
                </div>
                <div className="text-sm text-gray-600">{spec.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WebsiteArchitecture;
