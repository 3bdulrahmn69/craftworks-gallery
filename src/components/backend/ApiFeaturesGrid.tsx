import React from 'react';
import {
  FiShield,
  FiZap,
  FiMessageCircle,
  FiDollarSign,
  FiUsers,
  FiBarChart,
  FiCheck,
} from 'react-icons/fi';
import Section from '../ui/Section';

const ApiFeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description:
        'Multi-layered security with JWT authentication, role-based access control, and comprehensive audit logging for all platform interactions.',
      highlights: [
        'Role-based permissions (Client/Craftsman/Admin)',
        'Secure file uploads with validation',
        'Complete action audit trails',
      ],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: FiZap,
      title: 'High Performance Architecture',
      description:
        'TypeScript-powered backend with optimized database queries and efficient caching for lightning-fast response times.',
      highlights: [
        'Sub-100ms API response times',
        'MongoDB optimization with indexing',
        'Efficient file handling with Cloudinary',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiMessageCircle,
      title: 'Real-time Communication',
      description:
        'Socket.IO powered messaging system enabling instant communication between clients and craftsmen across all platforms.',
      highlights: [
        'Instant messaging with typing indicators',
        'File sharing capabilities',
        'Cross-platform synchronization',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiDollarSign,
      title: 'Advanced Payment System',
      description:
        'Sophisticated wallet and payment management with dynamic fee structure based on craftsman experience and job completion history.',
      highlights: [
        'Progressive fee calculation (0%-5%)',
        'Secure wallet management',
        'Automated payment processing',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiUsers,
      title: 'Comprehensive User Management',
      description:
        'Complete user lifecycle management with verification systems, profile management, and seamless onboarding across platforms.',
      highlights: [
        'Multi-platform user synchronization',
        'Document verification with file uploads',
        'Profile and portfolio management',
      ],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: FiBarChart,
      title: 'System Analytics & Monitoring',
      description:
        'Built-in analytics and monitoring systems providing insights into platform usage, performance metrics, and user behavior.',
      highlights: [
        'Real-time system monitoring',
        'User behavior analytics',
        'Performance optimization tracking',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <Section
      title="System Architecture Features"
      subtitle="Core components powering the complete Herfa marketplace ecosystem"
      className="py-16 px-6 bg-white"
      titleIcon={<FiBarChart className="w-8 h-8 text-green-600" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-4 bg-gradient-to-r ${feature.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {feature.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-3">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center gap-3">
                    <div className="p-1 bg-green-100 rounded-full">
                      <FiCheck className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default ApiFeaturesGrid;
