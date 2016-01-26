const path         = require('path');
const escapeRegExp = require('escape-string-regexp');

const project      = require('../../package.json');


module.exports = {

  target: 'node',

  output: { libraryTarget: 'commonjs' },

  externals: (
    Object
      .keys(project.dependencies)
      .concat(Object.keys(project.devDependencies))
      .map(module => new RegExp(`^${escapeRegExp(module)}(?:\/.*)?$`))
  ),

  devtool: '#sourcemap',

  resolve: {
    alias: {
      'app'   : path.join(process.cwd(), 'app'),
      'config': path.join(process.cwd(), 'config'),
    },
    extensions: [ '', '.js', '.jsx' ],
  },

  module: {
    loaders: [
      {
        test   : /\.jsx?$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
      },
      {
        test   : /\.css$/,
        loaders: [
          'css/locals?modules&importLoaders=0&localIdentName=[name]__[local]__[hash:base64:5]',
        ],
      },
      {
        test   : /\.scss$/,
        loaders: [
          'css/locals?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'sass',
        ],
      },
    ],
  },

}
