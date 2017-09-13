var db = require('../dbConnection'); // refernce to dbConnection

var bodyMeas ={
    addBodyMeas:function(bodyMeas,callback){ //test ok 20170906
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
        callback);
    },
    
    getBodyMeas:function(_customerId, callback) { //test ok 20170906
        return db.query('CALL spBodyMeasurementGetById (?)', 
        [   _customerId
            ],callback);
    },

    deleteBodyMeas:function(_id, callback) {
        return db.query('CALL spBodyMeasurementDelete (?)', 
        [
            _id
        ],
        callback);
    }
};

module.exports = bodyMeas;