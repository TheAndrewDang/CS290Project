var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (!req.cookies || !req.cookies["visitCount"]) res.cookie("visitCount", 0);

    res.render('index.ejs', {
        timesVisited: req.cookies["visitCount"] ? req.cookies["visitCount"] : 0,
    });
});

module.exports = router;
