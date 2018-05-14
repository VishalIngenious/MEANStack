const express = require('express');
const dbhelper = require('./dbhelper');

var router = express.Router();

router.get('/car', (request, response) =>  {
    var connection = dbhelper.createConnection();
    var statement = "select id, model, company, price from car";
    connection.query(statement, (error, results) => {
        connection.end();
        response.send({
            status: error == null ? 'ok' : 'error',
            data: results
        });
    });
});

router.post('/car', (request, response) =>  {
    var car = request.body;
    var connection = dbhelper.createConnection();
    var statement = `insert into car (model, company, price) values ('${car.model}','${car.company}','${car.price}')`;
    connection.query(statement, (error, results) => {
        connection.end();
        response.send({
            status: error == null ? 'ok' : 'error'
        });
    });
});

router.put('/car/:id', (request, response) =>  {
    var id = request.params.id;
    var car = request.body;
    var connection = dbhelper.createConnection();
    var statement = `update car set model = '${car.model}', company = '${car.company}', price = '${car.price}' where id = ${id}`;
    connection.query(statement, (error, results) => {
        connection.end();
        response.send({
            status: error == null ? 'ok' : 'error'
        });
    });
});

router.delete('/car/:id', (request, response) =>  {
    var id = request.params.id;
    var connection = dbhelper.createConnection();
    var statement = `delete from car where id = ${id}`;
    connection.query(statement, (error, results) => {
        connection.end();
        response.send({
            status: error == null ? 'ok' : 'error'
        });
    });
});


module.exports = router;