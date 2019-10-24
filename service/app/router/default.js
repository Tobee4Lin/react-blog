module.exports = app => {
    const { router, controller } = app
    router.get('/default/index', controller.default.home.index)
    router.get('/default/getArticleList', controller.default.home.getArticleList)
    router.get('/default/getArticleListById/:id', controller.default.home.getArticleListById)
    
    router.get('/default/author', controller.default.home.author)
    router.get('/default/list', controller.default.list.index)
}