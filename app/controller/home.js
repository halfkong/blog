'use strict';

/**
 * @author harris
 */

const Controller = require('egg').Controller;

class HomeController extends Controller {
  
  async index() {
    const { ctx } = this;
    ctx.body = await this.app.next.renderToHTML(ctx.request, ctx.response, '/home', ctx.query);
  }
}

module.exports = HomeController;
