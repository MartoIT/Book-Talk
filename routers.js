const router = require('express').Router();
const homeController = require('./contollers/homeController');
const authController = require('./contollers/authController');
const booksController = require('./contollers/booksControllers');

router.get('/', homeController.getHomePage);
router.get('/login', authController.getLoginPage);
router.post('/login', authController.postLoginPage);
router.get('/register', authController.getRegisterPage);
router.post('/register', authController.postRegisterPage);
router.get('/logout', authController.logout);

router.get('/catalog', booksController.getCatalogPage);

router.get('/create', booksController.getCreategPage);
router.post('/create', booksController.postCreateReview);

module.exports = router;