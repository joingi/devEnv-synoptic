var Order = require('../models/order.js')
var Bike = require('../models/bike.js')
var Rating = require('../models/rating.js')
var mongoose = require('mongoose')


module.exports = {
  create2(req, res, next){
    var jid = req.body.bike
    var rate = req.body.rate
    var bikeId = req.body.bikeId
    var RatingData;
    var mja = new mongoose.mongo.ObjectId();
    console.log("what", global.newId2 );

    RatingData = new Rating({
      rate: rate,
      BikeId: bikeId,
      bikeName: req.body.bikeName,
      _id: new mongoose.mongo.ObjectId()
    })

    Bike.findById({_id: bikeId}, function(err, bikes){

      var matchBike = bikes._id
      console.log("bikes", bikes._id)
    })
    RatingData.save( function(err, order){
      if(err){
        console.log(err)

      }
    })
    return   res.redirect('/secret');
  },

  create(req, res, next){
    // console.log("asdasd 3",req.body)
    console.log("so123ooo",req.body)
    var jid = req.body.bike
    var rate = req.body.rate
    var bikeId = req.body.bikeId
    var RatingData;

    var mja = global.newId2
    // console.log("mja",  mja)
    // console.log("ASDASDA",bikeId)


    OrderData = new Order({
      name: req.body.name,
      time: req.body.time,
      bike: req.body.bike,
      bikeName: req.body.bikeName,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      category: req.body.category,
    })

    OrderData.save( function(err, order){
      if(err){
        console.log(err)

      }
      res.redirect('/secret')

    })



    console.log(OrderData, "ASDASDA")
  },



}
