const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      port: 8080,
      open: 'Google Chrome', // 'google-chrome' on Linux and 'chrome' on Windows
    },
    devtool: env.development ? 'source-map' : '',
  };
}
