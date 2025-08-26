import type React from 'react';
import FeatureCard from '../ui/FeatureCard';
import Section from '../ui/Section';

const features = [
  {
    icon: '🔐',
    title: 'Secure Authentication',
    description:
      'Multi-login support with role-based access control and verification system.',
  },
  {
    icon: '💬',
    title: 'Real-Time Messaging',
    description:
      'Instant communication between clients and craftsmen with image sharing.',
  },
  {
    icon: '💼',
    title: 'Job Management',
    description:
      'Complete job lifecycle from posting to completion with quote system.',
  },
  {
    icon: '💳',
    title: 'Secure Payments',
    description:
      'Escrow payment system with wallet integration and withdrawal requests.',
  },
  {
    icon: '🌍',
    title: 'Multilingual Support',
    description:
      'Full Arabic and English support with RTL/LTR layout switching.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description:
      'Comprehensive analytics and reporting for platform management.',
  },
];

const FeaturesGrid: React.FC = () => {
  const title = (
    <>
      Core <span className="text-blue-600">Craftsman Platform</span> Features
    </>
  );

  const subtitle = (
    <>
      Comprehensive <strong>marketplace features</strong> designed to provide
      the best experience for both <strong>clients seeking craftsmen</strong>{' '}
      and <strong>professional artisans</strong>. From{' '}
      <strong>secure authentication</strong> to{' '}
      <strong>real-time messaging</strong> and{' '}
      <strong>payment processing</strong>.
    </>
  );

  return (
    <Section
      title={title}
      subtitle={subtitle}
      className="px-6 py-16 md:py-24"
      titleClassName="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl"
      subtitleClassName="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600"
      containerClassName="mx-auto max-w-6xl"
      ariaLabelledBy="features-title"
    >
      {/* Features Grid */}
      <div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label="List of platform features"
      >
        {features.map((feature, index) => (
          <div key={index} role="listitem">
            <FeatureCard feature={feature} />
          </div>
        ))}
      </div>

      {/* Additional Feature Benefits */}
      <div className="mt-16 text-center">
        <p className="text-sm text-gray-500 leading-relaxed">
          All features are built with <strong>security</strong>,{' '}
          <strong>scalability</strong>, and
          <strong> user experience</strong> in mind, supporting both{' '}
          <strong>Arabic and English</strong> languages for the{' '}
          <strong>MENA region marketplace</strong>.
        </p>
      </div>
    </Section>
  );
};

export default FeaturesGrid;
