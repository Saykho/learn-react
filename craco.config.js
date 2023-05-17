// craco.config.js
const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@enums": path.resolve(__dirname, "./src/enums"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@localStorage": path.resolve(__dirname, "./src/localStorage"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@httpClient": path.resolve(__dirname, "./src/httpClient"),
    },
  },
};
