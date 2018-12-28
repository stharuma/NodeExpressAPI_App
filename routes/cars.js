const router = require('express-promise-router')();

const carController = require('../controllers/cars');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

router.route('/')
.get(carController.index);

module.exports = router;