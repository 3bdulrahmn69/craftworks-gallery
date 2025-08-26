import React from 'react';
import {
  FiCopy,
  FiTerminal,
  FiCode,
  FiFolder,
  FiGlobe,
  FiLock,
  FiServer,
  FiBookOpen,
  FiCheck,
  FiPackage,
  FiTag,
  FiTrendingUp,
  FiTool,
  FiMonitor,
} from 'react-icons/fi';
import { HiBadgeCheck } from 'react-icons/hi';
import Section from '../ui/Section';

// Import the API routes data
import apiRoutes from '../../data/apiRoutes';

// Types for API route structure
interface ApiRoute {
  method: string;
  path: string;
  description: string;
  category: string;
  requiresAuth: boolean;
  parameters?: string[];
}

interface ApiCategory {
  title: string;
  description: string;
  baseUrl: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  totalEndpoints: number;
  routes: ApiRoute[];
}

// Component for individual API route card
interface ApiRouteProps {
  route: ApiRoute;
  baseUrl: string;
  copyToClipboard: (text: string) => void;
  getMethodColor: (method: string) => string;
}

const ApiRouteCard: React.FC<ApiRouteProps> = ({
  route,
  baseUrl,
  copyToClipboard,
  getMethodColor,
}) => (
  <div
    className="group/route bg-gray-50 hover:bg-gray-100 rounded-xl p-3 md:p-4 transition-all duration-200 border border-gray-200 hover:border-gray-300 hover:shadow-md"
    role="article"
    aria-label={`${route.method} ${route.path} endpoint`}
  >
    {/* Method and Path - Enhanced Mobile Layout */}
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-3">
      <div className="flex items-center gap-2 flex-shrink-0">
        <span
          className={`px-2 py-1 rounded-md text-xs font-bold border-2 ${getMethodColor(
            route.method
          )} flex-shrink-0`}
          role="status"
          aria-label={`HTTP ${route.method} method`}
        >
          {route.method}
        </span>
        <button
          onClick={() => copyToClipboard(`${baseUrl}${route.path}`)}
          className="opacity-0 group-hover/route:opacity-100 p-1 hover:bg-gray-200 rounded-md transition-all"
          aria-label={`Copy ${route.method} ${route.path} endpoint URL`}
        >
          <FiCopy className="w-3 h-3" />
        </button>
      </div>

      <div className="flex-1 min-w-0">
        <code className="text-sm font-mono text-gray-700 break-all leading-relaxed">
          {baseUrl}
          <span className="font-bold text-blue-600">{route.path}</span>
        </code>
      </div>
    </div>

    {/* Description */}
    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
      {route.description}
    </p>

    {/* Enhanced Tags with Better Mobile Layout */}
    <div className="flex flex-wrap gap-2 text-xs mb-3">
      <span
        className={`px-2 py-1 rounded-full border flex items-center gap-1 ${
          route.requiresAuth
            ? 'bg-red-50 text-red-700 border-red-200'
            : 'bg-green-50 text-green-700 border-green-200'
        }`}
        role="status"
        aria-label={
          route.requiresAuth ? 'Authentication required' : 'Public endpoint'
        }
      >
        {route.requiresAuth ? (
          <FiLock className="w-3 h-3" />
        ) : (
          <FiGlobe className="w-3 h-3" />
        )}
        {route.requiresAuth ? 'Auth Required' : 'Public'}
      </span>
      <span
        className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full flex items-center gap-1"
        role="status"
      >
        <FiFolder className="w-3 h-3" />
        {route.category}
      </span>
      <span
        className="px-2 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full flex items-center gap-1"
        role="status"
      >
        <FiServer className="w-3 h-3" />
        REST
      </span>
    </div>

    {/* Enhanced Parameters Section */}
    {route.parameters && route.parameters.length > 0 && (
      <div className="mt-3 p-3 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <FiCode className="w-4 h-4 text-gray-500" />
          <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
            Parameters ({route.parameters.length})
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {route.parameters.map((param, paramIdx) => (
            <div key={paramIdx} className="flex items-center gap-2">
              <code className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded border">
                {param}
              </code>
              {paramIdx < 3 && (
                <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                  <FiCheck className="w-3 h-3" />
                  required
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    )}

    {/* New: Example Usage Hint */}
    <div className="mt-3 p-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
      <div className="flex items-center gap-2 text-xs text-blue-700">
        <FiBookOpen className="w-3 h-3" />
        <span className="font-medium">Available in Postman Collection</span>
        <span className="ml-auto px-2 py-0.5 bg-blue-100 rounded text-blue-800 font-mono">
          {route.category.toLowerCase().replace(/\s+/g, '-')}
        </span>
      </div>
    </div>
  </div>
);

// Component for API category section
interface ApiCategoryProps {
  categoryKey: string;
  category: ApiCategory;
  copyToClipboard: (text: string) => void;
  getMethodColor: (method: string) => string;
}

const ApiCategoryCard: React.FC<ApiCategoryProps> = ({
  categoryKey,
  category,
  copyToClipboard,
  getMethodColor,
}) => {
  const Icon = category.icon;

  return (
    <div
      className="break-inside-avoid bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
      role="article"
      aria-labelledby={`category-${categoryKey}-title`}
    >
      {/* Enhanced Header with Better Mobile Layout */}
      <div
        className={`bg-gradient-to-r ${category.color} p-4 md:p-6 text-white`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3
                id={`category-${categoryKey}-title`}
                className="text-xl md:text-2xl font-bold truncate"
              >
                {category.title}
              </h3>
              <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <FiPackage className="w-3 h-3" />
              {category.totalEndpoints} endpoints
            </div>
            <div className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <FiTag className="w-3 h-3" />
              v2.1
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center text-sm">
            <FiTerminal className="w-4 h-4 mr-2 flex-shrink-0" />
            <code className="bg-white/20 px-2 py-1 rounded font-mono text-xs break-all">
              {category.baseUrl}
            </code>
          </div>
          <button
            onClick={() => copyToClipboard(category.baseUrl)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors self-start sm:self-auto"
            aria-label={`Copy base URL for ${category.title}`}
          >
            <FiCopy className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Enhanced Routes Section with Better Mobile Layout */}
      <div className="p-4 md:p-6">
        <div className="space-y-3">
          {category.routes.map((route, idx) => (
            <ApiRouteCard
              key={idx}
              route={route}
              baseUrl={category.baseUrl}
              copyToClipboard={copyToClipboard}
              getMethodColor={getMethodColor}
            />
          ))}
        </div>

        {/* Enhanced Category Summary */}
        <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <FiTrendingUp className="w-3 h-3" />
                <strong>{category.routes.length}</strong> endpoints
              </span>
              <span className="flex items-center gap-1">
                <FiTool className="w-3 h-3" />
                <strong>TypeScript</strong> ready
              </span>
              <span className="flex items-center gap-1">
                <FiMonitor className="w-3 h-3" />
                <strong>Mobile</strong> optimized
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded flex items-center gap-1">
                <HiBadgeCheck className="w-3 h-3" />
                Production Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ApiDocumentation: React.FC = () => {
  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case 'GET':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'POST':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'PUT':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'PATCH':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'DELETE':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Section
      id="api-docs"
      title="Complete API Documentation"
      subtitle="Comprehensive documentation of all 80+ API endpoints with detailed descriptions"
      className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50"
      containerClassName="max-w-7xl mx-auto"
    >
      {/* Enhanced Responsive Masonry Layout for API Routes */}
      <div className="columns-1 md:columns-1 lg:columns-2 xl:columns-2 gap-6 space-y-6">
        {Object.entries(apiRoutes).map(([key, category]) => (
          <ApiCategoryCard
            key={key}
            categoryKey={key}
            category={category as ApiCategory}
            copyToClipboard={copyToClipboard}
            getMethodColor={getMethodColor}
          />
        ))}
      </div>
    </Section>
  );
};

export default ApiDocumentation;
