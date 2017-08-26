var db = require('../dbConnection'); // refernce to dbConnection

var BodyMeasurement ={
    getBodyMeasurementGetById:function(_customerId,_type,callback){
        return db.query('CALL spBodyMeasurementGetById(?,?)',[_customerId,_type],callback);
    },
    
    addBodyMeasurement:function(BodyMeasurement, callback){
        return db.query('CALL spBodyMeasurementCreate(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
            BodyMeasurement._customerId,
            BodyMeasurement._type,
            BodyMeasurement._height,
            BodyMeasurement._weight,
            BodyMeasurement._jacketSize,
            BodyMeasurement._pantSize,
            BodyMeasurement._shitSize,
            BodyMeasurement._neck,
            BodyMeasurement._shoulder,
            BodyMeasurement._shirtSleeveLength,
            BodyMeasurement._suitSleeveLength,
            BodyMeasurement._armHole,
            BodyMeasurement._bicep,
            BodyMeasurement._wrist,
            BodyMeasurement._watchSide,
            BodyMeasurement._chest,
            BodyMeasurement._stomach,
            BodyMeasurement._beltLine,
            BodyMeasurement._hips,
            BodyMeasurement._pantLength,
            BodyMeasurement._thighs,
            BodyMeasurement._knee,
            BodyMeasurement._pantCuff,
            BodyMeasurement._uLine,
            BodyMeasurement._jacketLength,
            BodyMeasurement._shoulderRoll,
            BodyMeasurement._shoulderSlope,
            BodyMeasurement._hunch,
            BodyMeasurement._urlfile,
            BodyMeasurement._notes            
        ],function(error, result) {
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
    updateBodyMeasurement:function(BodyMeasurement,callback){
        return db.query('CALL spBodyMeasurementUpdate(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
            BodyMeasurement._customerId,
            BodyMeasurement._type,
            BodyMeasurement._height,
            BodyMeasurement._weight,
            BodyMeasurement._jacketSize,
            BodyMeasurement._pantSize,
            BodyMeasurement._shitSize,
            BodyMeasurement._neck,
            BodyMeasurement._shoulder,
            BodyMeasurement._shirtSleeveLength,
            BodyMeasurement._suitSleeveLength,
            BodyMeasurement._armHole,
            BodyMeasurement._bicep,
            BodyMeasurement._wrist,
            BodyMeasurement._watchSide,
            BodyMeasurement._chest,
            BodyMeasurement._stomach,
            BodyMeasurement._beltLine,
            BodyMeasurement._hips,
            BodyMeasurement._pantLength,
            BodyMeasurement._thighs,
            BodyMeasurement._knee,
            BodyMeasurement._pantCuff,
            BodyMeasurement._uLine,
            BodyMeasurement._jacketLength,
            BodyMeasurement._shoulderRoll,
            BodyMeasurement._shoulderSlope,
            BodyMeasurement._hunch,
            BodyMeasurement._urlfile,
            BodyMeasurement._notes 
        ],function(error,result){
            if(error){
				callback(null, BodyMeasurements);
            }
        });
    },
    deleteBodyMeasurement:function(_customerId,_type,callback){
        return db.query('CALL spBodyMeasurementDelete(?,?)',[_customerId,_type], callback);
        if(error){
            callback(null, id);
        }			
    }
};

module.exports=BodyMeasurements;