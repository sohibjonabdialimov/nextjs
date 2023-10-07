/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
		domains: ['fakestoreapi.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
	},
}

module.exports = nextConfig
