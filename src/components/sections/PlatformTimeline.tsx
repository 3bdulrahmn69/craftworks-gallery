import { platforms } from '../../data';
import PlatformCard from '../ui/PlatformCard';

const ProjectTimeline = () => {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Complete Ecosystem
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Discover each component of our comprehensive platform, from web to
            mobile to backend services.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-16">
          {platforms.map((platform, index) => (
            <PlatformCard key={platform.id} {...platform} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
