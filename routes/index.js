var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController');
const cargarController = require('../controllers/cargarController');
const logOutController = require('../controllers/logOutController');

/* GET home page. */
router.get('/', homeController.get);

router.post('/', homeController.post);

router.get('/cargar', cargarController.get);

router.post('/cargar', cargarController.post);

router.put('/logout', logOutController.put);

module.exports = router;
