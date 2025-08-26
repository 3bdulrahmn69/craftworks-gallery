import React from 'react';
import { FiTrendingUp, FiDatabase, FiShield, FiZap } from 'react-icons/fi';
import Section from '../ui/Section';

const ApiPerformanceStats: React.FC = () => {
  return (
    <Section
      id="api-stats"
      title="System Architecture & Performance"
      subtitle="Technical specifications showcasing our platform's robust infrastructure"
      className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50"
      titleIcon={<FiTrendingUp className="w-8 h-8 text-purple-600" />}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <FiZap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            Enterprise-grade reliability
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <FiTrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">&lt;100ms</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
          </div>
          <div className="text-xs text-gray-500">Optimized performance</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <FiDatabase className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">80+</div>
              <div className="text-sm text-gray-600">API Endpoints</div>
            </div>
          </div>
          <div className="text-xs text-gray-500">Comprehensive coverage</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <FiShield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">TypeScript</div>
            </div>
          </div>
          <div className="text-xs text-gray-500">Type-safe architecture</div>
        </div>
      </div>
    </Section>
  );
};

export default ApiPerformanceStats;
