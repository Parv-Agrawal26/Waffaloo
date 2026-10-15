/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    qualities: [75, 95],
  },
};

export default nextConfig;
