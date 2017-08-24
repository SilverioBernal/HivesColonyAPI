var db = require('../dbConnection'); // refernce to dbConnection

var ItemAttribute={
    
addItemAttribute:function(ItemAttribute,callback){
return db.query('CALL spItemCreate(?,?,?)',[ItemAttribute._itemId,
    ItemAttribute._attributeId,
    ItemAttribute._changePrice],function(error, result) 
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

getItemAttributeAll:function(callback){
   return db.query('CALL spItemAttributeGetAll',callback); 
},

geItemAttributeXAll:function( _itemId, _attributeId, callback){
     return db.query('CALL spItemAttributeGetById(?,?)',[_itemId,_attributeId],callback);
},
updateItemAttribute:function(ItemAttribute,callback){
return db.query('CALL spItemAttributeUpdate(?.?,?)',[ItemAttribute._itemId, 
                                            ItemAttribute._attributeId,
                                            ItemAttribute._changePrice]
                                            ,function(error, result) 
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
deleteItemAttribute:function(_itemId,_attributeId,callback)   {
	return db.query('CALL spItemAttributeDelete(?,?)',[_itemId,_attributeId],function(error, result){
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
module.exports=ItemAttribute;