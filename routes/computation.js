var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let x= req.query.x;
    let rand = Math.random().toFixed(2);
    let log2 = Math.log2(rand).toFixed(2);
    let cosh = Math.cosh(rand).toFixed(2);
    let floor = Math.floor(rand).toFixed(2);
    if (x == undefined){
        x = rand;
    }

  res.render('computation', {
  log2Val : `Math.log2() applied to ${x} is ${log2}`,
  coshVal : `Math.cosh() applied to ${x} is ${cosh}`,
  floorVal : `Math.floor() applied to ${x} is ${floor}`,
});
});

module.exports = router;