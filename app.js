const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const cookieSession = require('cookie-session');

const authMiddleware = require('./middlewares/auth');
const sumRouter = require('./routers/sum');
const authRouter = require('./routers/auth');

const app = express();

//ejs
app.set('view engine', 'ejs');

//session
app.use(cookieSession({
    name: 'session',
    keys: ['secret'],
    maxAge: 24 * 60 * 60 * 1000 //24h
}));

app.use(authMiddleware);
app.use(expressLayouts);
app.use(bodyParser.urlencoded());
app.use('/sum', sumRouter);
app.use('/auth', authRouter);

app.get('/', function (req, res) {
    res.render('index', { title: 'Trang chủ' });
});

app.get('/view', function (req, res) {
    req.session.views = (req.session.views || 0) + 1;
    res.send(`Bạn đã xem trang này ${req.session.views} lần`);
});


const port = process.env.PORT || 3000;
console.log(`Server listen on port ${port}`);

app.listen(port);