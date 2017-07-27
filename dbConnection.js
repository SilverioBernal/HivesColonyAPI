var mysql=require('mysql');
 var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'mysql',
 database:'hivecolony',
 multipleStatements: true
 
});
 module.exports=connection;
 