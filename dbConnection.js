var mysql=require('mysql');
 var connection=mysql.createPool({
 
 host:'localhost',
 port:3306,
 user:'root',
<<<<<<< HEAD
 password:'',
=======
 password:'mysql',
>>>>>>> 2d4360f800fe1e1697a54d8d9221f59e786292ad
 database:'hivecolony',
 multipleStatements: true
 
});
 module.exports=connection;
 