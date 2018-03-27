var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "jwhite",
    status: "offer-pending",
    recipient: "Matthew Smith"
  }, {
    id: 2,
    username: "pblue",
    status: "offer-request",
    recipient: "Tyrone Lee"
  }, {
    id: 3,
    username: "pblue",
    status: "offer-request",
    recipient: "Opiyo Oloya"
  }, {
    id: 4,
    username: "oford",
    status: "offer-request",
    recipient: "Opiyo Oloya"
  }, {
    id: 5,
    username: "oford",
    status: "offer-request",
    recipient: "n/a"
  }]);
});

module.exports = router;