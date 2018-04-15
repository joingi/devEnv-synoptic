const express = require('express');
app = express();
const PORT = 30000;

const route = require('./routes/index');


app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});