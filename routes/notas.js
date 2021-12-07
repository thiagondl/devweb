var express = require('express');
var router = express.Router();

let notas = []

router.get('/', function(req, res, next) {
  res.json(notas);
});

router.post('/', function(req, res, next) {
    notas.push(req.body.anotacao)
    res.json(notas);
});

module.exports = router;
