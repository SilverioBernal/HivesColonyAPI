var express = require('express');
var router = express.Router();
var bodymeas=require('../models/bodyMeas');

router.post('/', function(req,res,next){
    bodymeas.addBodyMeas(req.body,function(err,count){
        if(err) {
            res.json(err);
        }
        else{
            res.json(count.LAST_INSERT_ID);//or return count for 1 & 0
        }
    });
});

router.put('/',function(req,res,next){
    bodymeas.updateBodyMeas(req.body,
        function(err,rows){
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);//or return count for 1 & 0
        }
    });
});

router.get('/:_customerId',function(req,res,next){
    bodymeas.getBodyMeas(req.params._customerId,function(err,rows){
        if(err) {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:_id',function(req,res,next){
    bodymeas.deleteBodyMeas(req.params._id,function(err,count){
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