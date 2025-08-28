import React from 'react';
import { Helmet } from 'react-helmet';
import {
  WebsiteHero,
  ProjectOverview,
  WebsiteFeaturesGrid,
  ResponsiveDesign,
  RealTimeFeatures,
  WebsiteArchitecture,
  DevelopmentProcess,
  WebsiteTechStack,
  UserExperience,
  PlatformDemo,
  WebsiteShowcase,
  ResultsImpact,
} from '../components/website';

const Website: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Herfa Web Platform - Next.js Frontend Showcase | Herfa Gallery
        </title>
        <meta
          name="description"
          content="Explore Herfa's modern Next.js web platform featuring real-time messaging, responsive design, and advanced React development. Complete frontend showcase with TypeScript, Socket.IO, and production-ready architecture."
        />
        <meta
          name="keywords"
          content="Next.js platform, React frontend, real-time messaging, responsive design, TypeScript, Socket.IO, web development, craftsman marketplace, modern web application"
        />
        <link rel="canonical" href="https://herfa-g.netlify.app/website" />
      </Helmet>

      <main className="min-h-screen bg-gray-50">
        <WebsiteHero />
        <ProjectOverview />
        <WebsiteFeaturesGrid />
        <ResponsiveDesign />
        <RealTimeFeatures />
        <WebsiteArchitecture />
        <DevelopmentProcess />
        <UserExperience />
        <PlatformDemo />
        <WebsiteTechStack />
        <WebsiteShowcase />
        <ResultsImpact />
      </main>
    </>
  );
};

export default Website;
