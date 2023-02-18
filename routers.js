const router = require('express').Router();
const homeController = require('./contollers/homeController');
const authController = require('./contollers/authController');

router.get('/', homeController.getHomePage);
router.get('/login', authController.getLoginPage);
router.post('/login', authController.postLoginPage);
router.get('/register', authController.getRegisterPage);
router.post('/register', authController.postRegisterPage);
router.get('/logout', authController.logout);

module.exports = router;