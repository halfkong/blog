'use strict';

/**
 * @author harris
 */

const Controller = require('egg').Controller;

class HomeController extends Controller {
  
  async index() {
    const { ctx, service } = this;
    ctx.body = 'hello word!';
    ctx.status = 201;
  }
}

module.exports = HomeController;
