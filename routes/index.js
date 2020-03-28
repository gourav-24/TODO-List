const express =require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const otherController = require('../controllers/otherTag_controller');
console.log('index.js of routes loaded');


router.get('/personal',otherController.personal);
router.get('/professional',otherController.professional);
router.get('/shopping',otherController.shopping);
router.post('/create',homeController.create);
router.get('/destroy/:id',homeController.destroy);
router.get('/form',homeController.form);


router.get('/',homeController.home);
module.exports = router;


