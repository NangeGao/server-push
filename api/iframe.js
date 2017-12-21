var express = require('express');
var router = express.Router();

let timer = null;
const delay = 10000;

router.get('/', function(req, res, next) {
    let id = req.query.id;
    timer = setTimeout(() => {
        let result = `
            <script>
                parent.finished(${id});
            </script>
        `;
        res.send(result);
    }, delay);

});

module.exports = router;
