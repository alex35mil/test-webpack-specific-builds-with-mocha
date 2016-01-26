import sleep from 'sleep';

import dummiesStorage from 'dev/storages/dummies';
import serverConfig   from 'config/server/server.base';


const url = serverConfig.apiURL('/dummies');

const middleware = (req, res) => {
  sleep.usleep(500000);

  const dummies = dummiesStorage.getDummies();

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ dummies }));
};

export default [ url, middleware ];
