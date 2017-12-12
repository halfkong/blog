'use strict';

/**
 * @author harris
 */

const next = require('next');
let app;

module.exports = {
  getNext() {
    return app;
  },
  next: async (env) => {
    app = next({dev: env});
    await app.prepare();
  }
};
