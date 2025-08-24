import React from 'react';
import Hero from '../components/sections/Hero';
import WorkflowSection from '../components/sections/WorkflowSection';
import ProjectTimeline from '../components/sections/PlatformTimeline';
import FeaturesGrid from '../components/sections/FeaturesGrid';
import TeamSection from '../components/sections/TeamSection';
import Footer from '../components/sections/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <WorkflowSection />
      <ProjectTimeline />
      <FeaturesGrid />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Home;
