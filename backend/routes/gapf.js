var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    username: "jwhite",
    url: "http://www.google.com/search?q=Hi+there",
    status: "DRAFT"
  }, {
    username: "pblue",
    url: "http://www.google.com/search?q=John+White",
    status: "DRAFT"
  }, {
    username: "oford",
    url: "http://www.google.com",
    status: "SUBMITTED"
  }, {
    username: "fmay",
    url: "http://www.google.com",
    status: "SUBMITTED"
  }, {
    username: "ositter",
    url: "http://www.google.com",
    status: "SUBMITTED"
  }]);
});

module.exports = router;