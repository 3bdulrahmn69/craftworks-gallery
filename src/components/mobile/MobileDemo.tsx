import React from 'react';
import { FiPlay, FiYoutube } from 'react-icons/fi';
import Section from '../ui/Section';

const MobileDemo: React.FC = () => {
  return (
    <Section
      id="mobile-demo"
      title="App Demo"
      subtitle="See Herfa in action - real-time messaging, location services, and seamless user experience"
      className="py-16 px-6 bg-gradient-to-br from-red-50 to-pink-50"
      titleIcon={<FiPlay className="w-8 h-8 text-red-600" />}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Video Header */}
          <div className="p-6 bg-gradient-to-r from-red-500 to-pink-500 text-white">
            <div className="flex items-center gap-3 mb-2">
              <FiYoutube className="w-6 h-6" />
              <h3 className="text-xl font-bold">Live Demo</h3>
            </div>
            <p className="text-red-100">
              Experience the Herfa mobile app's real-time features and intuitive
              interface
            </p>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video bg-gray-900">
            <iframe
              src="https://www.youtube.com/embed/NiX0kHM8ShM"
              title="Herfa Mobile App Demo"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <div className="p-6 bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Herfa Mobile App Showcase
                </h4>
                <p className="text-sm text-gray-600">
                  Watch how clients and craftsmen connect through our innovative
                  platform
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Duration</div>
                <div className="font-medium text-gray-900">Short Demo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Demo Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mb-4">
              <FiPlay className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Real-time Features
            </h4>
            <p className="text-sm text-gray-600">
              See live messaging and location tracking in action
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
              <FiPlay className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              User Experience
            </h4>
            <p className="text-sm text-gray-600">
              Experience the intuitive interface and smooth navigation
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4">
              <FiPlay className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Cross-Platform</h4>
            <p className="text-sm text-gray-600">
              Watch the same app running seamlessly on different devices
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MobileDemo;
