/** @type {import('next').NextConfig} */
const nextConfig = {
       images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            },
            {
            protocol: 'https',
            hostname: 'images.pexels.com',
            },
            {
            protocol: 'https',
            hostname: 'media.istockphoto.com',
            },
                        {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
            },
                                    {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            },
    ]
        //[new URL('images.unsplash.com'), 'plus.unsplash.com', 'media.istockphoto.com', 'images.pexels.com', 'res.cloudinary.com'],
    },
};

export default nextConfig;
