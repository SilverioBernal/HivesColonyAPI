var db = require('../dbConnection'); // refernce to dbConnection

var BodyMeasurementDetail={

    
    getBodyMeasurementDetailAll:function(_bodyMeasurementId, callback){
        return db.query('CALL spBodyMeasurementDetailGetAll(?)', [_bodyMeasurementId], callback);
    },

    getBodyMeasurementDetailById:function(_bodyMeasurementId, _measurementAttributeId, callback){
        return db.query('CALL spBodyMeasurementDetailGetById(?,?)',[_bodyMeasurementId, _measurementAttributeId],callback);
    },

    addBodyMeasurementDetail:function(Customer, callback){
        return db.query('CALL spBodyMeasurementDetailCreate(?,?,?)',
        [
            Customer._bodyMeasurementId,
            Customer._measurementAttributeId,
            Customer._measurement
        ],function(error, result) {
			if(error)
			{
				callback(null, error.message);
			}
			else
			{
				//devolvemos la última id insertada
				callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
			}
		});
    },
    updateBodyMeasurementDetail:function(Customer,callback){
        return db.query('CALL spBodyMeasurementDetailUpdate(?,?,?)',
        [
            Customer._bodyMeasurementId,
            Customer._measurementAttributeId,
            Customer._measurement
        ],function(error,result){
            if(error){
				callback(null, Customers);
            }
        });
    },

    deleteBodyMeasurementDetail:function(_bodyMeasurementId, _measurementAttributeId, callback){
        return db.query('CALL spBodyMeasurementDetailDelete(?,?)',[_bodyMeasurementId, _measurementAttributeId], callback);
        if(error){
            callback(null, id);
        }			
    }
};

module.exports=BodyMeasurementDetail;