var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin'),
    path                = require('path'),
    webpack             = require('webpack')

module.exports = {

  entry: {
    vendor: ['handlebars'],
    app: [
      //'./app/templates/**/*.js',
      './app/index.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './public/js')
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.hbs$/, loader: 'handlebars-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },

  resolve: {
    root: path.join(__dirname, './app'),
    extensions: ['', '.hbs', '.js', '.json'],
    alias: {
      'handlebars': 'handlebars/runtime.js'
    }
  },

  resolveLoader: {
    root: path.join(__dirname, './node_modules')
  },

  plugins: [
    new webpack.IgnorePlugin(/node_modules\/^paradigm/),
    new webpack.NormalModuleReplacementPlugin(/^(net|dns)$/, path.resolve(__dirname, 'shims/blank.js')),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor.js'),
    new ChunkManifestPlugin({
      filename: "manifest.json",
      manifestVariable: "webpackManifest"
    })
  ]
}
