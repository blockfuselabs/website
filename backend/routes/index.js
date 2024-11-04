const express = require('express');

// Middlewares
const authMiddleware = require('../middleware/authMiddleware');
const authorizeSuperAdmin = require('../middleware/authorizeSuperAdmin');

// Controllers
const ArticleController = require('../controllers/articleController');
const AuthController = require('../controllers/authController');
const TeamController = require('../controllers/teamController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.hello);

// Authentication Routes
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

// Team Routes
router.post('/team', authMiddleware, authorizeSuperAdmin, TeamController.add);

// Article Routes
router.post('/articles', authMiddleware, authorizeArticleAccess, ArticleController.create);

module.exports = router;