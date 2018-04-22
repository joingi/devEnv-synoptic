const User = require('../models/user.js');


module.exports = (name) {

  return User.find({name: 'disa'});

}
