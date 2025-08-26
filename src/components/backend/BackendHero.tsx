import React from 'react';
import {
  FiBookOpen,
  FiArrowRight,
  FiChevronDown,
  FiTerminal,
  FiZap,
  FiActivity,
  FiUsers,
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const BackendHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 px-6 py-20 w-full">
        <div className="mx-auto max-w-4xl text-center">
          {/* Clean Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-sm font-medium">
              <HiSparkles className="w-4 h-4 text-blue-400" />
              Complete Backend Architecture
            </span>
          </div>

          {/* Clean Title */}
          <h1 className="mb-6 text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block text-white mb-2">Herfa</span>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Backend System
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 leading-relaxed">
            A comprehensive TypeScript backend powering the complete Herfa
            ecosystem. Serving our web platform, mobile application, and admin
            dashboard with enterprise-grade security and real-time capabilities.
          </p>

          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              aria-label="View System Architecture"
            >
              <FiBookOpen className="w-4 h-4" />
              View Architecture
              <FiArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'API Endpoints', value: '80+', icon: FiTerminal },
              { label: 'Response Time', value: '<100ms', icon: FiZap },
              { label: 'Type Coverage', value: '100%', icon: FiActivity },
              { label: 'Platform Apps', value: '3', icon: FiUsers },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="p-4">
                  <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <FiChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendHero;
