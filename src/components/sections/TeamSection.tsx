import { FiUsers, FiCode, FiGlobe, FiStar } from 'react-icons/fi';
import TeamCard from '../ui/TeamCard';
import { platforms, TeamMembers } from '../../data';

const TeamSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Meet the talented individuals behind the Herfa platform.
          </p>
        </div>

        {/* Team Grid with Enhanced Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
          {TeamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-16 border-t border-gray-200">
          <div>
            <div className="flex flex-col items-center p-6 rounded-xl ">
              <FiUsers className="w-10 h-10 text-blue-600 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {TeamMembers.length}+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                Team Members
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center p-6 rounded-xl ">
              <FiGlobe className="w-10 h-10 text-green-600 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {platforms.length}+
              </div>
              <div className="text-gray-600 text-sm font-medium">Platforms</div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center p-6 rounded-xl ">
              <FiCode className="w-10 h-10 text-purple-600 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600 text-sm font-medium">
                Technologies
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center p-6 rounded-xl">
              <FiStar className="w-10 h-10 text-orange-600 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 text-sm font-medium">
                Commitment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
