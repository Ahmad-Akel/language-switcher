const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts", // Your entry point file
  module: {
    rules: [
      {
        test: /\.ts$/, // For TypeScript files
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // For CSS files
        use: ["style-loader", "css-loader"], // Bundle and inject CSS into the HTML
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Automatically resolve these file extensions
  },
  output: {
    filename: "main.js", // The name of the bundled JS file
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean the output directory before each build
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve files from the dist folder
    },
    compress: true,
    port: 9000, // The port to run the dev server on
    open: true, // Open the browser automatically
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use your HTML template
    }),
  ],
};
