var express = require('express');
var router = express.Router();
var AttributeValue=require('../models/AttributeValue');

router.post('/',function(req, res,next){
    AttributeValue.addAttributeValue(req.body,function(err,count){
        if (err) {
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

router.get('/_id/:_id?',function(req,res,next){
    if (req.pa._itemId) {
        AttributeValue.geAttributeValueXAll(req.params._itemId,req.params._AttributeValueId,function(err, rows){
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
    AttributeValue.getAttributeValueAll(function(err,rows){
            if ( err ) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
    });    
    }
});

router.put('/',function(req,res,next){
    AttributeValue.updateAttributeValue(req.body,function(err,rows){
 if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.delete('/:_id/',function(req,res,next){
    AttributeValue.deleteAttributeValue(req.params._itemId,req.params._AttributeValueId,function(){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

module.exports=router;