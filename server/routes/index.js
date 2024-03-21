const controller = require('../controller/dbServe')

module.exports = function(app) {
    // 新建 wall 数据
    app.post('/insertWall', (req, res) => {
        controller.insertWall(req, res)
    })
}