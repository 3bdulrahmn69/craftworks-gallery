import React from 'react';
import { Helmet } from 'react-helmet';
import {
  BackendHero,
  ApiPerformanceStats,
  PlatformEcosystem,
  TechnologyStack,
  ApiFeaturesGrid,
  ApiArchitecture,
  ProjectHighlights,
  IntegrationExamples,
  ErrorHandling,
  ApiDocumentation,
  EnhancedCTA,
} from '../components/backend';

const Backend: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Herfa Backend System - Complete Architecture | Herfa Gallery
        </title>
        <meta
          name="description"
          content="Explore Herfa's comprehensive backend system powering our complete ecosystem. TypeScript-based architecture serving web platform, mobile app, and admin dashboard with enterprise-grade security and real-time capabilities."
        />
        <meta
          name="keywords"
          content="backend system, TypeScript, Node.js, MongoDB, real-time messaging, payment processing, multi-platform architecture, craftsman marketplace"
        />
        <link rel="canonical" href="https://herfa-g.netlify.app/backend" />

        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/3bdulrahmn69/craftworks-gallery/refs/heads/main/public/backend.png"
        />

        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/3bdulrahmn69/craftworks-gallery/refs/heads/main/public/backend.png"
        />
      </Helmet>

      <main>
        <BackendHero />
        <ApiPerformanceStats />
        <PlatformEcosystem />
        <TechnologyStack />
        <ApiFeaturesGrid />
        <ApiArchitecture />
        <ProjectHighlights />
        <ApiDocumentation />
        <IntegrationExamples />
        <ErrorHandling />
        <EnhancedCTA />
      </main>
    </>
  );
};

export default Backend;
