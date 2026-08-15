export default {
  preset: "vercel",
  handlers: [
    {
      route: "/**",
      handler: "./dist/server/server.js",
    },
  ],
  publicAssets: [
    {
      dir: "./dist/client",
      maxAge: 3600,
    },
  ],
};
