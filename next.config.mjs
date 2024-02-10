/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jtcqtymewbsqztjevafu.supabase.co',
            }
        ]
    }
}

export default nextConfig;
