import sitemapPkg from 'sitemap'; // Default import for CommonJS module
import fs from 'fs'; // Import the File System module

// Extract the necessary functions from the default import
const { SitemapStream, streamToPromise } = sitemapPkg;

// Define all the routes of your website
const routes = [
  '/',
  '/about',
  '/services',
  '/casestudy',
  '/contact',
  '/seo-audit-tools',
  '/services/website-designing-services-in-delhi',
  '/services/best-web-development-services-in-delhi',
  '/services/social-media-marketing-agency-in-delhi-ncr',
  '/services/seo-services-in-delhi',
  '/services/smo-services-in-delhi',
  '/services/google-ads-services-in-delhi',
  '/services/b2b-lead-generation-company-in-delhi-ncr'
];

// Create a stream for the sitemap
const sitemapStream = new SitemapStream({ hostname: 'https://hitmandigital.in' });

// Add URLs to the stream
routes.forEach((route) => {
  sitemapStream.write({ url: route });
});

// Finalize the stream
sitemapStream.end();

// Ensure the public directory exists
const publicDir = './public';
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write the sitemap to a file
streamToPromise(sitemapStream)
  .then((data) => {
    fs.writeFileSync(`${publicDir}/sitemap.xml`, data.toString());
    console.log('Sitemap has been generated successfully!');
  })
  .catch((err) => {
    console.error('Error generating sitemap:', err);
  });
