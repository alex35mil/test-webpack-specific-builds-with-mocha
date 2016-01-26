import http from 'axios';

import serverConfig from 'config/server/server.base';


http.interceptors.request.use(config => {
  config.url = serverConfig.apiURL(config.url);
  return config;
});

export default params => http(params);
