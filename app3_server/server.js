const express = require('express');
const bodyParser = require('body-parser');
const user = require('./user');
const product = require('./product');
const car = require('./car');

var app = express();

// https://enable-cors.org/server_expressjs.html
// for enabling the COR
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// for postman
app.use(bodyParser.json());

// html form
app.use(bodyParser.urlencoded({ extended: true }));

app.use(product);
app.use(user);
app.use(car);

app.listen(4000, 'localhost', function() {
    console.log('server started on 4000');
});