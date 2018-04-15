var express = require('express');

var router = express.Router();
var UserController = require('../controllers/users_controller.js')


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');

});
router.post('/signup', UserController.create);

router.post('/login', UserController.login);

router.get('/secret', function(req, res, next) {
  //console.log("okey", next )
  res.render('secret');

});

router.get('/checkout', function(req, res, next) {
  //console.log("okey", next )
  res.render('checkout');

});


router.get('/logout', function(req, res, next) {
    // return res.redirect('/');
    // console.log("hææææææ", res)
    // console.log(req)
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});


module.exports = router;
