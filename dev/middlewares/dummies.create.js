import sleep from 'sleep';

import dummiesStorage from 'dev/storages/dummies';
import serverConfig   from 'config/server/server.base';


const url = serverConfig.apiURL('/dummies');

const middleware = (req, res) => {
  sleep.usleep(500000);

  dummiesStorage.updateStorage(storage => {

    const dummyId  = storage.getNewDummyId();
    const newDummy = Object.assign({ id: dummyId }, req.body);

    storage.getDummies().push(newDummy);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ dummy: newDummy }));

  });
};

export default [ url, middleware ];
