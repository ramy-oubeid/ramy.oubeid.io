/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/ramy.oubeid.io',
    assetPrefix: '/ramy.oubeid.io/',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
