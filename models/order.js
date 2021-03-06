const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  name: {
    type: String
  },
  bike: {
    type: String,
  },
  bikeName:{
    type: String
  },
  startDate:{
    type: String
  },
  endDate:{
    type: String
  },
  time: {
    type: Date,
  },
  category: {
    type: String,
  }
})

const Order = mongoose.model('order', OrderSchema)
module.exports = Order
