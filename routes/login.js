var express = require('express');
var router = express.Router();
var UserController = require('../controllers/users_controller.js')

router.post('/login', function(req, res, next) {

  console.log("req", req);

  console.log("req", res);

  // res.render('checkout',{hi:"asdasd"});
  res.send("ammam");

});


module.exports = router;
