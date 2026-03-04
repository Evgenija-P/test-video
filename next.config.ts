/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			// Cloudinary (як було)
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '/**'
			}
		]
	},
	allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev']
}

module.exports = nextConfig
