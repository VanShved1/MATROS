const express = require('express');
const router = express.Router();
const randomInteger = require('../utils/randomInteger');
const isAuthorized = require('../middleware/IsAuthorized');

router.use(isAuthorized);

let books = [];

router.get('/', function (req, res) {
    res.send(books);
});

router.post('/', function (req, res) {
    let book = {
        title: req.query.title,
        ID: randomInteger(0,10000)
    }
    books.push(book);
    res.send(book);
});

router.delete('/', function (req, res) {
    for(let i = 0; i < books.length; i++) {
        if(books[i].ID == req.query.ID) {
            books.splice(i, 1);
        }
    }
    res.send(books);
});

router.patch('/', function (req, res) {
    for(let i = 0; i < books.length; i++) {
        if(req.query.ID == books[i].ID) {
            books[i].title = req.query.title;
        }
    }
    res.send(books);
});

module.exports = router;