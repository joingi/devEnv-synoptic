var express = require('express');
var router = express.Router();
var UserController = require('../controllers/users_controller.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log("req", req);
  res.render('index', { title: 'Express' });

});

// /* GET home page. */
// router.post('/login', function(req, res, next) {
//   console.log("req", req);
//   res.render('index', { title: 'Express' });
//
// });


module.exports = router;
