var express = require('express');
var router = express.Router();

var ticketjson = [{
  id: 1,
  username: "jwhite",
  status: "offer-pending",
  recipient: "Matthew Smith",
  chair_approved: "true",
  accept: ""
}, {
  id: 7,
  username: "jwhite",
  status: "offer-request",
  recipient: "George Foreman",
  chair_approved: "",
  accept: ""
}, {
  id: 8,
  username: "jwhite",
  status: "offer-request",
  recipient: "Cassius Clay",
  chair_approved: "true",
  accept: ""
}, {
  id: 9,
  username: "jwhite",
  status: "offer-pending",
  recipient: "Frank White",
  chair_approved: "true",
  accept: "accept"
}, {
  id: 19,
  username: "jwhite",
  status: "offer-pending",
  recipient: "Curtis Jackson",
  chair_approved: "true",
  accept: "reject"
}, {
  id: 13,
  username: "jwhite",
  status: "granted",
  recipient: "n/a",
  chair_approved: "true",
  accept: ""
}, {
  id: 14,
  username: "jwhite",
  status: "granted",
  recipient: "n/a",
  chair_approved: "true",
  accept: ""
}, {
  id: 2,
  username: "pblue",
  status: "offer-request",
  recipient: "Tyrone Lee",
  chair_approved: "",
  accept: ""
}, {
  id: 10,
  username: "pblue",
  status: "offer-request",
  recipient: "Joe Frazier",
  chair_approved: "true",
  accept: ""
}, {
  id: 3,
  username: "pblue",
  status: "offer-request",
  recipient: "Alfred Einstein",
  chair_approved: "",
  accept: ""
}, {
  id: 4,
  username: "oford",
  status: "offer-request",
  recipient: "Alfred Pennyworth",
  chair_approved: "",
  accept: ""
}, {
  id: 16,
  username: "oford",
  status: "granted",
  recipient: "n/a",
  chair_approved: "true",
  accept: ""
}, {
  id: 17,
  username: "oford",
  status: "granted",
  recipient: "n/a",
  chair_approved: "true",
  accept: ""
}, {
  id: 11,
  username: "oford",
  status: "offer-request",
  recipient: "William Gates",
  chair_approved: "true",
  accept: ""
}, {
  id: 12,
  username: "oford",
  status: "offer-request",
  recipient: "Jeffrey Peso",
  chair_approved: "true",
  accept: ""
}, {
  id: 5,
  username: "oford",
  status: "granted",
  recipient: "n/a",
  chair_approved: "true",
  accept: ""
}, {
  id: 6,
  username: "jwhite",
  status: "offer-request",
  recipient: "Alfred Einstein",
  chair_approved: "true",
  accept: ""
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(ticketjson);
});

module.exports = router;