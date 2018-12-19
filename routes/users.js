const express = require('express');
//const router = express.Router();
const router = require('express-promise-router')();

const userController = require('../controllers/users');

router.route('/')
.get(userController.index)
.post(userController.newUser);
//users/:id
router.route('/:userId')
.get(userController.getUser);

module.exports = router; 
