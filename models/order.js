const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  name: {
    type: String
  },
  time: {
    type: Date,
  }
})

const Order = mongoose.model('order', OrderSchema)

module.exports = Order
