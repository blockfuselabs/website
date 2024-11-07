const { Application } = require('../models');
const { Op } = require('sequelize');

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
        
            const { 
                fullname, 
                email, 
                phone, 
                gender, 
                residential_address, 
                country, 
                state, 
                referral_source, 
                application_type 
            } = req.body;

            const applictaion = await Application.create({
                fullname: fullname.toLowerCase(), 
                email, 
                phone, 
                gender: gender.toLowerCase(), 
                residential_address: residential_address.toLowerCase(), 
                country: country.toLowerCase(), 
                state: state.toLowerCase(), 
                referral_source: referral_source.toLowerCase(), 
                application_type: application_type.toLowerCase()
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