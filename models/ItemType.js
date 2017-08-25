var db = require('../dbConnection'); // refernce to dbConnection

var ItemType={

addItemType:function(ItemType,callback){
return db.query('CALL spItemTypeCreate(?,?,?,?,?,?)',[ItemType._description,
ItemType._isParent,
ItemType._isWear,
ItemType._applyTax,
ItemType._taxRate,
ItemType._taxBase],function(error, result) 
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
getItemTypeAll:function(callback){
   return db.query('CALL spItemTypeGetAll',callback); 
},

getItemTypeXAll:function(id, callback){
     return db.query('CALL spItemTypeGetById(?)',[id],callback);
},
updateItemType:function(ItemType,callback){
return db.query('CALL spItemTypeUpdate(?,?,?,?,?,?,?)',[ItemType._id, 
                                            ItemType._description,
                                            ItemType._isParent,
                                            ItemType._isWear,
                                            ItemType._applyTax,
                                            ItemType._taxRate,
                                            ItemType._taxBase],function(error, result) 
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
deleteItemType:function(id,callback)   {
	return db.query('CALL spItemTypeDelete(?)',[id],function(error, result){
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
module.exports=ItemType;