import React from 'react';
import {
  FiMonitor,
  FiSmartphone,
  FiSettings,
  FiDatabase,
  FiCheck,
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import Section from '../ui/Section';

const PlatformEcosystem: React.FC = () => {
  // Custom styles for animation delays
  const animationStyles = `
    .animation-delay-200 {
      animation-delay: 0.2s;
    }
    .animation-delay-400 {
      animation-delay: 0.4s;
    }
    .animation-delay-500 {
      animation-delay: 0.5s;
    }
  `;

  const platforms = [
    {
      icon: FiMonitor,
      title: 'Web Platform',
      description:
        'React-based web application providing full marketplace functionality',
      features: [
        'Responsive design for all devices',
        'Real-time chat integration',
        'Advanced job search and filtering',
        'Comprehensive user dashboards',
      ],
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Application',
      description: 'Flutter mobile app for iOS and Android platforms',
      features: [
        'Native mobile experience',
        'Push notifications',
        'Location-based services',
        'Offline capability',
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
    },
    {
      icon: FiSettings,
      title: 'Admin Dashboard',
      description: 'Comprehensive admin panel for platform management',
      features: [
        'User management and verification',
        'Payment processing oversight',
        'Analytics and reporting',
        'Content moderation tools',
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
    },
  ];

  const systemBenefits = [
    {
      icon: FiDatabase,
      title: 'Unified Data Layer',
      description:
        'Single source of truth ensuring consistency across all platforms',
    },
    {
      icon: HiSparkles,
      title: 'Seamless Synchronization',
      description:
        'Real-time updates reflected instantly across web, mobile, and admin',
    },
    {
      icon: FiCheck,
      title: 'Consistent Business Logic',
      description:
        'Same validation, authentication, and workflows across all interfaces',
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <Section
        id="platform-ecosystem"
        title="Complete Platform Ecosystem"
        subtitle="One powerful backend serving multiple client applications with unified functionality"
        className="py-16 px-6 bg-gradient-to-br from-gray-50 to-indigo-50"
        titleIcon={<FiDatabase className="w-8 h-8 text-indigo-600" />}
      >
        {/* Platform Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className={`p-6 ${platform.bgColor}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${platform.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${platform.textColor}`}>
                      {platform.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                <div className="p-6">
                  <div className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className="p-1 bg-green-100 rounded-full">
                          <FiCheck className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Benefits */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why One Backend for Everything?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systemBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Enhanced Data Flow Visualization */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              Real-time Data Synchronization
            </h4>

            {/* Simplified Central Database with Connected Platforms */}
            <div className="flex flex-col items-center space-y-8">
              {/* Top Row - Web and Mobile */}
              <div className="flex items-center justify-center space-x-16 md:space-x-32">
                {/* Web Platform */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <FiMonitor className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-gray-700">
                      Web Platform
                    </span>
                    <p className="text-xs text-gray-500">React App</p>
                  </div>
                </div>

                {/* Mobile App */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <FiSmartphone className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-200"></div>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-gray-700">
                      Mobile App
                    </span>
                    <p className="text-xs text-gray-500">Flutter</p>
                  </div>
                </div>
              </div>

              {/* Connection Lines to Database */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-0 border-t-2 border-blue-300 border-dashed"></div>
                <div className="w-8 h-0 border-t-2 border-gray-300"></div>
                <div className="w-16 h-0 border-t-2 border-green-300 border-dashed"></div>
              </div>

              {/* Central Database */}
              <div className="text-center">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <FiDatabase className="w-12 h-12 text-white" />
                  </div>
                  {/* Animated rings around database */}
                  <div className="absolute inset-0 -m-4 border-2 border-indigo-200 rounded-full animate-ping opacity-25"></div>
                  <div className="absolute inset-0 -m-8 border-2 border-purple-200 rounded-full animate-ping opacity-20"></div>
                </div>
                <div className="mt-3">
                  <span className="text-lg font-bold text-gray-900">
                    MongoDB
                  </span>
                  <p className="text-xs text-gray-600">Central Database</p>
                </div>
              </div>

              {/* Connection Line to Admin */}
              <div className="w-0 h-8 border-l-2 border-purple-300 border-dashed"></div>

              {/* Admin Dashboard */}
              <div className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <FiSettings className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-400"></div>
                </div>
                <div className="mt-2">
                  <span className="text-sm font-medium text-gray-700">
                    Admin Panel
                  </span>
                  <p className="text-xs text-gray-500">Management</p>
                </div>
              </div>
            </div>

            {/* Real-time Sync Examples */}
            <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
              <h5 className="text-md font-semibold text-gray-900 mb-4 text-center">
                Live Synchronization Examples
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-blue-700">
                      Job Creation
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs">
                    Client posts job on web → Instantly visible on mobile app
                    and admin dashboard
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-green-700">
                      Real-time Chat
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs">
                    Message sent from mobile → Real-time delivery to web chat
                    and admin monitoring
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-purple-700">
                      Admin Actions
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs">
                    Admin verifies user → Status updates instantly across all
                    platforms
                  </p>
                </div>
              </div>
            </div>

            {/* Database-Centric Architecture Explanation */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Database-Centric Architecture
              </h5>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h6 className="font-medium text-gray-900 mb-3">
                    Single Source of Truth
                  </h6>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        All user data, job postings, and messages stored in one
                        central MongoDB database
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        No data duplication or inconsistencies between platforms
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Instant data synchronization through Socket.IO and REST
                        APIs
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-medium text-gray-900 mb-3">
                    Real-time Updates
                  </h6>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <FiDatabase className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Database changes trigger real-time notifications to all
                        connected platforms
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiDatabase className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Socket.IO events ensure immediate UI updates across web
                        and mobile
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiDatabase className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Admin actions reflect instantly on user-facing
                        applications
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PlatformEcosystem;
