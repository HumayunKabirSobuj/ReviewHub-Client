import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https', // Allow HTTPS
				hostname: '**', // Allow ALL domains
			},
			// Optional: Add HTTP if needed (not recommended for production)
			{
				protocol: 'http',
				hostname: '**',
			},
		],
	},
	typescript: {
		ignoreBuildErrors: true, // Temporarily bypass
	},
};

export default nextConfig;
