'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'api接口';

    let result = await this.app.mysql.get("blog_content", {});
    ctx.body = result;
  }

  async getArticleList() {
    // let sql = 'SELECT article.id as id,' +
    //   'article.title as title,' +
    //   'article.introduce as introduce,' +
    //   'article.addTime as addTime,' +
    //   'article.view_count as view_count ,' +
    //   '.type.typeName as typeName ' +
    //   'FROM article LEFT JOIN type ON article.type_id = type.Id'
    let id = this.ctx.params.id;
    let sql = 'SELECT * FROM article LEFT JOIN type ON article.type_id = type.id';

    const res = await this.app.mysql.query(sql);
    // const res = await this.app.mysql.select("article");

    this.ctx.body = {
      data: res
    }
  }

  async getArticleListById() {
    let id = this.ctx.params.id;
    let sql = 'SELECT * FROM article LEFT JOIN type ON article.type_id = type.id WHERE article.id = ' + id;

    const res = await this.app.mysql.query(sql);
    this.ctx.body = {
      data: res
    }
  }

  async author() {
    let arr = [
      {
        name: 'aa',
        age: 2
      },
      {
        name: 'bb',
        age: 3
      }
    ]
    this.ctx.body = arr;
  }
}

module.exports = HomeController;
