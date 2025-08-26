import React from 'react';
import {
  FiAlertCircle,
  FiRefreshCw,
  FiAlertTriangle,
  FiActivity,
} from 'react-icons/fi';
import Section from '../ui/Section';

const ErrorHandling: React.FC = () => {
  const errorCodes = [
    {
      code: '400',
      title: 'Bad Request',
      description: 'Invalid parameters',
      color: 'bg-red-50 border-red-200',
      codeColor: 'bg-red-100 text-red-800',
    },
    {
      code: '401',
      title: 'Unauthorized',
      description: 'Invalid token',
      color: 'bg-orange-50 border-orange-200',
      codeColor: 'bg-orange-100 text-orange-800',
    },
    {
      code: '403',
      title: 'Forbidden',
      description: 'Access denied',
      color: 'bg-yellow-50 border-yellow-200',
      codeColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      code: '404',
      title: 'Not Found',
      description: 'Resource missing',
      color: 'bg-purple-50 border-purple-200',
      codeColor: 'bg-purple-100 text-purple-800',
    },
    {
      code: '429',
      title: 'Rate Limited',
      description: 'Too many requests',
      color: 'bg-indigo-50 border-indigo-200',
      codeColor: 'bg-indigo-100 text-indigo-800',
    },
    {
      code: '500',
      title: 'Server Error',
      description: 'Internal issue',
      color: 'bg-gray-50 border-gray-200',
      codeColor: 'bg-gray-100 text-gray-800',
    },
  ];

  const handlingStrategies = [
    {
      icon: FiRefreshCw,
      title: 'Retry Logic',
      description: 'Implement exponential backoff for 5xx errors',
      iconColor: 'text-blue-600',
    },
    {
      icon: FiAlertTriangle,
      title: 'Validation',
      description: 'Validate inputs before sending requests',
      iconColor: 'text-yellow-600',
    },
    {
      icon: FiActivity,
      title: 'Monitoring',
      description: 'Log errors with request IDs for debugging',
      iconColor: 'text-green-600',
    },
  ];

  const errorResponseExample = `{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Missing required field",
    "details": {
      "field": "email",
      "value": null,
      "expected": "string"
    },
    "timestamp": "2024-01-01T00:00:00Z",
    "requestId": "req_123abc456def"
  }
}`;

  return (
    <Section
      id="error-handling"
      title="Robust Error Handling"
      subtitle="Comprehensive error management ensuring reliable operation across all platform applications"
      className="py-16 px-6 bg-gradient-to-br from-red-50 to-pink-50"
      titleIcon={<FiAlertCircle className="w-8 h-8 text-red-600" />}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Common Error Codes */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Common Error Codes
          </h3>
          <div className="space-y-3">
            {errorCodes.map((error, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 ${error.color} rounded-lg border`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-sm ${error.codeColor} px-2 py-1 rounded`}
                  >
                    {error.code}
                  </span>
                  <span className="font-medium text-gray-900">
                    {error.title}
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  {error.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Error Response Format & Handling */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Error Response Format
          </h3>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-6">
            <pre className="text-sm text-green-400 font-mono">
              <code>{errorResponseExample}</code>
            </pre>
          </div>

          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            Handling Strategies
          </h4>
          <div className="space-y-3">
            {handlingStrategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <Icon
                    className={`w-5 h-5 ${strategy.iconColor} mt-0.5 flex-shrink-0`}
                  />
                  <div>
                    <h5 className="font-medium text-gray-900">
                      {strategy.title}
                    </h5>
                    <p className="text-sm text-gray-600">
                      {strategy.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ErrorHandling;
