var express = require('express');
var router = express.Router();
var Customers=require('../models/Customers');

router.get('/id/:id?',function(req,res,next){
    
    if(req.params.id){
            Customers.getXidCustomers(req.params.id,function(err,rows){
                if(err)
            {
            res.json(err);
            }
            else{
            res.json(rows);
            }
            });
    }
    else{
        Customers.getAllCustomers(function(err,rows){
        if(err)
        {
        res.json(err);
        }
        else{
        res.json(rows);
        }
        });
    }

});

router.get('/mail/:id?',function(req,res,next){
    
    if(req.params.id){
            Customers.getXMailCustomers(req.params.id,function(err,rows){
                if(err)
            {
            res.json(err);
            }
            else{
            res.json(rows);
            }
            });
    }
    else{
        Customers.getAllCustomers(function(err,rows){
        if(err)
        {
        res.json(err);
        }
        else{
        res.json(rows);
        }
        });
    }

});


router.post('/', function(req,res,next){
Customers.addCustomers(req.body,function(err,count){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(req.body);//or return count for 1 & 0
            }
});
});

router.put('/',function(req,res,next){
    Customers.updateCustomers(req.body,function(err,rows){
if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
router.delete('/:id',function(req,res,next){
        Customers.deleteCustomers(req.params.id,function(err,count){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }

        });
});
module.exports=router;
