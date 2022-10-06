const express = require('express');
const router = express.Router();
const users = require('../database/users');

router.get('/', function (req, res) {
    res.send(users);
});

router.post('/', function (req, res) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == req.query.email) {
            res.send('пользователь с таким емаилом уже есть');
            return;
        }
    }
    if (req.query.password.length < 6) {
        res.send('пароль меньше 6 символов');
        return;
    } else {
        let user = {
            email: req.query.email,
            password: req.query.password
        };
        users.push(user);
        res.send(users);
    }
});

module.exports = router;