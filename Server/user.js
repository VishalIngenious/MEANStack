var express  = require('express');
var connectionFactory = require('./connectionFactory');

var router = express.Router();

/* http://localhost:9090/user*/
router.post("/user",function(request,response){
var createConnection = connectionFactory.createConnection();
    var userData = request.body;
    var statement = `select * from userInfo where userName ='${userData.userName}' and password = '${userData.password}'`; 
    createConnection.query(statement,(error,results)=>{
        createConnection.end();
        console.log(results);        
        response.send({
            status:error == null?'ok':'error',
            data:results
        });
        //response.send(results>1?'ok':'error');
    });    
});

router.post("/userRegister",function(request,response){
var userData = request.body;
var statement = `insert into userInfo (userName,password,role) values ('${userData.userName}','${userData.password}','${userData.role}')`; 
var createConnection = connectionFactory.createConnection();
createConnection.query(statement,(error,results) =>{
createConnection.end();
console.log(results);
response.send({
    status:error == null?'ok':'error',
    data:results
});

});

});

module.exports = router;

