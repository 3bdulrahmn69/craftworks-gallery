import React from 'react';
import type { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  Icon: IconType;
  color: string;
  route: string;
  index: number;
}

const PlatformCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  features,
  techStack,
  Icon,
  color,
  route,
  index,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(route);
  };

  const isEven = index % 2 === 0;

  return (
    <div className="flex items-center gap-8 lg:gap-16">
      {/* Timeline Connector */}
      <div className="flex flex-col items-center">
        <button
          onClick={handleCardClick}
          className="flex h-16 w-16 items-center justify-center text-white rounded-full border-4 border-white text-2xl shadow-lg transition-transform duration-300 hover:scale-110"
          style={{ backgroundColor: color }}
        >
          {<Icon />}
        </button>
        <div className="mt-4 h-24 w-0.5 bg-gray-300 last:hidden lg:h-32" />
      </div>

      {/* Project Card */}
      <div
        className={`group flex-1 cursor-pointer rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
          isEven ? 'lg:mr-32' : 'lg:ml-32'
        }`}
        onClick={handleCardClick}
      >
        {/* Header */}
        <div className="mb-6 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex-1">
            <h3 className="mb-2 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="font-medium text-gray-600">{subtitle}</p>
          </div>
          <div
            className="flex h-16 w-16 items-center justify-center rounded-xl text-2xl"
            style={{ backgroundColor: `${color}20`, color }}
          >
            {<Icon />}
          </div>
        </div>

        {/* Description */}
        <p className="mb-8 leading-relaxed text-gray-700">{description}</p>

        {/* Features */}
        <div className="mb-8">
          <h4 className="mb-4 text-lg font-semibold text-gray-900">
            Key Features
          </h4>
          <div className="grid gap-3 md:grid-cols-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
              >
                <span className="mt-0.5 text-green-500">✓</span>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="mb-4 text-lg font-semibold text-gray-900">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-all hover:bg-gray-200 hover:shadow-sm"
                style={{ borderLeft: `3px solid ${color}` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Click indicator */}
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600 opacity-0 transition-all group-hover:opacity-100">
          <span>Click to explore</span>
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
