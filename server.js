const express = require('express');
app = express();
const PORT = 30000;


app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
});