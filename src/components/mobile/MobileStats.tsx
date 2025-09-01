import React from 'react';
import { FiTrendingUp, FiUsers, FiDownload, FiStar } from 'react-icons/fi';
import Section from '../ui/Section';

const MobileStats: React.FC = () => {
  return (
    <Section
      id="mobile-stats"
      title="App Performance & Adoption"
      subtitle="Key metrics showcasing the mobile app's success and user engagement"
      className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50"
      titleIcon={<FiTrendingUp className="w-8 h-8 text-purple-600" />}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Downloads */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <FiDownload className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Downloads</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              App Store & Play Store combined
            </div>
          </div>

          {/* Active Users */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <FiUsers className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">25K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">Monthly active users</div>
          </div>

          {/* Rating */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <FiStar className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">App Rating</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">Average user rating</div>
          </div>

          {/* User Satisfaction */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <FiTrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
            <div className="text-xs text-gray-500">User satisfaction rate</div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Platform Distribution
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Android</span>
                <span className="font-semibold text-gray-900">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: '65%' }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">iOS</span>
                <span className="font-semibold text-gray-900">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: '35%' }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              User Engagement
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Daily Active Users
                </span>
                <span className="font-semibold text-green-600">78%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Session Duration</span>
                <span className="font-semibold text-blue-600">12 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Screen Views</span>
                <span className="font-semibold text-purple-600">8.5 avg</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Performance Metrics
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">App Size</span>
                <span className="font-semibold text-gray-900">14.2 MB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Cold Start Time</span>
                <span className="font-semibold text-green-600">1.8s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Crash Rate</span>
                <span className="font-semibold text-red-600">0.1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MobileStats;
