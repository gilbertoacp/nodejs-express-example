const express  = require('express')
const mongoose = require('mongoose');
const routes   = require('./routes');
const exphbs   = require('express-handlebars');
const path     = require('path');

async function bootstrap() {

    const app = express();

    await mongoose.connect(process.env.MONGO_DB_URI);

    app.set('port', process.env.PORT);

    app.set('views', __dirname + '/resources/views');

    app.set('view engine', '.hbs');

    app.use(express.static(path.join(__dirname, 'public')));

    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    app.engine('.hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'app',
        layoutsDir: app.get('views') + '/layouts',
        partialsDir: app.get('views') + '/partials',
    }));

    routes(app);

    app.listen(app.get('port'), () => console.log(`Serving on port --> ${app.get('port')}`));
}

bootstrap().catch(err => console.log(err));