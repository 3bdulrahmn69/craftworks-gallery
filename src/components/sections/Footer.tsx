import React from 'react';
import {
  FiGlobe,
  FiSmartphone,
  FiServer,
  FiBriefcase,
  FiMessageCircle,
  FiCreditCard,
  FiGitBranch,
  FiCheckCircle,
} from 'react-icons/fi';
import { RiAdminLine } from 'react-icons/ri';
import { Link } from 'react-router';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    {
      name: 'Web Application',
      href: '/website',
      icon: FiGlobe,
      description: 'Responsive web platform for craftsman marketplace',
    },
    {
      name: 'Mobile App',
      href: '/mobile',
      icon: FiSmartphone,
      description: 'iOS and Android apps for craftsmen and clients',
    },
    {
      name: 'Backend API',
      href: '/backend',
      icon: FiServer,
      description: 'Robust API backend with secure authentication',
    },
    {
      name: 'Admin Dashboard',
      href: '/dashboard',
      icon: RiAdminLine,
      description: 'Comprehensive admin panel for platform management',
    },
  ];

  const features = [
    {
      name: 'Job Management',
      icon: FiBriefcase,
      description: 'Complete job lifecycle management',
    },
    {
      name: 'Real-Time Chat',
      icon: FiMessageCircle,
      description: 'Instant messaging between clients and craftsmen',
    },
    {
      name: 'Secure Payments',
      icon: FiCreditCard,
      description: 'Escrow payment system with wallet integration',
    },
    {
      name: 'Multi-Platform',
      icon: FiGitBranch,
      description: 'Cross-platform compatibility',
    },
    {
      name: 'Quality Assured',
      icon: FiCheckCircle,
      description: 'Verified craftsmen with rating system',
    },
  ];

  return (
    <footer
      className="bg-gray-900 text-white"
      role="contentinfo"
      aria-label="Footer with site navigation and information"
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <h3 className="mb-4 text-3xl font-bold text-blue-400">Herfa</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              <strong>Professional Craftsman Marketplace</strong> connecting
              clients with
              <strong> verified skilled artisans</strong>. Secure platform for
              <strong> home improvement</strong>, <strong>repairs</strong>, and
              <strong> custom craftsmanship services</strong> in{' '}
              <strong>Egypt</strong>.
            </p>

            {/* SEO Keywords Section */}
            <div className="text-xs text-gray-400 leading-relaxed">
              <p>
                <strong>Services:</strong> Home repairs, Custom furniture,
                Electrical work, Plumbing, Carpentry, Painting, Interior design,
                Handyman services
              </p>
            </div>
          </div>

          {/* Platform Links */}
          <nav aria-label="Platform navigation">
            <h4 className="mb-6 text-lg font-semibold text-white">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                      aria-label={item.description}
                      title={item.description}
                    >
                      <Icon className="w-4 h-4 mr-3" aria-hidden="true" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Features */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Key Features
            </h4>
            <ul
              className="space-y-3"
              role="list"
              aria-label="Platform key features"
            >
              {features.slice(0, 4).map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={index}
                    className="flex items-center text-gray-300"
                    title={item.description}
                  >
                    <Icon
                      className="w-4 h-4 mr-3 text-blue-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} <strong>Herfa Craftsman Marketplace</strong>.
            All rights reserved.
          </p>
          <nav
            className="flex items-center space-x-6 text-sm"
            aria-label="Legal and contact links"
          >
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              aria-label="Privacy Policy for Herfa platform"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              aria-label="Terms of Service for craftsman marketplace"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              aria-label="Contact Herfa support team"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
