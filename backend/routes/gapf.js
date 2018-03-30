var express = require('express');
var router = express.Router();
var data = [{
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
}];

/* GET users listing. 
additional: allow getting BY username */
router.get('/', function(req, res, next) {
  res.json(data);
});

router.get('/find', function(req, res, next) {
  if (req.query ==={}) { return }
  let user = req.query.q;
  data.forEach( (entry) => {
    if (entry.username === user) {
      res.json(entry);
    }
  })
})

module.exports = router;