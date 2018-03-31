var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "jwhite",
    name: "John White",
    type: "Faculty",
    password: "xxxl"
  }, {
    id: 2,
    username: "pblue",
    name: "Percy Blue",
    type: "Faculty",
    password: "password"
  }, {
    id: 3,
    username: "oford",
    name: "Ox Ford",
    type: "Faculty",
    password: "Password"
  }, {
    id: 4,
    username: "fmay",
    name: "Floyd May",
    type: "Budget Director",
    password: "Password"
  }, {
    id: 5,
    username: "ositter",
    name: "Office Sitter",
    type: "Grad Office Staff",
    password: "Password"
  }, {
    id: 6,
    username: "cmao",
    name: "C Mao",
    type: "Associate Chair Graduate",
    password: "Password"
  }]);
});

module.exports = router;
