var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin'),
    glob                = require('glob'),
    path                = require('path'),
    webpack             = require('webpack')

// Test files
var spec = ['./test/helpers/browser/js/runner.js']
spec = spec.concat(glob.sync('./test/unit/**/*.js'))
spec = spec.concat(['./test/integration/views/base.js'])

var config = {

  entry: {
    dragon: [
      './src/dragon.js'
    ],
    spec
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, './test/helpers/browser/js')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/bower_components/, /node_modules\/(?!dragon*)/ ],
        query: {
          presets : ['es2015', 'stage-0'],
        }
      },
      { test: /\.json$/, loader: 'json-loader' }

    ]
  },

  node: {
    dns: 'empty',
    fs: 'empty',
    net: 'empty'
  },

  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules'],
    alias: {
      'babel-runtime': path.join(__dirname, 'node_modules/babel-runtime')
    }
  },

  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },

  plugins: [
    new webpack.IgnorePlugin(/node_modules\/^paradigm/),
    //new webpack.NormalModuleReplacementPlugin(/^(net|dns)$/, path.resolve(__dirname, 'shims/blank.js')),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    /*new ChunkManifestPlugin({
      filename: "manifest.json",
      manifestVariable: "webpackManifest"
    })*/
  ]
}

module.exports = config
