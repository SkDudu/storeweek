/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.google.com', 'fsw-store.s3.sa-east-1.amazonaws.com']
    },
    experimental:{
        serverActions: true
    }
}

module.exports = nextConfig
