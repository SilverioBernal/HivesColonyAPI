var express = require('express');
var router = express.Router();
var Order=require('../models/Order');

router.post('/',function(req,res,next) {
    Order.addOrder(req.Order, function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.put('/:_id/:_closeNotes',function(req,res,next) {
    Order.updateOrderCancel(req.Order, function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.put('/:_id/:_closeNotes',function(req,res,next) {
    Order.updateOrderClose(req.Order, function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.get(function(req,res,next){
    Order.getOrderGetAll(function(err,rows){
    if ( err ) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
    });
});

router.get('/:_customerId',function(req,res,next){
    Order.getOrderGetByCustomerId(req.params._customerId,function(err,rows){
    if ( err ) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
    });
});

router.get('/:_id',function(req,res,next){
    Order.getOrderGetById(req.params._id,function(err,rows){
    if ( err ) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
    });
});

module.exports=router;