const express = require('express');
const router = express.Router();
const users = require('../database/users');
const randomInteger = require('../utils/randomInteger');
const books = require('../database/books');


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
            password: req.query.password,
            ID: randomInteger(0, 100)

        };
        users.push(user);
        res.send(users);
    }
});

router.get('/:authorID/rating', function (req, res) {
    let averageRating;
    let allRatings = [];
    for (let i = 0; i < books.length; i++) {
        if (req.params.authorID == books[i].authorID) {
            allRatings.push(books[i].rating);
            let sum = allRatings.reduce((acc, number) => acc + number, 0);
            averageRating = sum/allRatings.length;
        }
    }
    res.send({ rating: averageRating });
});

module.exports = router;