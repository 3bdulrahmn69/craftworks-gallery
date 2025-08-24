import { FiArrowRight, FiPlay, FiChevronDown } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const stats = [
  { number: '4', label: 'Platforms' },
  { number: '15+', label: 'Technologies' },
  { number: '2', label: 'Languages' },
];

const Hero = () => {
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
              Professional Craftsman Marketplace
            </span>
          </div>

          {/* Clean Title */}
          <h1 className="mb-6 text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block text-white mb-2">Welcome to</span>
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Herfa
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 leading-relaxed">
            A comprehensive ecosystem connecting clients with verified skilled
            craftsmen. Explore our complete platform including web application,
            mobile app, backend services, and admin dashboard.
          </p>

          {/* Clean CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href='#workflow' className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105">
              Explore Platform
              <FiArrowRight className="w-4 h-4" />
            </a>
            <button className="inline-flex items-center gap-2 px-8 py-3 border border-slate-300/30 hover:border-slate-300/50 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-white/5">
              <FiPlay className="w-4 h-4" />
              Watch Demo
            </button>
          </div>

          {/* Clean Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
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

export default Hero;
