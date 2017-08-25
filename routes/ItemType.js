var express = require('express');
var router = express.Router();
var ItemType=require('../models/ItemType');

router.post('/',function(req, res,next){
    ItemType.addItemType(req.body,function(err,count){
        if (err) {
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

router.get('/id/:id?',function(req,res,next){
    if (req.pa.id) {
        ItemType.getItemTypeXAll(req.params.id,function(err, rows){
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
    ItemType.getItemTypeAll(function(err,rows){
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
    ItemType.updateItemType(req.body,function(err,rows){
 if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.delete('/:id',function(req,res,next){
    ItemType.deleteItemType(req.params.id,function(){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

module.exports=router;