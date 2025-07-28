/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
	  unoptimized: true,
	},

	experimental: {
		turbo: false,
	  },
	
	trailingSlash: true,

  };
  
  module.exports = nextConfig;
  /*export default nextConfig;*/
  