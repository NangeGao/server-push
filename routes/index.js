var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', config);
});
Object.keys(config.routes).forEach(item => {
    router.get(`/${item}`, function(req, res, next) {
        res.render(item);
    });
})

module.exports = router;
