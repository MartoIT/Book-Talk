const router = require('express').Router();
const homeController = require('./contollers/homeController')
router.get('/', homeController.getHomePage)

module.exports = router;