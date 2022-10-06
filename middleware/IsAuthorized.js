const users = require('../database/users');

function IsAuthorized(req, res, next) {
    for (let i = 0; i < users.length; i++) {
        if (req.header('authorization') == users[i].token) {
            req.user = users[i];
            return next();
        }
    }
    res.send('unathorized');
};

module.exports = IsAuthorized;