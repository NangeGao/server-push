var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req._remoteAddress);
  var userList = [
    {"name": "队长"},
    {"name": "张三"},
    {"name": "李四"},
    {"name": "王五"},
  ]
  res.send(userList);
});

module.exports = router;
