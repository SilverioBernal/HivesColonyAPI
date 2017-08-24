var db = require('../dbConnection'); // refernce to dbConnection

var bodyMeas ={
    addBodyMeas:function(bodyMeas,callback){
        return db.query('CALL aldopSO(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
            bodyMeas._customerId,
            bodyMeas._type, 
            bodyMeas._height, 
            bodyMeas._weight, 
            bodyMeas._jacketSize, 
            bodyMeas._pantSize, 
            bodyMeas._shitSize, 
            bodyMeas._neck, 
            bodyMeas._shoulder, 
            bodyMeas._shirtSleeveLength, 
            bodyMeas._suitSleeveLength, 
            bodyMeas._armHole, 
            bodyMeas._bicep, 
            bodyMeas._wrist, 
            bodyMeas._watchSide, 
            bodyMeas._chest, 
            bodyMeas._stomach, 
            bodyMeas._beltLine, 
            bodyMeas._hips, 
            bodyMeas._pantLength, 
            bodyMeas._thighs, 
            bodyMeas._knee, 
            bodyMeas._pantCuff, 
            bodyMeas._uLine, 
            bodyMeas._jacketLength, 
            bodyMeas._shoulderRoll, 
            bodyMeas._shoulderSlope, 
            bodyMeas._hunch, 
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
        return db.query('CALL spBodyMeasurementUpdate(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
            bodyMeas._customerId,
            bodyMeas._type, 
            bodyMeas._height, 
            bodyMeas._weight, 
            bodyMeas._jacketSize, 
            bodyMeas._pantSize, 
            bodyMeas._shitSize, 
            bodyMeas._neck, 
            bodyMeas._shoulder, 
            bodyMeas._shirtSleeveLength, 
            bodyMeas._suitSleeveLength, 
            bodyMeas._armHole, 
            bodyMeas._bicep, 
            bodyMeas._wrist, 
            bodyMeas._watchSide, 
            bodyMeas._chest, 
            bodyMeas._stomach, 
            bodyMeas._beltLine, 
            bodyMeas._hips, 
            bodyMeas._pantLength, 
            bodyMeas._thighs, 
            bodyMeas._knee, 
            bodyMeas._pantCuff, 
            bodyMeas._uLine, 
            bodyMeas._jacketLength, 
            bodyMeas._shoulderRoll, 
            bodyMeas._shoulderSlope, 
            bodyMeas._hunch, 
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
        return db.query('CALL spBodyMeasurementGetById (?, ?)', 
        [
            _customerId,
            _type
        ],function(error,result){
            if(error){
                callback(error.message,null);
            }
        });
    },

    deleteBodyMeas:function(_customerId, _type, callback) {
        return db.query('CALL spBodyMeasurementDelete (?, ?)', 
        [
            _customerId,
            _type
        ],function(error,result){
            if(error){
                callback(error.message,null);
            }
        });
    }
};

module.exports = bodyMeas;