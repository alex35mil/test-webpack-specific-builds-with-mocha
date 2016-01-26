import webpack      from 'webpack';
import path         from 'path';
import autoprefixer from 'autoprefixer';


export default {

  entry: [
    'webpack-hot-middleware/client',
    'normalize.css',
    './app/initters/client',
  ],

  output: {
    path      : path.join(process.cwd(), 'public'),
    filename  : 'app.js',
    publicPath: '/assets/',
  },

  devtool: '#cheap-module-eval-source-map',

  resolve: {
    alias: {
      'app'   : path.join(process.cwd(), 'app'),
      'config': path.join(process.cwd(), 'config'),
    },
    extensions: [ '', '.js', '.jsx' ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

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
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss',
        ],
      },
      {
        test   : /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'postcss',
          'sass',
        ],
      },
    ],
  },

  postcss: [ autoprefixer ],

}
