var express = require('express');
var router = express.Router();
var BodyMeasurementDetail=require('../models/BodyMeasurementDetail');

router.post('/', function(req,res,next){
    BodyMeasurementDetail.addBodyMeasurementDetail(req.body,function(err,count){
        if(err) {
            res.json(err);
        }
        else{
            res.json(count.LAST_INSERT_ID);//or return count for 1 & 0
        }
    });
});

router.put('/',function(req,res,next){
    BodyMeasurementDetail.updateBodyMeasurementDetail(req.body,
        function(err,rows){
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);//or return count for 1 & 0
        }
    });
});

router.get('/:_bodyMeasurementId',function(req,res,next){
    BodyMeasurementDetail.getBodyMeasurementDetailAll(req.params._bodyMeasurementId,function(err,rows){
        if(err) {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.get('/:_bodyMeasurementId/:_measurementAttributeId',function(req,res,next){
    BodyMeasurementDetail.getBodyMeasurementDetailById(req.params._bodyMeasurementId,req.params._measurementAttributeId,function(err,rows){
        if(err) {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


router.delete('/:_bodyMeasurementId/:_measurementAttributeId',function(req,res,next){
    BodyMeasurementDetail.deleteBodyMeasurementDetail(req.params._bodyMeasurementId,req.params._measurementAttributeId,function(err,count){
        if(err) {
            res.json(err);
        }   
        else
            {
                res.json(count);
            }     
    });
});

module.exports=router;