/* eslint no-console: 0 */

import express              from 'express';
import bodyParser           from 'body-parser';
import webpack              from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import devBuildConfig  from './config/build/webpack.dev.config';
import devServerConfig from './config/server/server.dev';

import dummiesMiddleware       from './dev/middlewares/dummies';
import dummiesGetMiddleware    from './dev/middlewares/dummies.get';
import dummiesCreateMiddleware from './dev/middlewares/dummies.create';
import dummiesUpdateMiddleware from './dev/middlewares/dummies.update';
import dummiesDeleteMiddleware from './dev/middlewares/dummies.delete';


const server   = express();
const compiler = webpack(devBuildConfig);

server.use(webpackDevMiddleware(compiler, {
  publicPath        : devBuildConfig.output.publicPath,
  hot               : true,
  historyApiFallback: true,
  stats             : {
    colors  : true,
    hash    : false,
    version : false,
    chunks  : false,
    children: false,
  },
}));

server.use(webpackHotMiddleware(compiler));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get(...dummiesGetMiddleware);
server.post(...dummiesCreateMiddleware);
server.patch(...dummiesUpdateMiddleware);
server.delete(...dummiesDeleteMiddleware);

server.use(...dummiesMiddleware);

server.listen(devServerConfig.port, 'localhost', err => {
  if (err) console.log(`=> OMG!!! 🙀 ${err}`);
  console.log(
    `=> 🔥  Webpack dev server is running on port ${devServerConfig.port}`
  );
});
