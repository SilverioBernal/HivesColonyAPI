var db = require('../dbConnection'); // refernce to dbConnection

var OrderLine ={
    addOrderLine:function(OrderLine, callback){
        return db.query('CALL spOrderLineCreate(?,?,?,?, ?,?,?,?, ?)',
        [
            OrderLine._orderId,
            OrderLine._lineId,
            OrderLine._itemId,
            OrderLine._quantity,
            OrderLine._price,
            OrderLine._addOnsPrice,
            OrderLine._tax,
            OrderLine._taxRate,
            OrderLine._value
        ],function(error,result){
            if(error){
                callback(error.message,null);
            }
            else{
                callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
            }
        });
    },

    updateOrderLineClose:function(_orderId,_lineId,_itemId,callback){
        return db.query('CALL spOrderLineClose(?,?,?)',[_orderId,_lineId,_itemId],
    function(error,result) {
        if(error){
            callback(error.message,null);
        }
        else{
            callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
        } 
    });
    },

    getOrderLineGetByLineId:function(_orderId,callback) {
        return db.query('CALL spOrderLineGetByOrderId(?)',[_orderId],
        function(error,result){
            if(error){
                callback(error.message,null);
            }
        });
    },

    getOrderLineGetByOrderId:function(_orderId,_lineId,callback) {
        return db.query('CALL spOrderLineGetByLineId(?,?)',[_orderId,_lineId],
        function(error,result){
            if(error){
                callback(error.message,null);
            }
        });
    },

    delOrderLineDelete:function(_orderId,_lineId,callback) {
        return db.query('CALL spOrderLineDelete(?,?)',[_orderId,_lineId],
        function(error,result){
            if(error){
                callback(error.message,null);
            }
        });
    }
}

module.exports=OrderLine;