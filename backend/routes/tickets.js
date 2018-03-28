var express = require('express');
var router = express.Router();

var ticketjson = [{
  id: 1,
  username: "jwhite",
  status: "offer-pending",
  recipient: "Matthew Smith"
}, {
  id: 7,
  username: "jwhite",
  status: "offer-request",
  recipient: "George Foreman"
}, {
  id: 8,
  username: "jwhite",
  status: "offer-request",
  recipient: "Cassius Clay"
}, {
  id: 9,
  username: "jwhite",
  status: "offer-pending",
  recipient: "Frank White"
}, {
  id: 13,
  username: "jwhite",
  status: "granted",
  recipient: "n/a"
}, {
  id: 14,
  username: "jwhite",
  status: "granted",
  recipient: "n/a"
}, {
  id: 2,
  username: "pblue",
  status: "offer-request",
  recipient: "Tyrone Lee"
}, {
  id: 10,
  username: "pblue",
  status: "offer-request",
  recipient: "Joe Frazier"
}, {
  id: 3,
  username: "pblue",
  status: "offer-request",
  recipient: "Alfred Einstein"
}, {
  id: 4,
  username: "oford",
  status: "offer-request",
  recipient: "Alfred Pennyworth"
}, {
  id: 16,
  username: "oford",
  status: "granted",
  recipient: "n/a"
}, {
  id: 17,
  username: "oford",
  status: "granted",
  recipient: "n/a"
}, {
  id: 11,
  username: "oford",
  status: "offer-request",
  recipient: "William Gates"
}, {
  id: 12,
  username: "oford",
  status: "offer-request",
  recipient: "Jeffrey Peso"
}, {
  id: 5,
  username: "oford",
  status: "granted",
  recipient: "n/a"
}, {
  id: 6,
  username: "jwhite",
  status: "offer-request",
  recipient: "Alfred Einstein"
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(ticketjson);
});

module.exports = router;