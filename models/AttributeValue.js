var db = require('../dbConnection'); // refernce to dbConnection

var AttributeValue={
    
addAttributeValue:function(AttributeValue,callback){
return db.query('CALL spAttributeValueCreate(?,?)',[AttributeValue._attributeId,
    AttributeValue._value],function(error, result) 
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

getAttributeValueAll:function(callback){
   return db.query('CALL spAttributeValueGetAll',callback); 
},

geAttributeValueXAll:function( _id, callback){
     return db.query('CALL spAttributeValueGetById(?)',[_id],callback);
},
updateAttributeValue:function(AttributeValue,callback){
return db.query('CALL spAttributeValueUpdate(?.?,?)',[AttributeValue._id, 
                                            AttributeValue._attributeId,
                                            AttributeValue._value]
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
deleteAttributeValue:function(_id,callback)   {
	return db.query('CALL spAttributeValueDelete(?)',[_id],function(error, result){
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
module.exports=AttributeValue;