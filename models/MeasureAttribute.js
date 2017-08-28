var db = require('../dbConnection'); // refernce to dbConnection

var meassureAttribute ={
    addMeassureAttribute:function(description,callback){
        return db.query('CALL spMeasureAttributeCreate(?)',
        [
            description
        ],
        function(error,result){
        if(error){
            callback(error.message,null);
        }
        else{
            callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
        }
        });
    },

    updateMeassureAttribute:function(bodyMeas,callback){
        return db.query('CALL spMeasureAttributeUpdate(?,?)',
        [
            bodyMeas._id,
            bodyMeas._description
        ],
        function(error,result){
        if(error){
            callback(error.message,null);
        }
        else{
            callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
        }
        });
    },
    
    getMeassureAttributeById:function(_customerId, _type,callback) {
        return db.query('CALL spMeasureAttributeGetById (?)', 
        [
            _id
        ],function(error,result){
            if(error){
                callback(error.message,null);
            }
        });
    },

    getMeassureAttributeAll:function(callback){
        return db.query('CALL spCustomerGetAll',callback);
    },

    deleteMeassureAttribute:function(_id, _type, callback) {
        return db.query('CALL spMeasureAttributeDelete (?)', 
        [
            _id
        ],function(error,result){
            if(error){
                callback(error.message,null);
            }
        });
    }
};

module.exports = meassureAttribute;