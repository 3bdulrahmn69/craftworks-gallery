import React from 'react';
import {
  FiSmartphone,
  FiZap,
  FiEye,
  FiHeart,
  FiCheckCircle,
  FiStar,
  FiTrendingUp,
  FiUsers,
  FiShield,
  FiThumbsUp,
  FiAward,
} from 'react-icons/fi';
import Section from '../ui/Section';

const UserExperience: React.FC = () => {
  const uxFeatures = [
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: 'Mobile-First Design',
      description: 'Responsive design that works perfectly on all devices',
      metrics: ['100% Responsive', 'Touch Optimized'],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Optimized performance for instant user interactions',
      metrics: ['<2s Load Time', 'Instant Search', 'Lazy Loading'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FiEye className="w-6 h-6" />,
      title: 'Intuitive Interface',
      description: 'Clean, modern design with excellent usability',
      metrics: ['A+ UX Score', 'Accessibility', 'User-Friendly'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: 'User-Centered',
      description: 'Designed based on real user feedback and testing',
      metrics: ['User Tested', 'Feedback Driven', 'Continuously Improved'],
      color: 'from-pink-500 to-red-500',
    },
  ];

  const userJourney = [
    {
      step: '1',
      title: 'Registration',
      description: 'Simple, secure account creation',
      icon: '👤',
    },
    {
      step: '2',
      title: 'Profile Setup',
      description: 'Complete profile with portfolio',
      icon: '📝',
    },
    {
      step: '3',
      title: 'Browse & Search',
      description: 'Find services or post jobs',
      icon: '🔍',
    },
    {
      step: '4',
      title: 'Connect',
      description: 'Chat with clients/craftsmen',
      icon: '💬',
    },
    {
      step: '5',
      title: 'Collaborate',
      description: 'Work together on projects',
      icon: '🤝',
    },
    {
      step: '6',
      title: 'Complete',
      description: 'Finish and rate the experience',
      icon: '⭐',
    },
  ];

  const accessibilityFeatures = [
    {
      icon: <FiEye className="w-5 h-5" />,
      title: 'Visual Accessibility',
      description:
        'High contrast modes, large text options, and color-blind friendly design',
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      title: 'Screen Reader Support',
      description:
        'Full ARIA labels and semantic HTML for assistive technologies',
    },
    {
      icon: <FiSmartphone className="w-5 h-5" />,
      title: 'Touch Accessibility',
      description: 'Large touch targets and gesture-based navigation',
    },
    {
      icon: <FiShield className="w-5 h-5" />,
      title: 'Cognitive Support',
      description:
        'Clear navigation, consistent patterns, and error prevention',
    },
  ];

  const userFeedback = [
    {
      rating: 5,
      comment:
        'The interface is so intuitive and easy to use. I was able to find the perfect craftsman for my project within minutes!',
      author: 'Sarah Ahmed',
      role: 'Cairo Client',
      avatar: '👩‍💼',
    },
    {
      rating: 5,
      comment:
        'As a carpenter, this platform has made managing my business so much easier. The calendar and messaging features are fantastic!',
      author: 'Mohamed Hassan',
      role: 'Carpenter',
      avatar: '👨‍🔧',
    },
    {
      rating: 5,
      comment:
        'The mobile app works perfectly on my phone. I can manage everything on the go - posting jobs, chatting, and tracking progress.',
      author: 'Fatima Ali',
      role: 'Alexandria Client',
      avatar: '👩‍💻',
    },
  ];

  const performanceMetrics = [
    {
      label: 'Page Load Time',
      value: '<2s',
      icon: <FiZap className="w-5 h-5" />,
      color: 'text-yellow-600',
    },
    {
      label: 'Mobile Responsiveness',
      value: '100%',
      icon: <FiSmartphone className="w-5 h-5" />,
      color: 'text-blue-600',
    },
    {
      label: 'User Satisfaction',
      value: '98%',
      icon: <FiThumbsUp className="w-5 h-5" />,
      color: 'text-green-600',
    },
    {
      label: 'Accessibility Score',
      value: 'A+',
      icon: <FiAward className="w-5 h-5" />,
      color: 'text-indigo-600',
    },
    {
      label: 'Return Users',
      value: '85%',
      icon: <FiTrendingUp className="w-5 h-5" />,
      color: 'text-purple-600',
    },
  ];

  return (
    <Section
      id="user-experience"
      title="Exceptional User Experience"
      subtitle="Carefully crafted interface designed for both clients and craftsmen with focus on usability and efficiency"
      className="py-16 px-6"
      titleIcon={<FiHeart className="w-8 h-8 text-pink-600" />}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* UX Features Grid - Fixed Responsive Issues */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {uxFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 mb-4 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="space-y-2">
                {feature.metrics.map((metric, metricIndex) => (
                  <div
                    key={metricIndex}
                    className="flex items-center gap-2 text-xs text-gray-500"
                  >
                    <FiCheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Platform Performance Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className={metric.color}>{metric.icon}</div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Journey - Fixed Responsive Layout */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            User Journey
          </h3>

          {/* Mobile Layout (Vertical) */}
          <div className="block lg:hidden space-y-6">
            {userJourney.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {step.step}
                  </div>
                  <div className="absolute -top-1 -right-1 text-lg">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < userJourney.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-6 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Layout (Horizontal) */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-4">
            {userJourney.map((step, index) => (
              <div key={index} className="text-center group relative">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-600">{step.description}</p>
                {index < userJourney.length - 1 && (
                  <div className="absolute top-8 left-full w-4 h-0.5 bg-blue-200 transform -translate-x-2 hidden xl:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Accessibility & Inclusion
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* User Testimonials - Enhanced */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userFeedback.map((feedback, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{feedback.avatar}</div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-1">
                      {[...Array(feedback.rating)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      {feedback.author} • {feedback.role}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed italic">
                  "{feedback.comment}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Experience the Difference</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied users who have discovered the perfect
            balance of functionality, performance, and user experience in our
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FiZap className="w-4 h-4" />
              Watch Demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-700 border-2 border-blue-500 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              <FiEye className="w-4 h-4" />
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default UserExperience;
