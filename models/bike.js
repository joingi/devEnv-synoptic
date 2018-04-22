const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  BikeSchema = new Schema({
  name: {
    type: String
  },
})

const Bike = mongoose.model('bikes', BikeSchema)

module.exports = Bike
