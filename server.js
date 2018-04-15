var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var ejs = require('ejs');
app = express();
app.use(bodyParser.json());
session = require('express-session')
const UserController  = require('./controllers/users_controller.js')
const mongoose = require('mongoose')
var PORT = 3000;
var routes = require('./routes/index');
app.set('view engine', 'ejs');



// const passport = require('passport');
// app.use(passport.initialize());
// app.use(passport.session());
//
//
// passport.serializeUser(function(user, cb) {
//   cb(null, user.id);
// });
//
// passport.deserializeUser(function(id, cb) {
//   User.findById(id, function(err, user) {
//     cb(err, user);
//   });
// });


app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

// create application/json parser
// var jsonParser = bodyParser.json()
//
// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({
  extended: true
}));


// app.use( express.static( __dirname +  '/public') )

// // Serve static files
app.use( express.static( "public" ) );
// app.use(express.static(path.join(__dirname, 'devEnv-synoptic')));
// // html
// app.use(express.static(path.join(__dirname, 'views')));


app.use('/', routes);





mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test_node', function (err) {

   if (err) throw err;

   console.log('Successfully connected');

});




// app.use('/login', routes);

app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});
