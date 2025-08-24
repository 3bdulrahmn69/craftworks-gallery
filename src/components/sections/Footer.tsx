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

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { name: 'Web Application', href: '/website', icon: FiGlobe },
    { name: 'Mobile App', href: '/mobile', icon: FiSmartphone },
    { name: 'Backend API', href: '/server', icon: FiServer },
    { name: 'Admin Dashboard', href: '/dashboard', icon: RiAdminLine },
  ];

  const features = [
    { name: 'Job Management', icon: FiBriefcase },
    { name: 'Real-Time Chat', icon: FiMessageCircle },
    { name: 'Secure Payments', icon: FiCreditCard },
    { name: 'Multi-Platform', icon: FiGitBranch },
    { name: 'Quality Assured', icon: FiCheckCircle },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div>
            <h3 className="mb-4 text-3xl font-bold text-blue-400">Herfa</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional Craftsman Marketplace connecting clients with
              verified skilled craftsmen.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Key Features
            </h4>
            <ul className="space-y-3">
              {features.slice(0, 4).map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center text-gray-300">
                    <Icon className="w-4 h-4 mr-3 text-blue-400" />
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
            &copy; {currentYear} Herfa. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">
              Contact
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
