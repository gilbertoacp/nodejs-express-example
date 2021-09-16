const IndexController = require('./controllers/index.controller');

module.exports = (app) => {
    app.get('/welcome', IndexController.index);
    
};