const User = require('../models/user');
const Todo = require('../models/todo');
const express = require('express');
const routers = express.Router();
const router = require('./sum');
const bcrypt = require('bcrypt');


router.use(function (req, res, next) {
    res.locals.title = 'Đăng nhập';
    next();
})

router.get('/login', function (req, res) {
    res.render('auth/login');
});

router.post('/login', function (req, res) {
    const { username, password } = req.body;
    const found = User.findByUsername(username)
    if (found && bcrypt.compareSync(password, found.password)) {
        req.session.userId = found.id;
        res.redirect('/');
    } else {
        res.render('auth/login');
    }
});

router.get('/logout', function (req, res) {
    delete req.session.userId;
    res.redirect('/');
});


//TODO
router.get('/todo', function (req, res) {
    res.locals.title = 'TODO';
    res.render('auth/todo');
});

router.post('/addtodo', Todo.add);

router.post('/marktodo', Todo.markAsDone);


module.exports = router;