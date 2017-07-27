var express = require('express');
var router = express.Router();
var bodymeas=require('../models/bodyMeas');

router.post('/', function(req,res,next){
bodymeas.adddobyMeas(req.body,function(err,count){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(count.LAST_INSERT_ID);//or return count for 1 & 0
            }
});
});

router.get('/?',function(req,res,next){
    bodymeas.getdbodyMeas(req.params.id,function(err,rows){
                if(err)
            {
            res.json(err);
            }
            else{
            res.json(rows);
            }
            });
});
module.exports=router;