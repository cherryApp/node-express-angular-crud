var express = require('express');
var router = express.Router();
const DB = require('../module/db');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('Hi, this is the api page.');
});

// Example: /users/5 = user with id 5.
router.get('/:entity/:id', async (req, res, next) => {
    const db = new DB(req.params.entity);
    let list = await db.find(req.params.id);
    res.json(list);
});

// Example: /users/ = all users.
router.get('/:entity', async (req, res, next) => {
    const db = new DB(req.params.entity);
    let list = await db.find();
    res.json(list);
});

// Example: /users/ = create new user;
router.post('/:entity', async (req, res, next) => {
    const db = new DB(req.params.entity);
    let newData = await db.create(req.body);
    res.json(newData);
});

// Example: /users/3 = update an user;
router.put('/:entity/:id', async (req, res, next) => {
    const db = new DB(req.params.entity);
    let newData = await db.update(id, req.body);
    res.json(newData);
});

// Example: /users/5 = delete an user;
router.delete('/:entity/:id', async (req, res, next) => {
    const db = new DB(req.params.entity);
    let deleted = await db.delete(req.params.id);
    res.send(deleted);
});

module.exports = router;
