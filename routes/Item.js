var express = require('express');
var router = express.Router();
var Item=require('../models/Item');

router.post('/',function(req, res,next){
    Item.addItem(req.body,function(err,count){
        if (err) {
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

router.get('',function(req,res,next) {

});

router.get('/id/:id?',function(req,res,next){
    if (req.pa.id) {
        Item.getItemXAll(req.params.id,function(err, rows){
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
    Item.getItemAll(function(err,rows){
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
    Item.updateItem(req.body,function(err,rows){
 if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.delete('/:id',function(req,res,next){
    Item.deleteItem(req.params.id,function(){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

module.exports=router;