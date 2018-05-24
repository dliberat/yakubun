const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'yakubun.js',
    globalObject: 'typeof self !==\'undefined\' ? self : this',
    library: 'yakubun',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          ascii_only: true,
          comments: /^YAKUBUN/,
        },
      },
    }),
  ],
};
