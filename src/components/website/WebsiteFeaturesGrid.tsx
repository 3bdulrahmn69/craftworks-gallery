import React from 'react';
import {
  FiUsers,
  FiMessageSquare,
  FiSearch,
  FiCreditCard,
  FiCalendar,
  FiMapPin,
  FiCamera,
  FiShield,
  FiStar,
  FiBell,
  FiFilter,
  FiSmartphone,
} from 'react-icons/fi';
import Section from '../ui/Section';

const WebsiteFeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Authentication System',
      description:
        'Next.js NextAuth implementation with JWT tokens, role-based access control, and secure session management for clients and craftsmen.',
      tags: ['NextAuth', 'JWT Tokens', 'RBAC'],
    },
    {
      icon: <FiMessageSquare className="w-6 h-6" />,
      title: 'Socket.IO Integration',
      description:
        'Real-time bidirectional communication using Socket.IO with message persistence, typing indicators, and connection management.',
      tags: ['Socket.IO', 'Real-time', 'WebSocket'],
    },
    {
      icon: <FiSearch className="w-6 h-6" />,
      title: 'Dynamic Search & Filtering',
      description:
        'React-based search implementation with debounced queries, location filtering, and dynamic result updates without page refresh.',
      tags: ['React Hooks', 'Debounced', 'Dynamic'],
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: 'Payment System',
      description:
        'Secure payment processing with multiple payment methods, escrow protection, and automated invoicing.',
      tags: ['Secure Payments', 'Escrow', 'Invoicing'],
    },
    {
      icon: <FiCalendar className="w-6 h-6" />,
      title: 'Appointment System',
      description:
        'Built-in calendar for scheduling consultations, project timelines, and automated reminder notifications.',
      tags: ['Scheduling', 'Calendar', 'Reminders'],
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location Services',
      description:
        'GPS integration for location-based job matching, distance calculations, and area-specific service discovery.',
      tags: ['GPS', 'Geolocation', 'Mapping'],
    },
    {
      icon: <FiCamera className="w-6 h-6" />,
      title: 'Media Management',
      description:
        'Image and video upload system with compression, galleries, and before/after project documentation.',
      tags: ['Image Upload', 'Galleries', 'Documentation'],
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Security & Privacy',
      description:
        'End-to-end encryption, data protection, secure file transfers, and GDPR compliance measures.',
      tags: ['Encryption', 'Data Protection', 'GDPR'],
    },
    {
      icon: <FiStar className="w-6 h-6" />,
      title: 'Rating & Reviews',
      description:
        'Comprehensive review system with star ratings, photo reviews, and verified customer feedback.',
      tags: ['Reviews', 'Ratings', 'Verification'],
    },
    {
      icon: <FiBell className="w-6 h-6" />,
      title: 'Notifications',
      description:
        'Real-time push notifications for job updates, messages, payments, and important platform events.',
      tags: ['Push Notifications', 'Updates', 'Alerts'],
    },
    {
      icon: <FiFilter className="w-6 h-6" />,
      title: 'Job Management',
      description:
        'Complete job lifecycle management from posting to completion with status tracking and milestones.',
      tags: ['Job Tracking', 'Milestones', 'Status'],
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: 'Responsive Design',
      description:
        'Fully responsive interface optimized for all devices with progressive web app capabilities.',
      tags: ['Mobile-First', 'Cross-Platform'],
    },
  ];

  return (
    <Section
      id="features"
      title="Platform Features & Capabilities"
      subtitle="Comprehensive feature set showcasing modern web development practices and real-world application functionality"
      className="py-16 px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:scale-105"
          >
            {/* Icon */}
            <div className="mb-6 text-4xl transition-transform duration-300 group-hover:scale-110 text-blue-600">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="leading-relaxed text-gray-600 mb-4">
              {feature.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {feature.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WebsiteFeaturesGrid;
