var db = require('../dbConnection'); // refernce to dbConnection

var Customers={

    getXMailCustomers:function(por_customerEmail,callback){
        return db.query('CALL sp_select_customer_mail(?)',[por_customerEmail],callback);
    },

    getAllCustomers:function(callback){
        return db.query('CALL sp_select_customer_all',callback);
    },
    getXidCustomers:function(por_id,callback){
        return db.query('CALL sp_select_customer_id(?)',[por_id],callback);
    },
    addCustomers:function(Customer, callback){
        return db.query('CALL sp_create_customer(?,?,?,?,?,?,?,?)',[Customer.par_name,
                                                                Customer.par_lastname,
                                                                Customer.par_phoneNumber,
                                                                Customer.par_streetAddress,
                                                                Customer.par_zipCode,
                                                                Customer.par_birthDate,
                                                                Customer.par_customerEmail,
                                                                Customer.par_customerUserCreate],function(error, result) 
		{
			if(error)
			{
				callback(null, error.message);
                console.log(error.message)
			}
			else
			{
				//devolvemos la última id insertada
                console.log(result[0].FileContent)
				callback(null,{"LAST_INSERT_ID" : result[0][0]['LAST_INSERT_ID()']});
			}
		});
    },
    updateCustomers:function(Customer,callback){
        return db.query('CALL sp_update_customer(?,?,?,?,?,?,?,?,?)',[Customer.par_id,
                                                                Customer.par_name,
                                                                Customer.par_lastname,
                                                                Customer.par_phoneNumber,
                                                                Customer.par_streetAddress,
                                                                Customer.par_zipCode,
                                                                Customer.par_birthDate,
                                                                Customer.par_customerEmail,
                                                                Customer.par_customerUserCreate],function(error,result){
            if(error)
			{
				callback(null, Customers);
			}
			else
			{
				//devolvemos la última id insertada
				callback(null,{"insertId" : result.insertId});
			}
                                                                });
    },
    deleteCustomers:function(id,callback){
        return db.query("delete from customer where id = ?",[id], callback);
        if(error)
			{
				callback(null, id);
			}
			else
			{
				//devolvemos la última id insertada
				callback(null,{"insertId" : result.insertId});
			}
    }
};

module.exports=Customers;