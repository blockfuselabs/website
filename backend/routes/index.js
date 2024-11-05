const express = require('express');

// Middlewares
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeSuperAdmin = require('../middlewares/authorizeSuperAdmin');
const authorizeArticleAccess = require('../middlewares/authorizeArticleAccess');
// Controllers
const ArticleController = require('../controllers/articleController');
const AuthController = require('../controllers/authController');
const TeamController = require('../controllers/teamController');
const userController = require('../controllers/userController');
const upload = require("../config/uploadConfig");

const router = express.Router();

router.get('/', userController.hello);

// Authentication Routes
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

// Team Routes
router.post('/team', authMiddleware, authorizeSuperAdmin, TeamController.add);

// Article Routes
router.post('/articles', authMiddleware, authorizeArticleAccess, upload.single('image'), ArticleController.create);
router.get('/articles', ArticleController.getAll)
router.get('/articles/:identifier', ArticleController.getOne)
router.delete('/articles/:id', authMiddleware, authorizeArticleAccess, ArticleController.delete)
router.put('/articles/:id',  upload.single('image'), authMiddleware,authorizeArticleAccess, ArticleController.update)
module.exports = router;