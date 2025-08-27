import React from 'react';
import {
  FiGitBranch,
  FiCode,
  FiCheck,
  FiPackage,
  FiMonitor,
  FiUsers,
} from 'react-icons/fi';
import Section from '../ui/Section';

const DevelopmentProcess: React.FC = () => {
  const developmentPhases = [
    {
      phase: 'Planning & Research',
      icon: <FiUsers className="w-6 h-6" />,
      description:
        'Market research, user persona definition, and technical architecture planning',
      activities: [
        'Egyptian market analysis for craftsman services',
        'User journey mapping for clients and craftsmen',
        'Technology stack evaluation and selection',
        'Database schema design and API planning',
      ],
      deliverables: [
        'Technical Requirements',
        'User Stories',
        'System Architecture',
      ],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      phase: 'Design & Prototyping',
      icon: <FiMonitor className="w-6 h-6" />,
      description:
        'UI/UX design, component library creation, and responsive design systems',
      activities: [
        'Wireframing and user flow design',
        'Component library development',
        'Responsive design implementation',
        'Accessibility compliance planning',
      ],
      deliverables: [
        'Design System',
        'Component Library',
        'Responsive Layouts',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      phase: 'Development',
      icon: <FiCode className="w-6 h-6" />,
      description:
        'Feature implementation using modern React patterns and TypeScript',
      activities: [
        'Next.js application setup with TypeScript',
        'Authentication system implementation',
        'Real-time messaging with Socket.IO',
        'Payment gateway integration',
      ],
      deliverables: ['Core Features', 'Authentication', 'Real-time Systems'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      phase: 'Testing & Quality',
      icon: <FiCheck className="w-6 h-6" />,
      description:
        'Comprehensive testing, performance optimization, and code quality assurance',
      activities: [
        'Unit testing with React Testing Library',
        'Integration testing for API endpoints',
        'Performance optimization and monitoring',
        'Cross-browser compatibility testing',
      ],
      deliverables: ['Test Coverage', 'Performance Reports', 'Quality Metrics'],
      color: 'from-orange-500 to-red-500',
    },
    {
      phase: 'Deployment',
      icon: <FiPackage className="w-6 h-6" />,
      description:
        'Production deployment, monitoring setup, and continuous integration',
      activities: [
        'Vercel deployment configuration',
        'Environment variable management',
        'Performance monitoring setup',
        'CI/CD pipeline establishment',
      ],
      deliverables: [
        'Production App',
        'Monitoring Dashboard',
        'CI/CD Pipeline',
      ],
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const technicalChoices = [
    {
      decision: 'Next.js Framework',
      rationale:
        'Server-side rendering, automatic code splitting, and excellent developer experience',
      benefits: [
        'SEO optimization',
        'Fast page loads',
        'Built-in optimization',
      ],
    },
    {
      decision: 'TypeScript Integration',
      rationale: 'Type safety, better IDE support, and reduced runtime errors',
      benefits: [
        'Compile-time error detection',
        'Enhanced IntelliSense',
        'Better refactoring',
      ],
    },
    {
      decision: 'TailwindCSS Styling',
      rationale:
        'Utility-first approach, consistent design system, and rapid development',
      benefits: [
        'Responsive design utilities',
        'Consistent spacing',
        'Small bundle size',
      ],
    },
    {
      decision: 'Socket.IO Communication',
      rationale:
        'Real-time bidirectional communication with fallback mechanisms',
      benefits: ['Instant messaging', 'Connection reliability'],
    },
  ];

  const qualityMetrics = [
    {
      metric: 'TypeScript Coverage',
      value: '100%',
      description: 'Complete type safety',
    },
    {
      metric: 'Component Reusability',
      value: '85%',
      description: 'Modular architecture',
    },
    {
      metric: 'Performance Score',
      value: '95+',
      description: 'Lighthouse metrics',
    },
    {
      metric: 'Accessibility Score',
      value: 'A+',
      description: 'WCAG compliance',
    },
  ];

  return (
    <Section
      id="development-process"
      title="Development Methodology"
      subtitle="Systematic approach to building a modern, scalable web application with best practices and quality assurance"
      className="py-16 px-6"
      titleIcon={<FiGitBranch className="w-8 h-8 text-purple-600" />}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Development Phases */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Development Phases
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {developmentPhases.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-r ${phase.color} p-6 text-white`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="group-hover:scale-110 transition-transform">
                      {phase.icon}
                    </div>
                    <h4 className="text-lg font-bold">{phase.phase}</h4>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">
                      Key Activities
                    </h5>
                    <div className="space-y-1">
                      {phase.activities.map((activity, activityIndex) => (
                        <div
                          key={activityIndex}
                          className="flex items-start gap-2 text-xs text-gray-600"
                        >
                          <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">
                      Deliverables
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {phase.deliverables.map(
                        (deliverable, deliverableIndex) => (
                          <span
                            key={deliverableIndex}
                            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
                          >
                            {deliverable}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Decisions */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Technical Decision Rationale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalChoices.map((choice, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-gray-900 mb-2">
                  {choice.decision}
                </h4>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {choice.rationale}
                </p>
                <div className="space-y-1">
                  {choice.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Metrics */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Quality & Performance Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1 text-sm">
                  {metric.metric}
                </div>
                <div className="text-xs text-gray-500">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DevelopmentProcess;
