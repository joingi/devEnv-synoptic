const express = require('express');
app = express();
const PORT = 3000;

const route = require('./routes/index');


app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});
