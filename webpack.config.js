const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'yakubun.js',
    library: 'yakubun',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
      output: {
        ascii_only: true,
        comments: /^YAKUBUN/
      }
      }
    })
  ]
};