const IndexController = require('./controllers/index.controller');

module.exports = (app) => {
    app.get('/welcome', IndexController.index);
    app.get('/', (req, res) => {
        res.status(200).send('Hola Mundo gaskaokdaods second time');
    });
    app.get('/home', (req, res) => {
        res.send('Home Page');
    });
    app.get('/signin', (req, res) => {
        res.send('SignIn Page');
    });
};
