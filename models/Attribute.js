var db = require('../dbConnection'); // refernce to dbConnection

var Attribute={
    
addAttribute:function(Attribute,callback){
return db.query('CALL spAttributeCreate(?,?)',[Attribute._typeId,
    Attribute._description],function(error, result) 
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

getAttributeAll:function(callback){
   return db.query('CALL spAttributeGetAll',callback); 
},

geAttributeXAll:function( _id,  callback){
     return db.query('CALL spAttributeGetById(?)',[_id],callback);
},
updateAttribute:function(Attribute,callback){
return db.query('CALL spAttributeUpdate(?.?,?)',[Attribute._id, 
                                            Attribute._typeId,
                                            Attribute._description]
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
deleteAttribute:function(_id,callback)   {
	return db.query('CALL spAttributeDelete(?)',[_id],function(error, result){
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
module.exports=Attribute;