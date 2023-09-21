const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/',
          to: './',
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // styles files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf)$/, // to import images and fonts
        loader: "url-loader",
        type: 'asset/resource',
        options: { limit: false },
      },
    ],
  },
};