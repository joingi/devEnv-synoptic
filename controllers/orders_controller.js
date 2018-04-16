const Order = require('../models/order.js')


module.exports = {

  create(req, res, next){
    var OrderData;
    OrderData = new Order({
      name: req.body.name,
      time: req.body.time
    })

    OrderData.save( function(err, order){
      if(err){
        console.log(err)
        return
      }
      res.redirect('/checkout')
    })

    console.log(OrderData)
  }

}
