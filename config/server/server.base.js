export default {

  apiURLPrefix: '/api/v1',

  apiURL(path) {
    return this.apiURLPrefix + path;
  },

};
