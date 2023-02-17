const router = require('express').Router();
const homeController = require('./contollers/homeController');
const authController = require('./contollers/authController');

router.get('/', homeController.getHomePage);
router.get('/login', authController.getLoginPage);
router.get('/register', authController.getRegisterPage);

module.exports = router;