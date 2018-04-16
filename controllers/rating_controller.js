const Rating = require('../models/rating.js')


module.exports = {

  create(req, res, next){
    var RatingData;
    RatingData = new Rating({
      bike: req.body.bike,
      rate: req.body.rate
    })

    RatingData.save( function(err, order){
      if(err){
        console.log(err)
        return
      }
      res.redirect('/rating')
    })

    console.log(RatingData)
  }

}
