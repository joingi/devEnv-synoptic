
const UserController  = require('../users_controller.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test_node', function (err) {

   if (err) throw err;

   console.log('Successfully connected');

});
