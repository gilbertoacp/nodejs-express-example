const IndexController = require('./controllers/index.controller');

module.exports = (app) => {
    app.get('/welcome', IndexController.index);
    app.get('/', (req, res) => {
        res.send('Hola Mundo');
    });
    app.get('/home', (req, res) => {
        res.send('Home Page');
    });
};
