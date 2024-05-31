/** @type {import('next').NextConfig} */
const nextConfig = {

  // images: {
  //   domains: [
  //     'images.unsplash.com'
  //   ],
  // },

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          // pathname: '/account123/**',
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
          port: '',
          // pathname: '/account123/**',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          port: '',
          // pathname: '/account123/**',
        },
        {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
          port: '',
          // pathname: '/account123/**',
        },
      ],
    },


    // Favicon configuration
    async headers() {
      return [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=604800, immutable',
            },
          ],
        },
        {
          source: '/favico.png',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=604800, immutable',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  