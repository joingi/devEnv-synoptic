var express = require('express');

var router = express.Router();
var UserController = require('../controllers/users_controller.js')
var OrderController = require('../controllers/orders_controller.js')
var RatingController = require('../controllers/rating_controller.js')
var BikesController = require('../controllers/bikes_controller.js')
var RatingController = require('../controllers/bikes_controller.js')
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


router.get('/analytics', BikesController.analytics);


// router.get("/partials/bikes.ejs",BikesController.getAllBikes);
router.post('/signup', UserController.create);

router.post('/login', UserController.login);
// router.get('/secret', UserController.getUser, BikesController.getAllBikes);
router.get('/secret', BikesController.getAllBikes);
// router.get('/secret',UserController.getUser);
router.get('/secret/:id',BikesController.getBikes);

router.get('/secret/rate/:id', BikesController.getBikesRate);

router.get('/checkout', function(req, res, next) {
  //console.log("okey", next )
  res.render('checkout');

});
router.post('/checkout', OrderController.create);
router.post('/bike', OrderController.create);

router.get('/rate',  OrderController.create);
router.post('/rate',  OrderController.create2);

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
