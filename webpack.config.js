const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { NormalModuleReplacementPlugin, IgnorePlugin } = require('webpack');

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
    // Use custom tz info to reduce size
    new NormalModuleReplacementPlugin(
      /moment-timezone\/data\/packed\/latest\.json/,
      require.resolve('./src/utilities/moment-timezones-2015-2022.json'),
    ),
    // Don't bundle moment locale data to reduce size
    new IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};
