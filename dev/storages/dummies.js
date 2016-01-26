import dummies from 'dev/data/dummies.json';

export default {

  getDummies() {
    return dummies;
  },

  updateStorage(updater) {
    return updater(this);
  },

  getNewDummyId() {
    return dummies.length + 1;
  },

  findDummy(dummyId) {
    return (
      dummies.find(dummy => dummy.id === dummyId)
    );
  },

}
