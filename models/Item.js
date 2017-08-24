var db = require('../dbConnection'); // refernce to dbConnection

var Item={

addItem:function(Item,callback){
return db.query('CALL spItemCreate(?,?,?)',[Item._typeId,
Item._description,
Item._price],function(error, result) 
{
if(error)
			{
				callback(null, error.message);
                console.log(error.message)
			}
			else
			{
				//devolvemos la última id insertada
                console.log(result[0].FileContent)
				callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
			}
});
    },
getItemAll:function(callback){
   return db.query('CALL spItemGetAll',callback); 
},

getItemXAll:function(id, callback){
     return db.query('CALL sp_select_customer_id(?)',[id],callback);
},
updateItem:function(Item,callback){
return db.query('CALL spItemUpdate(?.?,?,?)',[Item._id, 
                                            Item._typeId,
                                            Item._description,
                                            Item._price],function(error, result) 
{if(error)
			{
				callback(null, error.message);
                console.log(error.message)
			}
			else
			{
				//devolvemos la última id insertada
                console.log(result[0].FileContent)
				callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
			}
});
},
deleteItem:function(id,callback)   {
	return db.query('CALL spItemDelete(?)',[id],function(error, result){
		if(error)
			{
				callback(null, error.message);
                console.log(error.message)
			}
			else
			{
				//devolvemos las filas afectadas
                console.log(result[0].FileContent)
				callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
			}
	});
}
 

};
module.exports=Item;