const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',  // Set the host to 'localhost' or your IP address
    port: 8080,         // Default port for the development server
    open: true,         // Automatically open the browser when the server starts
    hot: true,          // Enable hot reloading
  },
});
