const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send(user);
});

router.post('/', function (req, res) {
    user.name = req.query.name;
    user.age = req.query.age;
    res.send(user);
});

module.exports = router;