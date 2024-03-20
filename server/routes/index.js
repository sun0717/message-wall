const controller = require('../controller/dbServe')

module.exports = function(app) {
    app.get('/test', (req, res) => {
        res.type('html')
        res.render('index')
    })
} 