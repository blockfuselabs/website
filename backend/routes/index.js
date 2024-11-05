const express = require('express');

/**
 * Middlewares
 **/
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeSuperAdmin = require('../middlewares/authorizeSuperAdmin');
const authorizeArticleAccess = require('../middlewares/authorizeArticleAccess');
const { validateEvent, validateEventUpdate } = require('../middlewares/eventRequest');

/**
 * Controllers
 **/
const ArticleController = require('../controllers/articleController');
const AuthController = require('../controllers/authController');
const CohortController = require('../controllers/cohortController');
const EventController = require('../controllers/eventController');
const TeamController = require('../controllers/teamController');
const userController = require('../controllers/userController');
const alumniController = require('../controllers/alumniController');
const AlumniController = require('../controllers/alumniController');

const router = express.Router();


/**
 * Routes
 **/
// User Routes
router.post('/users', authMiddleware, authorizeSuperAdmin, userController.addUser);
router.get('/users', authMiddleware, authorizeSuperAdmin, userController.getAllUsers);
router.get('/users/:id', authMiddleware, authorizeSuperAdmin, userController.getUser);
router.put('/users/:id', authMiddleware, authorizeSuperAdmin, userController.updateUser);
router.delete('/users/:id', authMiddleware, authorizeSuperAdmin, userController.deleteUser);

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

//Alumni Routes
router.post('/alumni', authMiddleware, authorizeSuperAdmin, AlumniController.addAlumni);
router.put('/alumni/:id', authMiddleware, authorizeSuperAdmin, AlumniController.updateAlumni);
router.delete('/alumni/:id', authMiddleware, authorizeSuperAdmin, AlumniController.deleteAlumni);
router.get('/alumni/all/:identifier', authMiddleware, authorizeSuperAdmin, AlumniController.getAllAlumni);
router.get('/alumni/:id', authMiddleware, authorizeSuperAdmin, AlumniController.getOneAlumni);


// Event Routes
router.get('/events', EventController.getAll);
router.get('/events/show/:id', EventController.getOne);
router.post('/events/store', validateEvent, EventController.store);
router.patch('/events/update/:id', validateEventUpdate, EventController.update);
router.delete('/events/delete/:id', EventController.delete);

module.exports = router;