/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        DATABASE_URL: process.env.DATABASE_URL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    },
}

module.exports = nextConfig
