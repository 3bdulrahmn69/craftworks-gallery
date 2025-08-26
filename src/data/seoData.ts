// SEO Sitemap for Herfa Craftsman Marketplace
export const siteMapData = {
  pages: [
    {
      url: 'https://herfa-g.netlify.app/',
      title: 'Herfa - Professional Craftsman Marketplace',
      description:
        "Connect with verified skilled craftsmen through Herfa's comprehensive platform. Secure payments, real-time messaging, and streamlined job management.",
      keywords:
        'craftsman marketplace, skilled artisans, professional handyman, contractor services, home improvement',
      lastModified: new Date().toISOString(),
      priority: 1.0,
      changeFreq: 'weekly',
    },
    {
      url: 'https://herfa-g.netlify.app/website',
      title: 'Web Platform - Herfa Craftsman Marketplace',
      description:
        'Responsive web application for connecting clients with verified craftsmen. Full-featured platform with job management and secure payments.',
      keywords:
        'web application, craftsman platform, responsive design, job management, secure marketplace',
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFreq: 'monthly',
    },
    {
      url: 'https://herfa-g.netlify.app/mobile',
      title: 'Mobile App - Herfa Craftsman Marketplace',
      description:
        'iOS and Android mobile applications for craftsmen and clients. On-the-go job management and real-time communication.',
      keywords:
        'mobile app, iOS, Android, craftsman app, mobile marketplace, on-demand services',
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFreq: 'monthly',
    },
    {
      url: 'https://herfa-g.netlify.app/backend',
      title: 'Backend API - Herfa Platform Architecture',
      description:
        'Robust backend API with secure authentication, real-time messaging, payment processing, and comprehensive user management.',
      keywords:
        'backend API, secure authentication, payment processing, real-time messaging, REST API, scalable architecture',
      lastModified: new Date().toISOString(),
      priority: 0.7,
      changeFreq: 'monthly',
    },
    {
      url: 'https://herfa-g.netlify.app/dashboard',
      title: 'Admin Dashboard - Herfa Platform Management',
      description:
        'Comprehensive admin dashboard for platform management, analytics, user oversight, and business intelligence.',
      keywords:
        'admin dashboard, platform management, analytics, user management, business intelligence',
      lastModified: new Date().toISOString(),
      priority: 0.6,
      changeFreq: 'monthly',
    },
  ],

  services: [
    'Home Repairs',
    'Custom Furniture',
    'Electrical Work',
    'Plumbing Services',
    'Carpentry',
    'Painting Services',
    'Interior Design',
    'Handyman Services',
    'HVAC Services',
    'Tiling and Flooring',
    'Roofing',
    'Gardening and Landscaping',
  ],

  locations: [
    'UAE',
    'Saudi Arabia',
    'Qatar',
    'Kuwait',
    'Bahrain',
    'Oman',
    'Egypt',
    'Jordan',
    'Lebanon',
    'Morocco',
    'Tunisia',
  ],
};

export const generateSitemapXML = () => {
  const { pages } = siteMapData;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;
};

export default siteMapData;
