import React from 'react';
import { FiLayout, FiSmartphone, FiMonitor, FiTablet } from 'react-icons/fi';
import Section from '../ui/Section';

const ResponsiveDesign: React.FC = () => {
  const deviceShowcase = [
    {
      device: 'Mobile',
      icon: <FiSmartphone className="w-8 h-8" />,
      description:
        'Optimized for iOS and Android devices with touch-first interactions',
      features: [
        'Touch-optimized UI',
        'Swipe gestures',
        'Mobile navigation',
        'Responsive grids',
      ],
      screenSize: '320px - 768px',
      usage: '75% of users',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      device: 'Tablet',
      icon: <FiTablet className="w-8 h-8" />,
      description:
        'Perfect balance between mobile convenience and desktop functionality',
      features: [
        'Adaptive layouts',
        'Enhanced UI elements',
        'Gesture support',
        'Multi-column views',
      ],
      screenSize: '768px - 1024px',
      usage: '15% of users',
      color: 'from-green-500 to-emerald-500',
    },
    {
      device: 'Desktop',
      icon: <FiMonitor className="w-8 h-8" />,
      description:
        'Full-featured experience with advanced functionality and workflows',
      features: [
        'Rich interactions',
        'Multi-panel layouts',
        'Keyboard shortcuts',
        'Advanced features',
      ],
      screenSize: '1024px+',
      usage: '10% of users',
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const responsiveFeatures = [
    'Fluid grid systems that adapt to any screen size',
    'Touch-friendly interface with appropriate tap targets',
    'Optimized images with lazy loading and compression',
    'Progressive web app capabilities for offline access',
    'Cross-browser compatibility across all modern browsers',
    'Consistent user experience across all device types',
  ];

  return (
    <Section
      id="responsive-design"
      title="Mobile-First Responsive Design"
      subtitle="Crafted to deliver exceptional user experience across all devices and screen sizes"
      className="py-16 px-6"
      titleIcon={<FiLayout className="w-8 h-8 text-blue-600" />}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Device Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {deviceShowcase.map((device, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${device.color} p-6 text-white`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="group-hover:scale-110 transition-transform">
                    {device.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{device.device}</h3>
                    <div className="text-sm opacity-90">{device.usage}</div>
                  </div>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  {device.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Screen Size
                  </h4>
                  <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                    {device.screenSize}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {device.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Features */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Responsive Implementation Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {responsiveFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-sm leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Technical Implementation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <FiLayout className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                CSS Grid & Flexbox
              </h4>
              <p className="text-sm text-gray-600">
                Modern layout systems for complex responsive designs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <FiSmartphone className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                TailwindCSS Utilities
              </h4>
              <p className="text-sm text-gray-600">
                Utility-first approach with responsive modifiers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <FiMonitor className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                Breakpoint Strategy
              </h4>
              <p className="text-sm text-gray-600">
                Strategic breakpoints for optimal user experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ResponsiveDesign;
