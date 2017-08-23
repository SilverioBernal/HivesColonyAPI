var db = require('../dbConnection'); // refernce to dbConnection

var Customers={

    getCustomerByEmail:function(por_customerEmail,callback){
        return db.query('CALL spCustomerGetByEmail(?)',[_customerEmail],callback);
    },

    getCustomerAll:function(callback){
        return db.query('CALL spCustomerGetAll',callback);
    },

    getCustomerById:function(por_id,callback){
        return db.query('CALL spCustomerGetById(?)',[_id],callback);
    },

    addCustomer:function(Customer, callback){
        return db.query('CALL spCustomerCreate(?,?,?,?,?,?,?)',
        [
            Customer._firstName,
            Customer._lastname,
            Customer._customerEmail,
            Customer._phoneNumber,
            Customer._streetAddress,
            Customer._zipCode,
            Customer._birthDate
        ],function(error, result) {
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
    updateCustomer:function(Customer,callback){
        return db.query('CALL spCustomerUpdate(?,?,?,?,?,?,?,?)',
        [
            Customer._id,
            Customer._firstName,
            Customer._lastname,
            Customer._customerEmail,
            Customer._phoneNumber,
            Customer._streetAddress,
            Customer._zipCode,
            Customer._birthDate
        ],function(error,result){
            if(error){
				callback(null, Customers);
            }
        });
    },
    deleteCustomer:function(id,callback){
        return db.query('CALL spCustomerDelete(?)',[_id], callback);
        if(error){
            callback(null, id);
        }			
    }
};

module.exports=Customers;