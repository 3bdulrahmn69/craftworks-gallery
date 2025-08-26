import React from 'react';
import {
  FiUsers,
  FiMessageCircle,
  FiDollarSign,
  FiShield,
  FiZap,
  FiCheck,
  FiStar,
  FiTrendingUp,
} from 'react-icons/fi';
import Section from '../ui/Section';

const ProjectHighlights: React.FC = () => {
  const keyFeatures = [
    {
      icon: FiUsers,
      title: 'Multi-Role Authentication',
      description:
        'Comprehensive user management supporting clients, craftsmen, moderators, and administrators',
      stats: '4 User Types',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: FiMessageCircle,
      title: 'Real-time Communication',
      description:
        'Socket.IO powered messaging system with typing indicators and file sharing',
      stats: 'Live Messaging',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiDollarSign,
      title: 'Smart Payment System',
      description:
        'Dynamic fee calculation with progressive rates based on craftsman experience',
      stats: '0%-5% Fees',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description:
        'JWT authentication, role-based access control, and comprehensive audit logging',
      stats: '100% Secure',
      color: 'from-red-500 to-orange-500',
    },
  ];

  const technicalSpecs = [
    {
      label: 'API Endpoints',
      value: '80+',
      description: 'Comprehensive coverage',
    },
    {
      label: 'Response Time',
      value: '<100ms',
      description: 'Lightning fast',
    },
    {
      label: 'Type Coverage',
      value: '100%',
      description: 'Fully typed TypeScript',
    },
    {
      label: 'Documentation',
      value: 'Complete',
      description: 'Detailed API docs',
    },
  ];

  const achievements = [
    {
      icon: FiStar,
      title: 'Production Ready',
      description: 'Battle-tested architecture ready for deployment',
    },
    {
      icon: FiZap,
      title: 'High Performance',
      description: 'Optimized for speed and scalability',
    },
    {
      icon: FiTrendingUp,
      title: 'Scalable Design',
      description: 'Built to grow with your business needs',
    },
  ];

  return (
    <Section
      id="project-highlights"
      title="Project Highlights"
      subtitle="Showcasing the comprehensive features and technical excellence of the Herfa backend system"
      className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50"
    >
      {/* Key Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {keyFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 bg-gradient-to-r ${feature.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Technical Specifications */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Technical Specifications
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technicalSpecs.map((spec, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-1">
                {spec.value}
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">
                {spec.label}
              </div>
              <div className="text-xs text-gray-500">{spec.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Call-to-Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Complete Backend Solution</h3>
          <p className="text-lg text-indigo-100 mb-6 max-w-2xl mx-auto">
            The Herfa backend represents a comprehensive solution for modern
            marketplace applications, combining performance, security, and
            scalability in one robust system.
          </p>
          <div className="flex items-center justify-center gap-2 text-indigo-200">
            <FiCheck className="w-5 h-5" />
            <span>Ready for production deployment</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectHighlights;
