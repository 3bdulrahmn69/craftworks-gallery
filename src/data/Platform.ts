import type { Platform } from '../types';
import { RiAdminLine } from 'react-icons/ri';
import { FiGlobe, FiServer, FiSmartphone } from 'react-icons/fi';

export const Platforms: Platform[] = [
  {
    id: 'website',
    title: 'Herfa Web Platform',
    subtitle: 'Professional Craftsman Marketplace',
    description:
      'A comprehensive digital platform that connects clients with verified skilled craftsmen across various trades and services. Built with Next.js and modern web technologies.',
    features: [
      'Dual Registration System for Clients & Craftsmen',
      'Real-Time Messaging with Socket.IO',
      'Job Management & Quote System',
      'Bilingual Support (Arabic & English)',
      'Calendar & Scheduling Integration',
      'Dark/Light Theme Support',
    ],
    techStack: [
      'Next.js 15',
      'TypeScript',
      'React 19',
      'TailwindCSS 4',
      'NextAuth',
      'Socket.IO',
    ],
    Icon: FiGlobe,
    color: '#2563eb',
    route: '/website',
  },
  {
    id: 'mobile',
    title: 'Herfa Mobile App',
    subtitle: 'Cross-Platform Flutter Application',
    description:
      'Official mobile application providing seamless experience for both clients and craftsmen. Built with Flutter for iOS and Android platforms.',
    features: [
      'Cross-Platform Compatibility',
      'Location Services & Maps Integration',
      'Real-Time Notifications',
      'Media Upload & Gallery',
      'Calendar & Scheduling',
      'Offline Storage Capabilities',
    ],
    techStack: [
      'Flutter',
      'Dart',
      'Provider',
      'Geolocator',
      'Flutter Maps',
      'Local Notifications',
    ],
    Icon: FiSmartphone,
    color: '#22c55e',
    route: '/mobile',
  },
  {
    id: 'dashboard',
    title: 'Admin Dashboard',
    subtitle: 'Management & Analytics Platform',
    description:
      'Comprehensive admin dashboard built with Vite for managing platform data including users, jobs, services, and verifications.',
    features: [
      'User Management & Verification',
      'Services & Jobs Administration',
      'Analytics & Reporting',
      'Document Approval System',
      'Real-Time Statistics',
      'Export Capabilities',
    ],
    techStack: ['Vite', 'React', 'Tailwind CSS', 'Chart.js', 'RESTful APIs'],
    Icon: RiAdminLine,
    color: '#ef4444',
    route: '/dashboard',
  },
  {
    id: 'backend',
    title: 'Herfa Backend',
    subtitle: 'Scalable TypeScript API',
    description:
      'Modern, scalable backend API for the Egyptian local craftsmen service marketplace. Built with TypeScript, Express.js, and MongoDB.',
    features: [
      'JWT Authentication & Authorization',
      'Real-Time Chat with Socket.IO',
      'Role-Based Access Control',
      'Payment & Wallet System',
      'File Upload & Management',
      'Comprehensive Logging & Monitoring',
    ],
    techStack: [
      'Node.js',
      'TypeScript',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'JWT',
      'Cloudinary',
    ],
    Icon: FiServer,
    color: '#eab308',
    route: '/backend',
  },
];
