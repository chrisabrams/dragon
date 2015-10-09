var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin'),
    path                = require('path'),
    webpack             = require('webpack')

var config = {

  entry: {
    vendor: [
      'superagent',
      'handlebars'
    ],
    app: path.join(__dirname, './app/index.js')
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
        exclude: [/node_modules\/(?!dragon*)/ ],
        query: {
          blacklist: [
            'useStrict'
          ],
          optional: [
            'es7.classProperties',
            //'es7.decorators',
            /*
            TODO: Figure out why the runtime isn't working
            */
            //'runtime'
          ],
          //stage: 0
        }
      },

      {
        test: /\.hbs$/,
        loader: 'handlebars-template-loader',
        query: {
          knownHelpers: false
          //helpersDir: path.join(__dirname, './views/helpers')
        }
      },
      { test: /\.json$/, loader: 'json-loader' },

    ]
  },

  node: {
    fs: "empty"
  },

  resolve: {
    root: __dirname,
    extensions: ['', '.hbs', '.js', '.json'],
    modulesDirectories: ['node_modules'],
    alias: {

    }
  },

  resolveLoader: {
    root: path.join(__dirname, '../../node_modules')
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

if(process.env.NODE_ENV == 'production') {

  config.plugins.push(new webpack.optimize.UglifyJsPlugin())

}

module.exports = config
