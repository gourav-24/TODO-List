const express =require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const otherController = require('../controllers/otherTag_controller');
console.log('index.js of routes loaded');


router.use('/personal',otherController.personal);
router.use('/professional',otherController.professional);
router.use('/shopping',otherController.shopping);


router.get('/',homeController.home);
module.exports = router;


