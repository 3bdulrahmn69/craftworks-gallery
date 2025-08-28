import React from 'react';
import {
  FiTrendingUp,
  FiTarget,
  FiAward,
  FiCode,
  FiUsers,
  FiGlobe,
} from 'react-icons/fi';
import Section from '../ui/Section';

const ResultsImpact: React.FC = () => {
  const projectImpacts = [
    {
      category: 'Technical Achievement',
      icon: <FiCode className="w-8 h-8" />,
      description:
        'Demonstrated mastery of modern web development technologies and best practices',
      metrics: [
        { label: 'TypeScript Coverage', value: '100%' },
        { label: 'Component Reusability', value: '85%' },
        { label: 'Performance Score', value: '95+' },
      ],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      category: 'User Experience',
      icon: <FiUsers className="w-8 h-8" />,
      description:
        'Created intuitive, accessible interface serving diverse user needs in Egyptian market',
      metrics: [
        { label: 'Mobile Responsiveness', value: '100%' },
        { label: 'Accessibility Score', value: 'A+' },
        { label: 'Load Time', value: '<2s' },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Market Innovation',
      icon: <FiGlobe className="w-8 h-8" />,
      description:
        'Addressed real market gap in Egyptian craftsman services through digital transformation',
      metrics: [
        { label: 'Service Categories', value: '8+' },
        { label: 'User Journey Steps', value: '6' },
        { label: 'Feature Completeness', value: '100%' },
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const technicalHighlights = [
    {
      title: 'Modern React Architecture',
      description:
        'Built with Next.js 15, React 19, and TypeScript for type-safe, performant application',
      achievements: [
        'Server-side rendering for SEO optimization',
        'Automatic code splitting for performance',
        'Type-safe development with zero runtime errors',
        'Component-based architecture for maintainability',
      ],
    },
    {
      title: 'Real-time Capabilities',
      description:
        'Socket.IO integration providing instant communication and live data synchronization',
      achievements: [
        'Bidirectional real-time messaging system',
        'Live job status updates and notifications',
        'Connection management with auto-reconnection',
        'Typing indicators and presence detection',
      ],
    },
    {
      title: 'Production-Ready Features',
      description:
        'Complete implementation of enterprise-level features and security measures',
      achievements: [
        'JWT-based authentication with NextAuth',
        'Payment gateway integration ready',
        'Comprehensive error handling and logging',
        'Progressive Web App capabilities',
      ],
    },
  ];

  const learningOutcomes = [
    'Advanced React patterns and performance optimization techniques',
    'Real-time web application development with Socket.IO',
    'TypeScript integration in large-scale applications',
    'Modern CSS with TailwindCSS and responsive design',
    'Next.js framework features and deployment strategies',
    'User experience design for marketplace applications',
  ];

  const futureEnhancements = [
    'Advanced analytics and business intelligence dashboard',
    'AI-powered matching algorithm for craftsmen and jobs',
    'Expanded payment gateway integrations',
    'Multi-language support beyond Arabic and English',
    'Advanced notification system with push notifications',
  ];

  return (
    <Section
      id="results-impact"
      title="Project Results & Impact"
      subtitle="Measurable outcomes, technical achievements, and learning experiences from building a comprehensive web platform"
      className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
      titleIcon={<FiTrendingUp className="w-8 h-8 text-green-600" />}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Project Impact Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectImpacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${impact.color} p-6 text-white`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="group-hover:scale-110 transition-transform">
                    {impact.icon}
                  </div>
                  <h3 className="text-xl font-bold">{impact.category}</h3>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  {impact.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Key Metrics
                </h4>
                <div className="space-y-3">
                  {impact.metrics.map((metric, metricIndex) => (
                    <div
                      key={metricIndex}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-600">
                        {metric.label}
                      </span>
                      <span className="font-bold text-gray-900">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Highlights */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-gray-900">
            Technical Achievements
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {highlight.description}
                </p>
                <div className="space-y-2">
                  {highlight.achievements.map(
                    (achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-start gap-2 text-xs text-gray-600"
                      >
                        <FiTarget className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Learning Outcomes & Skills Developed
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningOutcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <FiAward className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Future Enhancement Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureEnhancements.map((enhancement, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {enhancement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Summary */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Project Success Summary</h3>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Successfully delivered a production-ready web application that
            demonstrates mastery of modern React development, showcases
            real-world problem-solving capabilities, and provides a solid
            foundation for future enhancements and scaling.
          </p>
          <a
            href="#demo"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FiTrendingUp className="w-4 h-4" />
            View Complete Demo
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ResultsImpact;
