'use strict';

const Controller = require('egg').Controller;

class ListController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'api列表接口';
  }
}

module.exports = ListController;
