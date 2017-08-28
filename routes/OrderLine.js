var express = require('express');
var router = express.Router();
var Order=require('../models/Order');

router.post('/',function(req,res,next) {
    Order.addOrderLine(req.Order, function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.put('/:_orderId/:_lineId/:_itemId',function(req,res,next) {
    Order.OrderLineClose(req.Order, function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});


module.exports=router;