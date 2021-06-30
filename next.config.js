const isProd = process.env.NODE_ENV === "production";
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["media-exp3.licdn.com"],
  },
  assetPrefix: isProd ? "/react-hire" : "",
};
