/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'siablgiorgbjwcibrvbq.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/project-images/**',
      },
    ],
  },
};

module.exports = nextConfig;

