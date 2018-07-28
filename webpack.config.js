const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './entry.jsx',
  // entry: "react-google-recaptcha",
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new BundleAnalyzerPlugin({analyzerMode:'static'})
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      }
    ]
  }
};