import React from 'react';
import {
  FiSmartphone,
  FiLayout,
  FiEye,
  FiHeart,
  FiZap,
  FiTarget,
} from 'react-icons/fi';
import Section from '../ui/Section';

const MobileUI: React.FC = () => {
  const uiFeatures = [
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: 'Responsive Design',
      description:
        'Adaptive layouts that work perfectly across all screen sizes and orientations',
      highlights: [
        'Mobile-first approach',
        'Tablet optimization',
        'Landscape support',
      ],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <FiLayout className="w-6 h-6" />,
      title: 'Material Design',
      description:
        'Google Material Design implementation with consistent components and animations',
      highlights: [
        'Material Components',
        'Consistent theming',
        'Platform adaptation',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FiEye className="w-6 h-6" />,
      title: 'Accessibility First',
      description:
        'Comprehensive accessibility support with screen readers and assistive technologies',
      highlights: [
        'Screen reader support',
        'High contrast modes',
        'Touch target sizing',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: 'Intuitive UX',
      description:
        'User-centered design with clear navigation and seamless user flows',
      highlights: ['Clear navigation', 'Consistent patterns', 'User feedback'],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const designPrinciples = [
    {
      principle: 'Consistency',
      description:
        'Uniform design language across all screens and interactions',
      icon: <FiLayout className="w-6 h-6" />,
    },
    {
      principle: 'Simplicity',
      description:
        'Clean, uncluttered interface focusing on essential features',
      icon: <FiTarget className="w-6 h-6" />,
    },
    {
      principle: 'Performance',
      description:
        'Smooth animations and transitions for native-like experience',
      icon: <FiZap className="w-6 h-6" />,
    },
    {
      principle: 'Accessibility',
      description: 'Inclusive design that works for all users and abilities',
      icon: <FiEye className="w-6 h-6" />,
    },
  ];

  const localizationFeatures = [
    {
      language: 'Arabic (العربية)',
      features: [
        'RTL layout support',
        'Arabic typography',
        'Cultural adaptation',
      ],
      direction: 'RTL',
    },
    {
      language: 'English',
      features: [
        'LTR layout support',
        'Western typography',
        'Standard patterns',
      ],
      direction: 'LTR',
    },
  ];

  return (
    <Section
      id="mobile-ui"
      title="UI/UX Design"
      subtitle="Modern, accessible mobile interface with comprehensive localization and native performance"
      className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50"
      titleIcon={<FiLayout className="w-8 h-8 text-blue-600" />}
    >
      <div className="max-w-7xl mx-auto">
        {/* UI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {uiFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Design Principles */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Design Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPrinciples.map((principle, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {principle.principle}
                </h4>
                <p className="text-sm text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Localization Support */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Localization & Internationalization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localizationFeatures.map((lang, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">
                    {lang.language}
                  </h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {lang.direction}
                  </span>
                </div>
                <div className="space-y-2">
                  {lang.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-gray-600"
                    >
                      <FiZap className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              metric: 'UI Responsiveness',
              value: '60 FPS',
              description: 'Smooth animations and interactions',
            },
            {
              metric: 'Load Time',
              value: '< 2s',
              description: 'Fast screen transitions',
            },
            {
              metric: 'Memory Efficiency',
              value: '< 100MB',
              description: 'Optimized resource usage',
            },
          ].map((metric, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {metric.metric}
              </div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default MobileUI;
