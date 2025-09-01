import React from 'react';
import {
  FiUsers,
  FiMessageSquare,
  FiMapPin,
  FiBell,
  FiCamera,
  FiCalendar,
  FiGlobe,
  FiShield,
  FiStar,
  FiTrendingUp,
} from 'react-icons/fi';
import Section from '../ui/Section';

const MobileFeatures: React.FC = () => {
  const features = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Dual User Experience',
      description:
        'Seamless experience for both clients and craftsmen with role-specific interfaces and workflows.',
      details: [
        'Client job posting',
        'Craftsman profiles',
        'Role-based navigation',
      ],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <FiMessageSquare className="w-6 h-6" />,
      title: 'Real-time Chat',
      description:
        'Integrated messaging system for direct communication between clients and craftsmen.',
      details: ['In-app messaging', 'Real-time updates', 'Chat history'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location Services',
      description:
        'Advanced geolocation features for job location tracking and local service discovery.',
      details: [
        'GPS integration',
        'Location-based search',
        'Service area mapping',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FiBell className="w-6 h-6" />,
      title: 'Smart Notifications',
      description:
        'Intelligent notification system keeping users informed about job updates and opportunities.',
      details: ['Push notifications', 'Job alerts', 'Status updates'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <FiCamera className="w-6 h-6" />,
      title: 'Media Uploads',
      description:
        'Rich media support for job photos, portfolio images, and project documentation.',
      details: ['Photo uploads', 'Gallery integration', 'Image optimization'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: <FiCalendar className="w-6 h-6" />,
      title: 'Smart Scheduling',
      description:
        'Integrated calendar system for job scheduling, availability management, and timeline tracking.',
      details: ['Job scheduling', 'Availability calendar', 'Timeline tracking'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: 'Localization',
      description:
        'Full Arabic and English support with RTL/LTR layouts and cultural adaptation.',
      details: ['Arabic & English', 'RTL/LTR support', 'Cultural adaptation'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Secure Platform',
      description:
        'Enterprise-grade security with authentication, data protection, and secure API communication.',
      details: ['Secure authentication', 'Data encryption', 'API security'],
      color: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <Section
      id="mobile-features"
      title="Core Features"
      subtitle="Comprehensive mobile experience with modern Flutter development and native performance"
      className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50"
      titleIcon={<FiTrendingUp className="w-8 h-8 text-blue-600" />}
    >
      <div className="max-w-7xl mx-auto">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 mb-4 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Details */}
              <div className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className="flex items-center gap-2 text-xs text-gray-500"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* User Journey */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            User Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Post or Browse',
                description:
                  'Clients post jobs with photos and location, craftsmen browse opportunities',
                icon: <FiUsers className="w-6 h-6" />,
              },
              {
                step: '2',
                title: 'Connect & Communicate',
                description:
                  'Real-time messaging and proposal system for seamless collaboration',
                icon: <FiMessageSquare className="w-6 h-6" />,
              },
              {
                step: '3',
                title: 'Complete & Rate',
                description:
                  'Track progress, complete jobs, and build reputation with ratings',
                icon: <FiStar className="w-6 h-6" />,
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
                  {step.icon}
                </div>
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MobileFeatures;
