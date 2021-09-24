const IndexController = require('./controllers/index.controller');

module.exports = (app) => {
    app.get('/', IndexController.index);
    
    app.get('/welcome', (req, res) => res.send('/welcome'))
};