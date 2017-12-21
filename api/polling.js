var express = require('express');
var router = express.Router();

const cache = {
    "finishTime": 10000
};
let timer = null;
const delay = 100;

router.get('/', function(req, res, next) {
    if (cache.finishTime <= 0 && !timer) {
        cache.finishTime = 10000;
    }
    if (!timer) {
        timer = setInterval(() => {
            cache.finishTime -= delay;
        }, delay);
    }

    console.log(cache.finishTime);

    let result = {
        "code": "001",
        "finished": false
    }
    if (cache.finishTime <= 0) {
        clearInterval(timer);
        timer = null;
        result.finished = true;
    }
    res.send(result);
});

module.exports = router;
