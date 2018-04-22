const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RatingSchema = new Schema({
   bikeName: {
      type: String
    },
  BikeId: {
     type: String
   },
   rate: {
      type: String
    },
    _id:{
      type: String
    }
})

const Rating = mongoose.model('rating', RatingSchema)

module.exports = Rating
