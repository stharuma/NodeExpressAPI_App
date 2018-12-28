const router = require('express-promise-router')();

const carController = require('../controllers/cars');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

router.route('/')
.get(carController.index)
.post(validateBody(schemas.newCarSchema), carController.newCar);

router.route('/:carId')
.get(validateParam(schemas.idSchema, 'carId'), carController.getCar);


module.exports = router;