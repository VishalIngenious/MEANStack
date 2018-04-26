const mysql = require('mysql');

function createConnection (){
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'manager',
database: 'techforum'

});
connection.connect();
return connection;
}

module.exports = {
createConnection:createConnection
};