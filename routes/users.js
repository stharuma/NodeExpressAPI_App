const express = require('express');
//const router = express.Router();
const router = require('express-promise-router')();

const userController = require('../controllers/users');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

router.route('/')
.get(userController.index)
.post(validateBody(schemas.userSchema), userController.newUser);
// users/:id
router.route('/:userId')
.get(validateParam(schemas.idSchema, 'userId'), userController.getUserById)
.put([validateParam(schemas.idSchema, 'userId'), validateBody(schemas.userSchema)], userController.replaceUser)
.patch([validateParam(schemas.idSchema, 'userId'), validateBody(schemas.userOptionalSchema)], userController.updateUser);

// users/:id/cars
router.route('/:userId/cars')
.get(validateParam(schemas.idSchema, 'userId'), userController.getUserCars)
.post([validateParam(schemas.idSchema, 'userId'), validateBody(schemas.carSchema)], userController.newUserCar);

module.exports = router; 
