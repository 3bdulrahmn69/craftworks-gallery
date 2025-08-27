import React from 'react';
import { FiPlay, FiExternalLink, FiYoutube } from 'react-icons/fi';
import Section from '../ui/Section';

const PlatformDemo: React.FC = () => {
  return (
    <Section
      id="demo"
      title="Platform Demo"
      subtitle="Watch our comprehensive demo showcasing all features and functionality of the Herfa web platform"
      className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50"
      titleIcon={<FiPlay className="w-8 h-8 text-purple-600" />}
    >
      <div className="max-w-4xl mx-auto">
        {/* Demo Video Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative aspect-video bg-gray-900">
            <iframe
              src="https://www.youtube.com/embed/z3gZKqGWiPM"
              title="Herfa Web Platform Demo"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Demo Info */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Complete Platform Walkthrough
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This comprehensive demo showcases all the key features of our
                  web platform, including user registration, job posting,
                  real-time chat, payment processing, and the complete user
                  journey from both client and craftsman perspectives.
                </p>
              </div>
              <a
                href="https://youtu.be/z3gZKqGWiPM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
                aria-label="Watch on YouTube"
              >
                <FiYoutube className="w-4 h-4" />
                YouTube
                <FiExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Demo Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">
                  User Experience
                </h4>
                <p className="text-blue-700 text-sm">
                  Complete registration flow, profile management, and intuitive
                  navigation
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">
                  Core Features
                </h4>
                <p className="text-green-700 text-sm">
                  Job posting, search & filtering, real-time chat, and payment
                  system
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-2">
                  Live Demo
                </h4>
                <p className="text-purple-700 text-sm">
                  Real interactions, responsive design, and smooth user
                  workflows
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Features List */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
            What You'll See in the Demo
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  User registration and authentication
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  Job creation with image uploads
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  Advanced search and filtering
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  Real-time messaging system
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  Profile and portfolio management
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  Quote submission and management
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  Payment processing workflow
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">
                  Responsive design across devices
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PlatformDemo;
