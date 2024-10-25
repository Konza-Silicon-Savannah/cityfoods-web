/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['localhost', '127.0.0.1'],
    remotePatterns: [
      {
        protocol:'http',
        hostname:'localhost',
        pathname:'',
      }
    ]
  },
        eslint: {
                ignoreDuringBuilds: true,
  },
         typescript: {
    ignoreBuildErrors: true,
  },
}
;

export default nextConfig;
