import React from 'react';
import {
  Hero,
  WorkflowSection,
  PlatformTimeline,
  FeaturesGrid,
  TeamSection,
  Footer,
} from '../components/sections';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Herfa - Professional Craftsman Marketplace | Connect with Verified
          Skilled Artisans
        </title>
        <meta
          name="description"
          content="Discover Herfa, the leading marketplace for connecting clients with verified skilled craftsmen. Features secure authentication, real-time messaging, escrow payments, and comprehensive job management across web, mobile, and admin platforms."
        />
        <meta
          name="keywords"
          content="craftsman marketplace, skilled artisans, professional handyman, contractor services, home improvement, verified craftsmen, secure payments, real-time messaging, job management, mobile app, web platform, admin dashboard"
        />
        <link rel="canonical" href="https://herfa-g.netlify.app" />
      </Helmet>

      <main className="min-h-screen bg-gray-50">
        <Hero />
        <WorkflowSection />
        <PlatformTimeline />
        <FeaturesGrid />
        <TeamSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
