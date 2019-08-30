var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Hi, this is the api page.');
});

// Example: /users/5 = server gives a users who has id = 5.
router.get('/:entity/:id', function (req, res, next) {
    res.send('Hi, this is the api page.');
});

// Example: /users/ = server gives all of users.
router.get('/:entity', function (req, res, next) {
    res.send('Hi, this is the api page.');
});

module.exports = router;
