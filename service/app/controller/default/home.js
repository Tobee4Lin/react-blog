'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let result = await this.app.mysql.get("blog_content", {});
    ctx.body = result;
  }

  async getArticleList() {
    let sql = 'SELECT * FROM article LEFT JOIN type ON article.type_id = type.id';

    const res = await this.app.mysql.query(sql);
    
    this.ctx.body = {
      data: res
    }
  }

  async getArticleById() {
    let id = this.ctx.params.id;
    let sql = 'SELECT * FROM article LEFT JOIN type ON article.type_id = type.id WHERE article.id = ' + id;

    const res = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: res
    }
  }

  async getTypeInfo() {
    const result = await this.app.mysql.select("type");
    this.ctx.body = {
      data: result
    }
  }

  //根据ID获取对应类型的文章
  async getListById() {
    let id = this.ctx.params.id;
    console.log(id)
    let sql = 'SELECT * FROM article LEFT JOIN type ON article.type_id = type.id WHERE type.id = ' + id;
    const res = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: res
    }
  }

}

module.exports = HomeController;
