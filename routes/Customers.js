var express = require('express');
var router = express.Router();
var Customers=require('../models/Customers');

router.get('/id/:id?',function(req,res,next){    
    if ( req.params.id ) {
        Customers.getCustomerById(req.params.id,function(err,rows){
            if ( err ) {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else {
        Customers.getCustomerAll(function(err,rows){
            if ( err ) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }

});

router.get('/mail/:mail?',function(req,res,next){    
    if(req.params.mail){
        Customers.getCustomerByEmail(req.params.mail,function(err,rows){
            if ( err ) {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{
        Customers.getCustomerAll(function(err,rows){
            if ( err ) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }

});

router.post('/', function(req,res,next){
       Customers.addCustomer(req.body,function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(count);// cgra return last insert id 
        }
    });
});

router.put('/',function(req,res,next){
    Customers.updateCustomer(req.body,function(err,rows){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});

router.delete('/:_id',function(req,res,next){
    Customers.deleteCustomer(req.params._id,function(err,count){
        if(err) {
            res.json(err);
        }
        else {
            res.json(req.body);//or return count for 1 & 0
        }
    });
});
module.exports=router;
