USE `hivecolony`;
DROP procedure IF EXISTS `spCustomerGetAll`;

DELIMITER $$
USE `hivecolony`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `spCustomerGetAll`()
BEGIN
select  id,firstName,lastname,customerEmail,phoneNumber,streetAddress,zipCode,birthDate
from hivecolony.Customer
order by firstName, lastName;
END$$

DELIMITER ;
/*------------------------------*-----------*/


USE `hivecolony`;
DROP procedure IF EXISTS `spCustomerCreate`;

DELIMITER $$
USE `hivecolony`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `spCustomerCreate`(
IN _firstName varchar(250),
IN _lastname varchar(250),
IN _customerEmail varchar(120),
IN _phoneNumber varchar(45),
IN _streetAddress varchar(150),
IN _zipCode varchar(10),
IN _birthDate date
)
BEGIN
INSERT INTO hivecolony.Customer
(firstName,lastname,customerEmail,phoneNumber,streetAddress,zipCode,birthDate)
VALUES
(
  _firstName,_lastname,_customerEmail,_phoneNumber,_streetAddress,_zipCode,_birthDate
);

Select LAST_INSERT_ID();

END$$

DELIMITER ;

/*------------------------------*-----------*/

USE `hivecolony`;
DROP procedure IF EXISTS `spCustomerGetByEmail`;

DELIMITER $$
USE `hivecolony`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `spCustomerGetByEmail`(
IN _customerEmail char(120) 
)
BEGIN
select  id,firstName,lastname,customerEmail,phoneNumber,streetAddress,zipCode,birthDate
from hivecolony.Customer
where customerEmail = _customerEmail COLLATE utf16_unicode_ci;
END$$

DELIMITER ;

/*------------------------------*-----------*/

USE `hivecolony`;
DROP procedure IF EXISTS `spBodyMeasurementCreate`;

DELIMITER $$
USE `hivecolony`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `spBodyMeasurementCreate`(	
	IN _customerId INT, 
	IN _type VARCHAR(1), 	
	IN _urlFile VARCHAR(250), 
	IN _notes TEXT
)
BEGIN
INSERT INTO `hivecolony`.`BodyMeasurement` 
(
	`customerId`, 
	`type`, 
	`urlFile`, 
	`notes`
) 
VALUES 
(
	_customerId, 
	_type, 
	_urlfile, 
	_notes
);
Select LAST_INSERT_ID();
END$$

/*------------------------------*-----------*/

USE `hivecolony`;
DROP procedure IF EXISTS `spBodyMeasurementDetailCreate`;

DELIMITER $$
USE `hivecolony`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `spBodyMeasurementDetailCreate`(		 	
	IN _bodyMeasurementId int, 
    IN _measurementAttributeId int, 
    IN _measurement double
)
BEGIN
INSERT INTO `hivecolony`.`BodyMeasurementDetail` 
	(`bodyMeasurementId`, `measurementAttributeId`, `measurement`) 
VALUES 
	(_bodyMeasurementId, _measurementAttributeId, _measurement);
    Select LAST_INSERT_ID();
END$$

DELIMITER ;
