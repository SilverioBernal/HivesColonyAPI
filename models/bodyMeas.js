var db = require('../dbConnection'); // refernce to dbConnection

var bodyMeas ={
    adddobyMeas:function(bodyMeas,callback){
        return db.query(('CALL sp_create_bodymeasurement(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'),
        [bodyMeas.par_customerId,
        bodyMeas.par_height,
        bodyMeas.par_weight,
        bodyMeas.par_jacketSize,
        bodyMeas.par_pantSize,
        bodyMeas.par_shitSize,
        bodyMeas.par_neck,
        bodyMeas.par_shoulder,
        bodyMeas.par_shirtSleeveLength,
        bodyMeas.par_suitSleeveLength,
        bodyMeas.par_armHole,
        bodyMeas.par_bicep,
        bodyMeas.par_wrist,
        bodyMeas.par_watchSide,
        bodyMeas.par_chest,
        bodyMeas.par_stomach,
        bodyMeas.par_beltLine,
        bodyMeas.par_hips,
        bodyMeas.par_pantLength,
        bodyMeas.par_thighs,
        bodyMeas.par_knee,
        bodyMeas.par_pantCuff,
        bodyMeas.par_uLine,
        bodyMeas.par_jacketLength,
        bodyMeas.par_shoulderRoll,
        bodyMeas.par_shoulderSlope,
        bodyMeas.par_hunch,
        bodyMeas.par_bodyUserCreate,
        bodyMeas.par_type,
        bodyMeas.par_urlfile,
        bodyMeas.par_observation],
        function(error,result){
        if(error){
            callback(error.message,null);
        }
        else{
            callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
        }
        });
    },
    getdbodyMeas:function(por_id,callback) {
        return db.query('CALL sp_select_bodymeasurement_idCustomer (?)'[por_id],callback);
    }
};

module.exports = bodyMeas;