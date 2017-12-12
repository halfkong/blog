'use strict';

/**
 * @author harris
 */

const Controller = require('egg').Controller;

class NextController extends Controller {
  
  async handler() {
    const handler = this.app.next.getRequestHandler();
    await handler(this.ctx.req, this.ctx.res);
    this.ctx.respond = false;
  }
}

module.exports = NextController;
