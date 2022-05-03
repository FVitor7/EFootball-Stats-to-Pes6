/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // /loader : 'custom' , 
    minimumCacheTTL: 60,
    domains: ['www.pesuniverse.com']
  },
  reactStrictMode: false,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/graphql",
          destination: "https://efootball22.herokuapp.com/graphql",
        },
      ],
    };
  },
};
