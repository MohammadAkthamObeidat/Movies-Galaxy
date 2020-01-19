const express = require('express');

const router = express.Router();
const authController = require('../controllers/AuthController');

// @GET
// Return home page.
router.get('/', authController.homePage);
// @GET
// Return one user data.
router.post('/login', authController.login);
// @POST
// Add new user.
router.post('/signup', authController.signUp);
// @POST
// Logout.
router.post('/logout', authController.logout);

// Export The Router.
module.exports = router;
