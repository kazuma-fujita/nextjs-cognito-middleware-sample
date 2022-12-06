/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REGION: process.env.REGION,
    COGNITO_USER_POOLS_ID: process.env.COGNITO_USER_POOLS_ID,
    COGNITO_USER_POOLS_WEB_CLIENT_ID:
      process.env.COGNITO_USER_POOLS_WEB_CLIENT_ID,
    COGNITO_URL: process.env.COGNITO_URL,
  },
};

module.exports = nextConfig;
