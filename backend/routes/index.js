const express = require('express');

/**
 * Middlewares
 **/
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeSuperAdmin = require('../middlewares/authorizeSuperAdmin');
const authorizeArticleAccess = require('../middlewares/authorizeArticleAccess');
const { validateEvent, validateEventUpdate } = require('../middlewares/eventRequest');
const { validateApplication } = require('../middlewares/applicationRequest');


const upload = require("../config/uploadConfig");

/**
 * Controllers
 **/
const ArticleController = require('../controllers/articleController');
const AuthController = require('../controllers/authController');
const CohortController = require('../controllers/cohortController');
const EventController = require('../controllers/eventController');
const EmailController = require('../controllers/emailController');
const TeamController = require('../controllers/teamController');
const userController = require('../controllers/userController');
const AlumniController = require('../controllers/alumniController');
const CommunityController = require('../controllers/communityController');
const TestimonyController = require('../controllers/testimonialController');
const ApplicationController = require('../controllers/applicationController');
const HelperController = require('../controllers/helperController');
const NewsletterController = require('../controllers/newsletterController');

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
router.post('/team', authMiddleware, authorizeSuperAdmin, upload.single('image'), TeamController.add);
router.put('/team/:id', authMiddleware, authorizeSuperAdmin, upload.single('image'), TeamController.update); 
router.delete('/team/:id', authMiddleware, authorizeSuperAdmin, TeamController.delete);
router.get('/team/',   TeamController.getAll);
router.get('/team/:id', TeamController.getById);
router.get('/team/articles/:identifier', ArticleController.getUserArticles)

// Testimonial Routes
router.post('/testimonies', authMiddleware, authorizeArticleAccess, upload.single('image'), TestimonyController.createTestimony);
router.get('/testimonies', TestimonyController.getAllTestimonies);
// router.get('/testimonies/:id', TestimonyController.getTestimonyById);
router.put('/testimonies/:id', TestimonyController.updateTestimony);
router.delete('/testimonies/:id', TestimonyController.deleteTestimony);

// Article Routes
router.post('/articles', authMiddleware, authorizeArticleAccess, upload.single('image'), ArticleController.create);
router.get('/articles', ArticleController.getAll)
router.get('/articles/:identifier', ArticleController.getOne)
router.delete('/articles/:id', authMiddleware, authorizeArticleAccess, ArticleController.delete)
router.put('/articles/:id',  upload.single('image'), authMiddleware,authorizeArticleAccess, ArticleController.update)

// Cohort Routes
router.post('/cohorts', authMiddleware, authorizeSuperAdmin, upload.single('image'), CohortController.add);
router.get('/cohorts', CohortController.getAll);
router.get('/cohorts/:identifier', CohortController.getOne);
router.put('/cohorts/:id', authMiddleware, authorizeSuperAdmin, upload.single('image'), CohortController.update);
router.delete('/cohorts/:id', authMiddleware, authorizeSuperAdmin, CohortController.delete);

//Alumni Routes
router.post('/alumni', authMiddleware, authorizeSuperAdmin, upload.single('image'), AlumniController.addAlumni);
router.put('/alumni/:id', authMiddleware, authorizeSuperAdmin, AlumniController.updateAlumni);
router.delete('/alumni/:id', authMiddleware, authorizeSuperAdmin, AlumniController.deleteAlumni);
router.get('/alumni/all/:identifier', AlumniController.getAllAlumni);
router.get('/alumni/:id', AlumniController.getOneAlumni);

// Event Routes
router.get('/events', EventController.getAll);
router.get('/events/query', EventController.getEventsByType);
router.get('/events/:identifier', EventController.getOne);
router.post('/events', authMiddleware, authorizeSuperAdmin, upload.single('image'), EventController.store);
router.patch('/events/:id', validateEventUpdate, authMiddleware, authorizeSuperAdmin, upload.single('image'), EventController.update);
router.delete('/events/:id', authMiddleware, authorizeSuperAdmin, EventController.delete);

// Event Photos Route
router.get('/event-photos/:identifier', EventController.getAllPhotos);
router.post('/event-photos/:id', authMiddleware, authorizeSuperAdmin, upload.single('image'), EventController.addEventPhoto);

// Application Routes
router.get('/applications', authMiddleware, authorizeSuperAdmin, ApplicationController.getAll);
router.get('/applications/:id', authMiddleware, authorizeSuperAdmin, ApplicationController.getOne);
router.post('/applications/web2', upload.single('transaction_receipt'), ApplicationController.store);
router.post('/applications/web3', ApplicationController.store);
router.delete('/applications/:id', authMiddleware, authorizeSuperAdmin, ApplicationController.delete);

// Helper Routes
router.get('/countries', HelperController.getCountries);

// Community Routes
router.get('/community-images', authMiddleware, CommunityController.getCommunityImages);
router.post('/community-create', authMiddleware, upload.single('image'), CommunityController.create);
router.put('/community-update/:id', authMiddleware, upload.single('image'), CommunityController.update);

// Contact
router.post('/contact-us', EmailController.contactUsEmail);
router.post('/contact-us-test', EmailController.testMailtrap);

// Newsletter
router.post('/newsletter', NewsletterController.submit);

module.exports = router;