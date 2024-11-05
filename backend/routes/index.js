const express = require('express');

/**
 * Middlewares
 **/
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeSuperAdmin = require('../middlewares/authorizeSuperAdmin');
const authorizeArticleAccess = require('../middlewares/authorizeArticleAccess');

/**
 * Controllers
 **/
const ArticleController = require('../controllers/articleController');
const AuthController = require('../controllers/authController');
const CohortController = require('../controllers/cohortController');
const TeamController = require('../controllers/teamController');
const userController = require('../controllers/userController');

const router = express.Router();


/**
 * Routes
 **/
router.get('/', userController.hello);

// Authentication Routes
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

// Team Routes
router.post('/team', authMiddleware, authorizeSuperAdmin, TeamController.add);
router.put('/team/:id', authMiddleware, authorizeSuperAdmin, TeamController.update); 
router.delete('/team/:id', authMiddleware, authorizeSuperAdmin, TeamController.delete);
router.get('/team/',   TeamController.getAll);
router.get('/team/:id', TeamController.getById);

// Article Routes
router.post('/articles', authMiddleware, authorizeArticleAccess, ArticleController.create);

// Cohort Routes
router.post('/cohorts', authMiddleware, authorizeSuperAdmin, CohortController.add);
router.get('/cohorts', CohortController.getAll);
router.get('/cohorts/:identifier', CohortController.getOne);
router.put('/cohorts/:id', authMiddleware, authorizeSuperAdmin, CohortController.update);
router.delete('/cohorts/:id', authMiddleware, authorizeSuperAdmin, CohortController.delete);

module.exports = router;