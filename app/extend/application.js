'use strict';

/**
 * @author harris
 */

const {getNext} = require('../../render');
const NEXT_ENGINE = Symbol('Application#next');

module.exports = {
  get next() {
    if (!this[NEXT_ENGINE]) {
      this[NEXT_ENGINE] = getNext();
    }
    return this[NEXT_ENGINE];
  }
};
