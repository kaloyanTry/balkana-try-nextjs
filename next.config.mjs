/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sixxmrmgffvhhcbjbnwu.supabase.co',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;

// https://sixxmrmgffvhhcbjbnwu.supabase.co/storage/v1/object/public/main-images/1-mskali.jpg
