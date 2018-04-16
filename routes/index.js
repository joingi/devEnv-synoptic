var express = require('express');

var router = express.Router();
var UserController = require('../controllers/users_controller.js')
var OrderController = require('../controllers/orders_controller.js')
var RatingController = require('../controllers/rating_controller.js')
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index' , {
    bikes: [
      {
        image: "images/cannondale-synapse-carbon-ultegra-3-disc-2016-road-bike-black-EV239405-9400-1.jpg",
        title: 'Basso Astra Disc',
        text: "The Astra fits in the middle of Basso’s line, but the monocoque, full carbon fiber frame (i.e., no extra metal reinforcements) is still made in Italy like its more expensive siblings."
      },
      {
        image: "images/cannondale-synapse-carbon-ultegra-3-disc-2016-road-bike-black-EV239405-9400-1.jpg",
        title: "Basso Astra Disc",
        text: "The Astra fits in the middle of Basso’s line, but the monocoque, full carbon fiber frame (i.e., no extra metal reinforcements) is still made in Italy like its more expensive siblings."
      },
      {
        image: "images/cannondale-synapse-carbon-ultegra-3-disc-2016-road-bike-black-EV239405-9400-1.jpg",
        title: "Basso Astra Disc",
        text: "The Astra fits in the middle of Basso’s line, but the monocoque, full carbon fiber frame (i.e., no extra metal reinforcements) is still made in Italy like its more expensive siblings."
      }
    ]
  });

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
router.post('/checkout', OrderController.create);

router.post('/rating', RatingController.create);

router.get('/rating', function(req, res, next) {
  res.render('rating');
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
