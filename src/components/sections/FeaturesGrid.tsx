import FeatureCard from '../ui/FeatureCard';

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

const FeaturesGrid = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Core Platform Features
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Comprehensive features designed to provide the best experience for
            both clients and craftsmen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
