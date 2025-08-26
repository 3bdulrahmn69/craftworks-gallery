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
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Herfa - Professional Craftsman Marketplace',
    url: 'https://herfa-g.netlify.app',
    description:
      'Professional marketplace connecting clients with verified skilled craftsmen for home improvement, repairs, and custom projects',
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://herfa-g.netlify.app',
      },
    ],
  };

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

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Herfa - Professional Craftsman Marketplace | Connect with Verified Skilled Artisans"
        />
        <meta
          property="og:description"
          content="Discover Herfa, the leading marketplace for connecting clients with verified skilled craftsmen. Secure payments, real-time messaging, and comprehensive job management."
        />
        <meta property="og:url" content="https://herfa-g.netlify.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta
          name="twitter:title"
          content="Herfa - Professional Craftsman Marketplace"
        />
        <meta
          name="twitter:description"
          content="Connect with verified skilled craftsmen through Herfa's comprehensive platform. Secure payments and streamlined job management."
        />

        {/* Additional SEO */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="MENA" />
        <meta name="geo.placename" content="Middle East" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
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
