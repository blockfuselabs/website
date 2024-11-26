const { Application } = require('../models');
const { Op } = require('sequelize');
const { body, validationResult } = require('express-validator');
const cloudinary = require('../config/cloudinaryConfig');

class ApplicationController {

    static async getAll(req, res) {
        try {

            const {
            fullname,
            email,
            application_type,
            country,
            createdAt,
            page = 1,
            limit = 25,
            sortBy = 'application_type',
            sortOrder = 'DESC',
            search
            } = req.query;

            const offset = (page - 1) * limit;

            const whereClause = {};
            
            if (createdAt) {
            whereClause.start_date = { [Op.gte]: createdAt };
            }

            if (search) {
            whereClause[Op.or] = [
                { fullname: { [Op.iLike]: `%${search}%` } },
                { email: { [Op.iLike]: `%${search}%` } },
                { application_type: { [Op.iLike]: `%${search}%` } },
                { country: { [Op.iLike]: `%${search}%` } },
            ];
            }

            const allowedSortFields = ['id', 'fullname', 'email', 'country', 'application_type', 'createdAt'];
            const validSortBy = allowedSortFields.includes(sortBy) ? sortBy : 'application_type';

            const validSortOrder = ['ASC', 'DESC'].includes(sortOrder.toUpperCase()) 
            ? sortOrder.toUpperCase() 
            : 'DESC';

            const { count, rows: applications } = await Application.findAndCountAll({
            where: whereClause,
            order: [[validSortBy, validSortOrder]],
            limit: parseInt(limit),
            offset: parseInt(offset)
            });

            const totalPages = Math.ceil(count / limit);
            const currentPage = parseInt(page);
            const hasNextPage = currentPage < totalPages;
            const hasPrevPage = currentPage > 1;

            res.status(200).json({
            message: 'applications retrieved successfully.',
            data: {
                applications,
                pagination: {
                total: count,
                per_page: parseInt(limit),
                current_page: currentPage,
                total_pages: totalPages,
                has_next_page: hasNextPage,
                has_prev_page: hasPrevPage
                },
                filters: {
                fullname,
                country,
                application_type,
                search
                },
                sorting: {
                sortBy: validSortBy,
                sortOrder: validSortOrder
                }
            }
            });

        } catch (error) {

            console.error('Error:', error);

            res.status(500).json({
            error: 'Unable to retrieve applications.',
            details: error.message
            });
        }
    }
    
    static async getOne(req, res) {
        try {
            const { id } = req.params;

        
            const application = await Application.findOne({
            where: { id }
            });

            if (!application) {
            return res.status(404).json({
                error: 'Not found',
                details: 'application not found.'
            });
            }

            res.status(200).json({
            message: 'application retrieved successfully.',
            application
            });

        } catch (error) {

            console.error('Error:', error);

            res.status(500).json({
            error: 'Unable to retrieve application.',
            details: error.message
            });
        }
    }

    static async store(req, res) {
        try {
            
            await body('fullname').notEmpty().withMessage('Full name is required').run(req);
            await body('github_link').isURL().withMessage('A valid GitHub link is required').run(req);
            await body('full_time').isIn(['yes', 'no']).withMessage('Full time must be yes or no').run(req);
            await body('programming_language').notEmpty().withMessage('Programming language is required').run(req);
            await body('time_dedication').notEmpty().withMessage('Time dedication is required').run(req);
            await body('code_experience').notEmpty().withMessage('Coding experience is required').run(req);
            await body('email').isEmail().withMessage('A valid email is required').run(req);
            await body('phone').notEmpty().withMessage('Phone number is required').run(req);
            await body('gender').isIn(['male', 'female', 'other']).withMessage('Gender is required').run(req);
            await body('residential_address').notEmpty().withMessage('Residential address is required').run(req);
            await body('country').notEmpty().withMessage('Country is required').run(req);
            await body('state').notEmpty().withMessage('State is required').run(req);
            await body('referral_source').notEmpty().withMessage('Referral source is required').run(req);
            await body('application_type').isIn(['web2', 'web3', 'waitlist']).withMessage('Application type must be web2 or web3').run(req);
            
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ error: "Application not successfull", errors: errors.array() });
            }
        
            const { 
                fullname,
                github_link,
                full_time,
                programming_language,
                time_dedication,
                code_experience, 
                email, 
                phone, 
                gender, 
                residential_address, 
                country, 
                state, 
                referral_source, 
                application_type,
                transaction_receipt 

            } = req.body;
            
            let imagePath = null;
            if (application_type.toLowerCase() === 'web2') {
                if (!req.file) {
                    return res.status(400).json({
                        error: 'Application not created',
                        message: 'Transaction receipt is required for web2 applications',
                    });
                } else {
                    const b64 = Buffer.from(req.file.buffer).toString("base64");
                    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
                    
                    const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
                        resource_type: 'image',
                        folder: 'applications'
                    });
                    imagePath = cloudinaryResponse.secure_url;
                }
            }
            
            const applictaion = await Application.create({
                fullname,
                email, 
                phone, 
                gender: gender.toLowerCase(), 
                residential_address: residential_address.toLowerCase(), 
                country: country.toLowerCase(), 
                state: state.toLowerCase(), 
                referral_source: referral_source.toLowerCase(), 
                application_type: application_type.toLowerCase(),
                full_time: full_time.toLowerCase() === 'yes' ? true : false,
                transaction_receipt: application_type.toLowerCase() === 'web2' ? imagePath : null,
                github_link,
                programming_language,
                time_dedication,
                code_experience, 
            });

            const applictaionResponse = { ...applictaion.toJSON() };
                res.status(201).json({ 
                message: 'applictaion was submitted successfully!', 
                applictaion: applictaionResponse 
            });

        } catch (error) {

            console.error('Error:', error);

            res.status(500).json({ 
            error: 'Unable to submit applictaion.', 
            details: error.message 
            });
        }
    }

    static async delete(req, res) {
        try {
          const { id } = req.params;
          
          const application = await Application.findOne({
            where: { id }
          });
    
          if (!application) {
            return res.status(404).json({
              error: 'Not found',
              details: 'application not found.'
            });
          }
    
          await application.destroy();
    
          res.status(200).json({
            message: 'application deleted successfully.'
          });
          
        } catch (error) {

            console.error('Error:', error);

            res.status(500).json({
            error: 'Unable to delete application.',
            details: error.message
            });
        }
    }
}

module.exports = ApplicationController;