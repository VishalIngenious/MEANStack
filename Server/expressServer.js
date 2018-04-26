var express =  require('express');
var user = require('./user');
var bodyParser = require('body-parser');

var app = express();

// https://enable-cors.org/server_expressjs.html
// for enabling the COR
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(user);

app.listen(9090,'localhost',function(){
console.log('server is listening on port 9090');
});