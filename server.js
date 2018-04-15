var express = require('express');
var path = require('path');

app = express();

var PORT = 3000;

var routes = require('./routes/index');
var routerLogin = require('./routes/login')

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
// html
app.use(express.static(path.join(__dirname, 'views')));

app.use('/', routes);

app.use('/login', routerLogin);

app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});
