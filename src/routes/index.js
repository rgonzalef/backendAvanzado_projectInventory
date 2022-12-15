const express = require('express');
const package = require('../../package.json');
const router = express.Router();

/* GET home page. */
router.get('/health', function(req, res, next) {
  const {name,version} = package;

  res.send({
    name,
    version
  })
});

module.exports = router;
