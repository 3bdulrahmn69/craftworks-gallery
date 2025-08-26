import type React from 'react';
import { Platforms } from '../../data/Platform';
import PlatformCard from '../ui/PlatformCard';
import Section from '../ui/Section';

const PlatformTimeline: React.FC = () => {
  return (
    <Section
      title="Our Complete Ecosystem"
      subtitle="Discover each component of our comprehensive platform, from web to mobile to backend services."
      className="px-6 py-16 md:py-24"
      titleClassName="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl"
      subtitleClassName="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600"
      containerClassName="mx-auto max-w-6xl"
    >
      {/* Timeline */}
      <div className="space-y-16">
        {Platforms.map((platform, index) => (
          <PlatformCard key={platform.id} {...platform} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default PlatformTimeline;
