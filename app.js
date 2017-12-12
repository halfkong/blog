'use strict';

/**
 * @author harris
 */

const {next} = require('./render');

module.exports = app => {
  app.beforeStart(async () => {
    await next(app.config.env !== 'prod')
  });
};
