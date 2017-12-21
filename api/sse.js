var express = require('express');
var router = express.Router();

let timer = null;
const delay = 6000;

router.get('/', function(req, res, next) {
    res.set({
        "Content-Type":"text/event-stream",
        "Cache-Control":"no-cache",
        "Connection":"keep-alive",
        "Access-Control-Allow-Origin": '*',
    });
    res.write("data: 111" + (new Date()) + "\n\n");
    res.write("data: 222" + (new Date()) + "\n\n");
    
    let timer = setInterval(function () {
        res.write("data: " + (new Date()) + "\n\n");
    }, 5000);

    /*
    let id = req.query.id;
    timer = setTimeout(() => {
        let result = `
            <script>
                parent.finished(${id});
            </script>
        `;
        res.send(result);
    }, delay);
    */

});

module.exports = router;
