const express = require('express');
const dbhelper = require('./dbhelper');

var router = express.Router();

router.post('/user/login', (request, response) => {
    var user = request.body;
    var connection = dbhelper.createConnection();
    var statement = `select * from user where userName = '${user.userName}' AND password = '${user.password}'`;
    connection.query(statement, (error, results) => {
        connection.end();
        response.send({ status: results.length > 0 ? 'ok' : 'error' });
    });
})

module.exports = router;