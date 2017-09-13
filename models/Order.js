var db = require('../dbConnection'); // refernce to dbConnection

var Order ={
    addOrder:function(Order, callback){        
        return db.query('CALL spOrderCreate(?,?,?)',
        [
            Order.customerId,
            Order.storeId,            
            Order.userId            
        ],function(error, result) {
			if(error)
			{
				callback(null, error.message);
                console.log(error.message)
			}
			else
			{
                console.log('no error');
				//devolvemos la última id insertada
                console.log(result[0][0]['LAST_INSERT_ID()'])
				callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
			}
		});
    },

    updateOrderClose:function(_id,_closeNotes,callback){
        return db.query('CALL spOrderClose(?,?)',[_id,_closeNotes],
    function(error,result) {
        if(error){
            callback(error.message,null);
        }
        else{
            callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
        } 
    });
    },
    updateOrderCancel:function(_id,_closeNotes,callback){
        return db.query('CALL spOrderCancel(?,?)',[_id,_closeNotes],
    function(error,result) {
        if(error){
            callback(error.message,null);
        }
        else{
            callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
        } 
    });
    },

    getOrderGetAll:function(callback) {
        return db.query('CALL spOrderGetAll',callback);
    },

    getOrderGetByCustomerId:function(_customerId,callback) {
        return db.query('CALL spOrderGetByCustomerId(?)',[_customerId],
        function(error,result){
            if(error){
                callback(error.message,null);
            }
        });
    },

    getOrderGetById:function(_id,callback) {
        return db.query('CALL spOrderGetById(?)',[_id],
        function(error,result){
            if(error){
                callback(error.message,null);
            }
        });
    }
}

module.exports=Order;