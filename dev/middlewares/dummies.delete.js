import sleep from 'sleep';

import dummiesStorage from 'dev/storages/dummies';
import serverConfig   from 'config/server/server.base';


const url = serverConfig.apiURL('/dummies/:dummyId');

const middleware = (req, res) => {
  sleep.usleep(500000);

  dummiesStorage.updateStorage(storage => {

    const dummyId = parseInt(req.params.dummyId, 10);
    const dummyIndex = (
      storage
        .getDummies()
        .findIndex(dummy => dummy.id === dummyId)
    );

    storage.getDummies().splice(dummyIndex, 1);

    res.end();

  });
};

export default [ url, middleware ];
