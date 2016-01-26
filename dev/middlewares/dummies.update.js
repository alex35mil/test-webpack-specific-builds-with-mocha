import sleep from 'sleep';

import dummiesStorage from 'dev/storages/dummies';
import serverConfig   from 'config/server/server.base';


const url = serverConfig.apiURL('/dummies/:dummyId');

const middleware = (req, res) => {
  sleep.usleep(500000);

  dummiesStorage.updateStorage(storage => {

    const dummyId = parseInt(req.params.dummyId, 10);
    const dummy   = storage.findDummy(dummyId);
    const updates = req.body;

    for (const attribute of Object.keys(updates)) {
      dummy[attribute] = updates[attribute];
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ dummy }));

  });
};

export default [ url, middleware ];
