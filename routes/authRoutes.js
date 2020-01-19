const express = require('express');

const router = express.Router();
const authController = require('../controllers/AuthController');

// @GET
// Return home page.
router.route('/').get(authController.homePage);
// @GET
// Return one user data.
router.route('/login').post(authController.login);
// @POST
// Add new user.
router.route('/signup').post(authController.signUp);
// @POST
// Logout.
router.route('/logout').post(authController.logout);

// Export The Router.
module.exports = router;
