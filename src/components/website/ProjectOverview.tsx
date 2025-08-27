import React from 'react';
import { FiCode, FiGithub, FiTrendingUp, FiUsers } from 'react-icons/fi';
import Section from '../ui/Section';

const ProjectOverview: React.FC = () => {
  const projectStats = [
    {
      value: '10,000+',
      label: 'Lines of Code',
      description: 'Next.js TypeScript codebase',
      icon: <FiCode className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      value: '80+',
      label: 'Components',
      description: 'Reusable React components',
      icon: <FiUsers className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
    },
    {
      value: '15+',
      label: 'Page Routes',
      description: 'Complete user journeys',
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      value: '100%',
      label: 'TypeScript',
      description: 'Type-safe development',
      icon: <FiGithub className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const keyAchievements = [
    {
      title: 'Modern Architecture',
      description:
        'Built with Next.js 15.3.5, React 19, and TypeScript 5.0 for cutting-edge performance and developer experience.',
    },
    {
      title: 'Real-World Solution',
      description:
        'Addresses genuine market need in Egypt by connecting skilled craftsmen with clients through digital innovation.',
    },
    {
      title: 'User-Centric Design',
      description:
        'Extensively researched user flows and interface patterns to create intuitive experiences for both client and craftsman personas.',
    },
    {
      title: 'Production Ready',
      description:
        'Complete implementation with authentication, real-time features, payment integration, and comprehensive error handling.',
    },
  ];

  return (
    <Section
      id="project-overview"
      title="Herfa Web Platform"
      subtitle="A comprehensive Next.js marketplace connecting Egyptian clients with skilled craftsmen through modern web technologies"
      className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {projectStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
              >
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Project Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What We Built
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyAchievements.map((achievement, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-lg font-semibold text-blue-600">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            To revolutionize how Egyptians connect with skilled craftsmen by
            creating a digital ecosystem that empowers both service providers
            and clients through technology, trust, and seamless user
            experiences.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ProjectOverview;
