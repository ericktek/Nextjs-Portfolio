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
          hostname: '**',
          port: '',
          pathname: '**',
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
  