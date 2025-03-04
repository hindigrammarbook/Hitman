const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const prerender = require('vite-plugin-prerender');

module.exports = defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,  // Increase limit from 500 KB to 1000 KB
  },
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/about',
        '/services',
        '/contact',
        '/casestudy',
        '/services/social-media-marketing-agency-in-delhi-ncr',
        '/services/b2b-lead-generation-company-in-delhi-ncr',
        '/seo-audit-tools',
      ],
    }),
  ],
});
