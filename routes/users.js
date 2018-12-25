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
.put(userController.replaceUser)
.patch(userController.updateUser);

// users/:id/cars
router.route('/:userId/cars')
.get(userController.getUserCars)
.post(userController.newUserCar);

module.exports = router; 
