const express = require('express');
const AuthController = require('../controllers/authController');
const userController = require('../controllers/userController');
// const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', userController.hello);

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

// Protected route example
// router.get('/profile', authMiddleware, AuthController.profile);

module.exports = router;


module.exports = router;
