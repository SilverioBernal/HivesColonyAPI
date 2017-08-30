var express = require('express');
var router = express.Router();
var OrderLine=require('../models/OrderLine');

router.post('/',function(req,res,next) {
    OrderLine.addOrderLine(req.body, function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.put('/:_orderId/:_lineId/:_itemId',function(req,res,next) {
    OrderLine.updateOrderLineClose(req.params._orderId,
                                req.params._lineId,
                                req.params._itemId, 
    function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.get('/:_orderId/:_lineId/', function(req,res,next) {
    OrderLine.getOrderLineGetByLineId(req.params._orderId,
                                    req.params._lineId,
    function(err, rows){
        if ( err ) {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }) ;
});

router.get('/:_orderId', function(req,res,next) {
    OrderLine.getOrderLineGetByOrderId(req.params._orderId,
    function(err, rows){
        if ( err ) {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    }) ;
});

router.delete('/:_orderId/:_lineId',function(req,res,next){
    OrderLine.delOrderLineDelete(req.params._orderId, req.params._lineId,
    function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports=router;