var express = require('express');
var router = express.Router();
var BodyMeasurement=require('../models/BodyMeasurement');

router.get('/:_customerId/:_type',function(req,res,next){    
        BodyMeasurement.getBodyMeasurementGetById(req.params._customerId,
                                                req.params._type,function(err,rows){
            if ( err ) {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});

router.post('/', function(req,res,next){
    BodyMeasurement.addBodyMeasurement(req.body,function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.put('/',function(req,res,next){
    BodyMeasurement.updateBodyMeasurement(req.body,function(err,rows){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.delete('/:_customerId/:_type',function(req,res,next){
    BodyMeasurement.deleteBodyMeasurement(req.params._customerId,req.params._type,function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});
module.exports=router;
