/* eslint comma-dangle: ["error",
  {"functions": "never", "arrays": "only-multiline", "objects": "only-multiline"} ] */

// -----------------------------------------------------------
// NOTE: This has been hacked together as a proof-of-concept
// -----------------------------------------------------------


// Run like this:
// cd client && yarn run build:client
// Note that Foreman (Procfile.dev) has also been configured to take care of this.

const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const merge = require('webpack-merge');
// const config = require('../webpack.client.base.config');
const { resolve, join } = require('path');
const webpackConfigLoader = require('react-on-rails/webpackConfigLoader');

const configPath = resolve('..', '..', 'config');
const { output } = webpackConfigLoader(configPath);

const devBuild = process.env.NODE_ENV !== 'production';

const config = {
  context: resolve(__dirname),

  entry: {
    vendor: [
      'actioncable',
      'axios',
      'immutable',
      'jquery',
      'jquery-ujs',
      'react',
      'react-addons-css-transition-group',
      'react-bootstrap',
      'react-dom',
      'react-intl',
      'react-on-rails',
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'redux',
      'redux-thunk',
      'turbolinks',
    ],
  },

  output: {
    // Name comes from the entry section.
    filename: process.env.NODE_ENV === 'production' ?
      '[name]-[hash].js' :
      '[name].js',
    path: output.path,
    library: '[name]',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.svg'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new webpack.DllPlugin({
      context: resolve(join(__dirname, '..')),
      name: '[name]',
      path: join(output.path, '[name]-dll-manifest.json'),
    }),
    new ManifestPlugin({
      publicPath: output.publicPath,
      fileName: join(output.path, 'vendor-manifest.json'),
      writeToFileEmit: true,
    }),
  ],

  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            query: 'jQuery'
          },
          {
            loader: 'expose-loader',
            query: '$'
          }
        ]
      },
      {
        test: require.resolve('turbolinks'),
        use: {
          loader: 'imports-loader?this=>window'
        },
      },
      {
        test: require.resolve('react'),
        use: {
          loader: 'imports-loader',
          options: {
            shim: 'es5-shim/es5-shim',
            sham: 'es5-shim/es5-sham',
          }
        }
      },
      {
        test: require.resolve('jquery-ujs'),
        use: {
          loader: 'imports-loader',
          options: {
            jQuery: 'jquery',
          }
        }
      }
    ]
  }
};

if (devBuild) {
  console.log('Webpack dev vendor build for Rails'); // eslint-disable-line no-console
  config.devtool = 'eval-source-map';
} else {
  console.log('Webpack production vendor build for Rails'); // eslint-disable-line no-console
}

module.exports = config;
