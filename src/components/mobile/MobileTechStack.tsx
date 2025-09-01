import React from 'react';
import {
  FiLayers,
  FiSmartphone,
  FiCode,
  FiDatabase,
  FiMonitor,
} from 'react-icons/fi';
import Section from '../ui/Section';

const MobileTechStack: React.FC = () => {
  const techCategories = [
    {
      category: 'Core Framework',
      icon: <FiSmartphone className="w-6 h-6" />,
      technologies: [
        {
          name: 'Flutter 3.x',
          description: 'Cross-platform framework',
          status: 'Primary',
        },
        { name: 'Dart', description: 'Programming language', status: 'Core' },
        {
          name: 'Material Design',
          description: 'UI component library',
          status: 'UI',
        },
      ],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      category: 'State & Architecture',
      icon: <FiLayers className="w-6 h-6" />,
      technologies: [
        { name: 'Provider', description: 'State management', status: 'State' },
        {
          name: 'Flutter Bloc',
          description: 'Business logic',
          status: 'Architecture',
        },
        { name: 'Riverpod', description: 'Reactive state', status: 'State' },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Networking & APIs',
      icon: <FiCode className="w-6 h-6" />,
      technologies: [
        { name: 'HTTP', description: 'REST API client', status: 'Network' },
        { name: 'Dio', description: 'Advanced HTTP client', status: 'Network' },
        {
          name: 'Socket.IO Client',
          description: 'Real-time communication',
          status: 'Real-time',
        },
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Shared Backend Services',
      icon: <FiDatabase className="w-6 h-6" />,
      technologies: [
        {
          name: 'MongoDB',
          description: 'Shared database for all platforms',
          status: 'Database',
        },
        {
          name: 'Cloudinary',
          description: 'Unified image storage & processing',
          status: 'Media',
        },
        {
          name: 'Express.js API',
          description: 'Common REST API for web & mobile',
          status: 'Backend',
        },
        {
          name: 'Socket.IO',
          description: 'Real-time communication across platforms',
          status: 'Real-time',
        },
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Local Storage',
      icon: <FiDatabase className="w-6 h-6" />,
      technologies: [
        {
          name: 'Shared Preferences',
          description: 'Local app settings & cache',
          status: 'Storage',
        },
      ],
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const specializedPackages = [
    {
      name: 'Location & Maps',
      packages: [
        'geolocator',
        'flutter_map',
        'latlong2',
        'google_maps_flutter',
      ],
      description: 'GPS tracking and interactive maps',
    },
    {
      name: 'Media & Camera',
      packages: [
        'image_picker',
        'camera',
        'flutter_image_compress',
        'photo_manager',
      ],
      description: 'Photo capture and media management',
    },
    {
      name: 'Notifications',
      packages: [
        'flutter_local_notifications',
        'firebase_messaging',
        'awesome_notifications',
      ],
      description: 'Push notifications and alerts',
    },
    {
      name: 'UI & Animations',
      packages: [
        'flutter_animate',
        'flutter_svg',
        'cached_network_image',
        'shimmer',
      ],
      description: 'Modern UI components and animations',
    },
    {
      name: 'Internationalization',
      packages: ['intl', 'flutter_localizations', 'easy_localization'],
      description: 'Multi-language support',
    },
    {
      name: 'Utilities',
      packages: [
        'path_provider',
        'permission_handler',
        'device_info_plus',
        'package_info_plus',
      ],
      description: 'Device and system utilities',
    },
  ];

  return (
    <Section
      id="mobile-tech-stack"
      title="Technology Stack"
      subtitle="Modern Flutter development with comprehensive package ecosystem and native performance"
      className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50"
      titleIcon={<FiLayers className="w-8 h-8 text-blue-600" />}
    >
      <div className="max-w-7xl mx-auto">
        {/* Unified Architecture Overview */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Unified Platform Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
                <FiSmartphone className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Mobile App</h4>
              <p className="text-sm text-gray-600">Flutter iOS/Android</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white">
                <FiMonitor className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Web Platform</h4>
              <p className="text-sm text-gray-600">Next.js React</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                <FiLayers className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Admin Dashboard
              </h4>
              <p className="text-sm text-gray-600">React Management</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full">
              <FiDatabase className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">
                All platforms share the same backend
              </span>
            </div>
          </div>
        </div>

        {/* Core Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {tech.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {tech.description}
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        tech.status === 'Primary'
                          ? 'bg-blue-100 text-blue-800'
                          : tech.status === 'Core'
                          ? 'bg-green-100 text-green-800'
                          : tech.status === 'State'
                          ? 'bg-purple-100 text-purple-800'
                          : tech.status === 'Network'
                          ? 'bg-orange-100 text-orange-800'
                          : tech.status === 'Real-time'
                          ? 'bg-red-100 text-red-800'
                          : tech.status === 'UI'
                          ? 'bg-indigo-100 text-indigo-800'
                          : tech.status === 'Architecture'
                          ? 'bg-teal-100 text-teal-800'
                          : tech.status === 'Storage'
                          ? 'bg-pink-100 text-pink-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {tech.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Packages */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Specialized Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedPackages.map((group, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {group.name}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {group.description}
                </p>
                <div className="space-y-1">
                  {group.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkgIndex}
                      className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-700"
                    >
                      {pkg}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              label: 'App Size',
              value: '< 15MB',
              description: 'Optimized bundle',
            },
            {
              label: 'Cold Start',
              value: '< 2s',
              description: 'Fast launch time',
            },
            {
              label: 'Memory Usage',
              value: '< 100MB',
              description: 'Efficient memory',
            },
            {
              label: 'Battery Impact',
              value: 'Minimal',
              description: 'Power optimized',
            },
          ].map((metric, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center"
            >
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default MobileTechStack;
