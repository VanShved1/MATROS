const express = require('express');
const router = express.Router();
const generateString = require('../utils/generateString');
const users = require('../database/users');
const IsAuthorized = require('../middleware/IsAuthorized');


router.post('/sign-in', function (req, res) {
    for (let i = 0; i < users.length; i++) {
        if (req.query.email == users[i].email && req.query.password == users[i].password) {
            users[i].token = generateString();
            res.send(users[i].token);
            return;
        }
    }
    res.send('email или password не верный');
});

router.delete('/logout', IsAuthorized, function (req, res) {
    req.user.token = null;
    res.send(req.user.token);
});

module.exports = router;