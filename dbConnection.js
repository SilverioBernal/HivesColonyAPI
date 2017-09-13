var mysql=require('mysql');
 var connection=mysql.createPool({
 
 host:'192.168.0.7',
 port:3306,
 user:'root',
 password:'Tecnologia.4',
 database:'hivecolony',
 multipleStatements: true
 
});
 module.exports=connection;
 