import React from 'react';
import { Helmet } from 'react-helmet';
import {
  MobileHero,
  MobileDemo,
  MobileFeatures,
  MobileTechStack,
  MobileUI,
  MobileStats,
} from '../components/mobile';

const Mobile: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Herfa Mobile App - Flutter Cross-Platform | Herfa Gallery</title>
        <meta
          name="description"
          content="Explore Herfa's Flutter mobile app with real-time messaging, location services, and native performance. Cross-platform solution for iOS and Android with Arabic/English support."
        />
        <meta
          name="keywords"
          content="Flutter app, mobile application, cross-platform, iOS Android, real-time messaging, location services, Arabic RTL, craftsman marketplace, mobile development"
        />
        <link rel="canonical" href="https://herfa-g.netlify.app/mobile" />
        <meta
          property="og:title"
          content="Herfa Mobile App - Flutter Cross-Platform"
        />
        <meta
          property="og:description"
          content="Modern Flutter application with real-time features, location services, and native performance for the craftsman marketplace."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://herfa-g.netlify.app/mobile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Herfa Mobile App - Flutter Cross-Platform"
        />
        <meta
          name="twitter:description"
          content="Modern Flutter application with real-time features and native performance."
        />
      </Helmet>

      <main className="min-h-screen bg-gray-50">
        <MobileHero />
        <MobileDemo />
        <MobileFeatures />
        <MobileTechStack />
        <MobileUI />
        <MobileStats />
      </main>
    </>
  );
};

export default Mobile;
