const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(
    bodyParser.urlencoded({
        limit : '5mb',
        extended : false
    })
);

app.use(
    bodyParser.json({
        limit : '50mb'
    })
)

app.use(express.json());

// Route
const getirRoute = require('./Routes/getirRoute');

// Path
app.use('/getir', getirRoute);

module.exports = app;
const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`)); 
// See https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl for further details.