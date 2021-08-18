const express = require('express');
const fs = require('fs');
const handler = require('./handler');
const router = express.Router();
const path = require('path');

const cartJSONPath = path.resolve(__dirname, './db/userCart.json');

router.get('/', (req, res) => {
  fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});


router.delete('/', (req, res) => {
  handler(req, res, 'del', cartJSONPath);
});

router.put('/:id', (req, res) => {
  handler(req, res, 'change', cartJSONPath);
});

router.post('/', (req, res) => {
  handler(req, res, 'add', cartJSONPath);
});

module.exports = router;
