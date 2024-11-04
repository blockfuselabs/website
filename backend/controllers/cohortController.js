const { Cohort } = require('../models');
const { Op } = require('sequelize');

class CohortController {
  static async add(req, res) {
    try {
      
      const slug = (await import('slug')).default;
      
      const { name, start_date, end_date, type, link } = req.body;

      if (!name || !start_date || !end_date || !type || !link) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'All fields are required.' 
        });
      }

      const cohort_slug = slug(`${type} ${name}`);

      const cohort = await Cohort.create({
        name,
        start_date,
        end_date,
        type,
        link,
        slug: cohort_slug
      });

      const cohortResponse = { ...cohort.toJSON() };

      res.status(201).json({ 
        message: 'Cohort added successfully.', 
        cohort: cohortResponse 
      });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ 
        error: 'Unable to add cohort.', 
        details: error.message 
      });
    }
  }

  static async getAll(req, res) {
    try {

      const {
        type,
        startDate,
        endDate,
        page = 1,
        limit = 10,
        sortBy = 'start_date',
        sortOrder = 'DESC',
        search
      } = req.query;

      const offset = (page - 1) * limit;

      const whereClause = {};

      if (type) {
        whereClause.type = type;
      }
      
      if (startDate) {
        whereClause.start_date = { [Op.gte]: startDate };
      }
      
      if (endDate) {
        whereClause.end_date = { [Op.lte]: endDate };
      }

      if (search) {
        whereClause[Op.or] = [
          { name: { [Op.iLike]: `%${search}%` } },
          { type: { [Op.iLike]: `%${search}%` } },
          { slug: { [Op.iLike]: `%${search}%` } }
        ];
      }

      const allowedSortFields = ['id', 'name', 'type', 'start_date', 'end_date', 'created_at'];
      const validSortBy = allowedSortFields.includes(sortBy) ? sortBy : 'start_date';

      const validSortOrder = ['ASC', 'DESC'].includes(sortOrder.toUpperCase()) 
        ? sortOrder.toUpperCase() 
        : 'DESC';

      const { count, rows: cohorts } = await Cohort.findAndCountAll({
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
        message: 'Cohorts retrieved successfully.',
        data: {
          cohorts,
          pagination: {
            total: count,
            per_page: parseInt(limit),
            current_page: currentPage,
            total_pages: totalPages,
            has_next_page: hasNextPage,
            has_prev_page: hasPrevPage
          },
          filters: {
            type,
            startDate,
            endDate,
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
        error: 'Unable to retrieve cohorts.',
        details: error.message
      });
    }
  }

  static async getOne(req, res) {
    try {
      const { identifier } = req.params;

      const where = {};
      if (!isNaN(identifier)) {
        where.id = identifier;
      } else {
        where.slug = identifier;
      }

      const cohort = await Cohort.findOne({
        where: { [Op.or]: [where] }
      });

      if (!cohort) {
        return res.status(404).json({
          error: 'Not found',
          details: 'Cohort not found.'
        });
      }

      res.status(200).json({
        message: 'Cohort retrieved successfully.',
        cohort
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to retrieve cohort.',
        details: error.message
      });
    }
  }

  static async update(req, res) {
    try {

      const slug = (await import('slug')).default;
      
      const { id } = req.params;
      const { name, start_date, end_date, type, link } = req.body;

      const cohort = await Cohort.findOne({
        where: { id }
      });

      if (!cohort) {
        return res.status(404).json({
          error: 'Not found',
          details: 'Cohort not found.'
        });
      }

      let newSlug = cohort.slug;
      if (name || type) {
        newSlug = slug(`${type || cohort.type} ${name || cohort.name}`);

        if (newSlug !== cohort.slug) {
          const existingCohort = await Cohort.findOne({ where: { slug: newSlug } });
          if (existingCohort) {
            return res.status(400).json({
              error: 'Validation failed',
              details: 'A cohort with this name and type already exists.'
            });
          }
        }
      }

      await cohort.update({
        name: name || cohort.name,
        start_date: start_date || cohort.start_date,
        end_date: end_date || cohort.end_date,
        type: type || cohort.type,
        link: link || cohort.link,
        slug: newSlug
      });

      res.status(200).json({
        message: 'Cohort updated successfully.',
        cohort: cohort.toJSON()
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to update cohort.',
        details: error.message
      });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      
      const cohort = await Cohort.findOne({
        where: { id }
      });

      if (!cohort) {
        return res.status(404).json({
          error: 'Not found',
          details: 'Cohort not found.'
        });
      }

      await cohort.destroy();

      res.status(200).json({
        message: 'Cohort deleted successfully.'
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to delete cohort.',
        details: error.message
      });
    }
  }

}

module.exports = CohortController;