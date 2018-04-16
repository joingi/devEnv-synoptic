const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RatingSchema = new Schema({
   bike: {
      type: String
    },
  rate: {
     type: Number
   }
})

const Rating = mongoose.model('rating', RatingSchema)

module.exports = Rating
