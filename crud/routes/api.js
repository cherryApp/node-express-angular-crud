var express = require('express');
var router = express.Router();
const DB = require('../module/db');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Hi, this is the api page.');
});

// Example: /users/5 = server gives a users who has id = 5.
router.get('/:entity/:id', async (req, res, next) => {
    const db = new DB(req.params.entity);
    let list = await db.find(req.params.id);
    res.json(list);
});

// Example: /users/ = server gives all of users.
router.get('/:entity', async (req, res, next) => {
    const db = new DB(req.params.entity);
    let list = await db.find();
    res.json(list);
});

module.exports = router;
