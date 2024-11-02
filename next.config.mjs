/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
   domains: ["localhost","cityfoods.konza.go.ke"], 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cityfoods.konza.go.ke",
        pathname: "/",
      },
      {
        protocol: "https",
        hostname: "cityfoods.konza.go.ke",
        pathname: "/media/",
      },
    ],
  },
};

export default nextConfig;
