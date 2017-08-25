var express = require('express');
var router = express.Router();
var Attribute=require('../models/Attribute');

router.post('/',function(req, res,next){
    Attribute.addAttribute(req.body,function(err,count){
        if (err) {
            res.json(err);
        }
        else{
            res.json(req.body);
        }
    });
});

router.get('/_itemId/:_itemId?/:_attributeId?',function(req,res,next){
    if (req.pa._itemId) {
        Attribute.geAttributeXAll(req.params._itemId,req.params._attributeId,function(err, rows){
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        })
    } else {
    Attribute.getAttributeAll(function(err,rows){
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
    Attribute.updateAttribute(req.body,function(err,rows){
 if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.delete('/:_itemId/:_attributeId',function(req,res,next){
    Attribute.deleteAttribute(req.params._itemId,req.params._attributeId,function(){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

module.exports=router;