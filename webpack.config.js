const path = require('path');
const { NormalModuleReplacementPlugin, IgnorePlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

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
    // Use custom tz info to reduce size
    new NormalModuleReplacementPlugin(
      /moment-timezone\/data\/packed\/latest\.json/,
      require.resolve('./src/utilities/moment-timezones-2015-2022.json'),
    ),
    // Don't bundle moment locale data to reduce size
    new IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            ascii_only: true,
            comments: /^\s*YAKUBUN/,
          }
        }
      }),
    ]
  }
};
