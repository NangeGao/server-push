var express = require('express');
var router = express.Router();

let timer = null;
const delay = 10000;

router.get('/', function(req, res, next) {
    timer = setTimeout(() => {
        let result = {
            "code": "001",
            "finished": true
        }
        res.send(result);
    }, delay);

});

module.exports = router;
