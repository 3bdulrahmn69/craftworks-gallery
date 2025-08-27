import React from 'react';
import {
  FiCode,
  FiSmartphone,
  FiZap,
  FiShield,
  FiUsers,
  FiTrendingUp,
} from 'react-icons/fi';
import Section from '../ui/Section';

const WebsiteShowcase: React.FC = () => {
  const showcaseItems = [
    {
      title: 'Modern React Architecture',
      description:
        'Built with React 18, TypeScript, and modern development practices for maintainable and scalable code.',
      icon: <FiCode className="w-8 h-8" />,
      features: ['React 18', 'TypeScript', 'Vite Build', 'ESLint'],
      color: 'from-blue-500 to-indigo-600',
      image: '💻',
    },
    {
      title: 'Responsive Design',
      description:
        'Fully responsive interface that works seamlessly across all devices and screen sizes.',
      icon: <FiSmartphone className="w-8 h-8" />,
      features: ['Mobile-First', 'Tablet Optimized', 'Desktop Ready'],
      color: 'from-green-500 to-emerald-600',
      image: '📱',
    },
    {
      title: 'Performance Optimized',
      description:
        'Lightning-fast loading times with optimized bundle sizes and smart caching strategies.',
      icon: <FiZap className="w-8 h-8" />,
      features: [
        '<2s Load Time',
        'Code Splitting',
        'Lazy Loading',
        'Optimized Images',
      ],
      color: 'from-yellow-500 to-orange-600',
      image: '⚡',
    },
    {
      title: 'Secure & Reliable',
      description:
        'Enterprise-grade security with JWT authentication, data encryption, and secure API communication.',
      icon: <FiShield className="w-8 h-8" />,
      features: ['JWT Auth', 'HTTPS', 'Data Encryption', 'Secure APIs'],
      color: 'from-red-500 to-pink-600',
      image: '🔒',
    },
    {
      title: 'User-Centric Design',
      description:
        'Intuitive interface designed with user experience as the top priority, tested with real users.',
      icon: <FiUsers className="w-8 h-8" />,
      features: [
        'User Testing',
        'Accessibility',
        'Intuitive UI',
        'Feedback-Driven',
      ],
      color: 'from-purple-500 to-indigo-600',
      image: '👥',
    },
    {
      title: 'Scalable Solution',
      description:
        'Built to scale with modular architecture, component reusability, and efficient state management.',
      icon: <FiTrendingUp className="w-8 h-8" />,
      features: [
        'Modular Code',
        'Reusable Components',
        'Efficient State',
        'Future-Ready',
      ],
      color: 'from-teal-500 to-cyan-600',
      image: '📈',
    },
  ];

  return (
    <Section
      id="showcase"
      title="Platform Showcase"
      subtitle="Discover the key strengths and features that make our web platform exceptional"
      className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Header */}
              <div
                className={`h-24 bg-gradient-to-r ${item.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative h-full flex items-center justify-between px-6">
                  <div className="text-white">{item.icon}</div>
                  <div className="text-4xl">{item.image}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div
                className={`h-1 bg-gradient-to-r ${item.color} group-hover:h-2 transition-all duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Platform?
            </h3>
            <p className="text-gray-600 mb-6">
              Watch our comprehensive demo to see all these features in action
              and discover how our platform connects clients with skilled
              craftsmen.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FiZap className="w-4 h-4" />
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WebsiteShowcase;
