var db = require('../dbConnection'); // refernce to dbConnection

var bodyMeas ={
    addBodyMeas:function(bodyMeas,callback){
        return db.query('CALL spBodyMeasurementCreate(?,?,?,?)',
        [
            bodyMeas._customerId,
            bodyMeas._type,             
            bodyMeas._urlfile, 
            bodyMeas._notes
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

    updateBodyMeas:function(bodyMeas,callback){
        return db.query('CALL spBodyMeasurementUpdate(?,?,?)',
        [
            bodyMeas._id,
            bodyMeas._urlfile, 
            bodyMeas._notes
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
    
    getBodyMeas:function(_customerId, _type,callback) {
        return db.query('CALL spBodyMeasurementGetById (?,?)', 
        [   _customerId,
            _type ],callback);
    },

    deleteBodyMeas:function(_customerId, _type, callback) {
        return db.query('CALL spBodyMeasurementDelete (?)', 
        [
            _id
        ],function(error,result){
            if(error){
                callback(error.message,null);
            }
        });
    }
};

module.exports = bodyMeas;