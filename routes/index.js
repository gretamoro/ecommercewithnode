var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController');
const cargarController = require('../controllers/cargarController');

/* GET home page. */
router.get('/', homeController.get);

router.post('/', homeController.post);

router.get('/cargar', cargarController.get);

module.exports = router;
