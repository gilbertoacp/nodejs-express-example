const express  = require('express')
const mongoose = require('mongoose');
const routes   = require('./routes');
const path     = require('path');
const morgan   = require('morgan');

async function bootstrap() {

    const app = express();

    await mongoose.connect(process.env.MONGO_DB_URI);

    app.set('port', process.env.PORT);

    app.set('views', __dirname + '/resources/views');

    app.set('view engine', 'twig');

    app.use(express.static(path.join(__dirname, 'public')));

    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    app.use(morgan("dev"));

    routes(app);

    app.listen(app.get('port'), () => console.log(`Serving on port --> ${app.get('port')}`));
}

bootstrap().catch(err => console.log(err));
    /*"start:assets-dev": "webpack --watch --hot --mode development",*/
