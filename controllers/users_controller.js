const User = require('../models/user.js')

module.exports = {
  greeting(req, res){
    res.send(res);
    res.render('index', { title: 'Express' });
  },

  create(req, res, next){
    //console.log(req.body);
    var userData
    userData = new User ({
      username: req.body.username,
      password: req.body.password
    })
    // console.log(userData);
    userData.save(function(err, newUser){
      if(err){
        console.log('err', err);
        return
      }

    })

},
login(req, res, next){
  var userData
  userData = User({
    username: req.body.username,
    password: req.body.password
  })
  var username = req.body.username;
  var password = req.body.password;
  console.log(username)
  console.log(password)
  // console.log(userData);

  User.findOne({username: req.body.username} , function(err, user){
    if(user === null){
      console.log('err', err);
      res.redirect('/')
      return;
    }
    else{
      res.redirect('/secret')

      console.log("hæjj",user)
      // return next(user);
      return
    }
  })

  }
}
