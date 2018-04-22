var Bike = require('../models/bike.js')
var Order = require('../models/order.js')
var mongoose = require('mongoose')

var ObjectId = require('mongodb').ObjectID;
module.exports = {

  getBikes(req, res){

    var bikeId = req.params.id

    Bike.findById({_id: bikeId}, function(err, bikes){

      res.render('bike.ejs', {Bike:bikes})

    })
  },
  getBikesRate(req, res){

    var bikeId = req.params.id

    Bike.findById({_id: bikeId}, function(err, bikes){

      res.render('rate.ejs', {Bike:bikes})

    })
  },
  getAllBikes(req, res){

    Bike.find({}, function(err, bikes){

      res.render('secret.ejs', {Bike:bikes})

    })
  },
  analytics(req, res, next){
    // console.log(req.body);
    var som = []
    var item;
    Order.aggregate([
      // {
      //   "$group" :{
      //   _id : {
      //      },
      //       test: { $push:  { category: "$category"} },
      //       count:{ $sum:1},
      //    },
      // },
      {
        $project : {
              year : {
                  year : "$year"
              },
              month : {
                  month : "$month"
              },
              week : {
                  week : "$week"
              },
              day : {
                  day : " $day"
              },
              bike : {
                  bike : "$bike"
              },
              time : {
                  time : "$time"
              },

              category : {
                  category : "$category"
              },
              bikeName:{
                bikeName: "$bikeName"
              },
              "formattedDate": {
                   "$dateToString": { "format": "%Y-%m-%d", "date": "$time" }
               },
               "createdAtMonth": { "$month": "$time" },
               "createdAtYear": { "$year": "$time" },
               "createdAtWeek": { "$week": "$time" },
               "createdAtDay": { "$dayOfMonth": "$time" },
          }
      },

        {
          "$group" :{
            test: { $push:  { category: "$category"} },
            // category: "$category",
            // count:{ $sum:1},
            _id : {
               bike:  "$bike",
             },
             count:{ $sum:1},
             entry: {
               $push: {
                  bikeName: "$bikeName",
                  year: "$createdAtYear",
                  month: "$createdAtMonth",
                  week : "$createdAtWeek",
                  day: "$createdAtDay",
                  category:  "$category"
               },

             }
           },
        },
        {
        $project: {
             // _id: "$info.id",
             // count: "$count",
            _id: "$_id",
              test: "$test.category",
              // category: "$category.$category",
             count: "$count",

             bikeName: "$entry.bikeName",
             // year: "$entry.year",
             month: "$entry.month",
             // week: "$entry.week",
             // day: "$entry.day",
             // totalAmount: "$totalAmount",
             // amount: "$info.amount",
             // description: "$info.description"
              }
         },

          {$sort:{"count":-1}}
        ],
        function (err,results) {
            var test = []
            var sum = 0;
          for(var i = 0 ; i < results.length; i++){

              var item = results[i].test.length
              test.push(item)
              console.log(JSON.stringify(item));
              console.log(JSON.stringify(test));
          }
          for (var i = 0; i < test.length; i++) {
            sum += test[i]
                console.log(JSON.stringify(sum));
          }
          console.log(JSON.stringify(sum));
          console.log(JSON.stringify(test));



            console.log(JSON.stringify(results));
          // rsults = JSON.stringify(results)
         res.render('analytics.ejs',{Order: results})

        }
      )
    }

}
