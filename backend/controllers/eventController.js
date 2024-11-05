const { Event } = require('../models');
const { Op } = require('sequelize');

class EventController {

  static async getAll(req, res) {
    try {

      const {
        title,
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
      
      if (startDate) {
        whereClause.start_date = { [Op.gte]: startDate };
      }
      
      if (endDate) {
        whereClause.end_date = { [Op.lte]: endDate };
      }

      if (search) {
        whereClause[Op.or] = [
          { title: { [Op.iLike]: `%${search}%` } },
          { slug: { [Op.iLike]: `%${search}%` } }
        ];
      }

      const allowedSortFields = ['id', 'title', 'start_date', 'end_date', 'created_at'];
      const validSortBy = allowedSortFields.includes(sortBy) ? sortBy : 'start_date';

      const validSortOrder = ['ASC', 'DESC'].includes(sortOrder.toUpperCase()) 
        ? sortOrder.toUpperCase() 
        : 'DESC';

      const { count, rows: events } = await Event.findAndCountAll({
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
        message: 'Events retrieved successfully.',
        data: {
          events,
          pagination: {
            total: count,
            per_page: parseInt(limit),
            current_page: currentPage,
            total_pages: totalPages,
            has_next_page: hasNextPage,
            has_prev_page: hasPrevPage
          },
          filters: {
            title,
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
        error: 'Unable to retrieve events.',
        details: error.message
      });
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params;

    
      const event = await Event.findOne({
        where: { id }
      });

      if (!event) {
        return res.status(404).json({
          error: 'Not found',
          details: 'event not found.'
        });
      }

      res.status(200).json({
        message: 'event retrieved successfully.',
        event
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to retrieve event.',
        details: error.message
      });
    }
  }

  static async store(req, res) {
    try {
      
      const slug = (await import('slug')).default;
      
      const { title, description, image, link, start_date, end_date } = req.body;

      if (!title || !start_date || !end_date || !description || !link || !image) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'All fields are required.' 
        });
      }

      const eventSlug = slug(`${title}`);

      const event = await Event.create({
        title,
        start_date,
        end_date,
        description,
        link,
        image,
        slug: eventSlug
      });

      const eventResponse = { ...event.toJSON() };

      res.status(201).json({ 
        message: 'event created successfully.', 
        event: eventResponse 
      });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ 
        error: 'Unable to create event.', 
        details: error.message 
      });
    }
  }

  static async update(req, res) {
    try {

      const slug = (await import('slug')).default;
      
      const { id } = req.params;
      const { title, description, image, link, start_date, end_date } = req.body;

      const event = await Event.findOne({
        where: { id }
      });

      if (!event) {
        return res.status(404).json({
          error: 'Not found',
          details: 'event not found.'
        });
      }

      let newSlug = event.slug;
      if (title) {
        newSlug = slug(`${title || event.type}`);

        if (newSlug !== event.slug) {
          const existingevent = await Event.findOne({ where: { slug: newSlug } });
          if (existingevent) {
            return res.status(400).json({
              error: 'Validation failed',
              details: 'Event with this title already exists.'
            });
          }
        }
      }

      await event.update({
        title: title || event.title,
        description: description || event.description,
        image: image || event.image,
        start_date: start_date || event.start_date,
        end_date: end_date || event.end_date,
        link: link || event.link,
        slug: newSlug
      });

      res.status(200).json({
        message: 'event updated successfully.',
        event: event.toJSON()
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to update event.',
        details: error.message
      });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      
      const event = await Event.findOne({
        where: { id }
      });

      if (!event) {
        return res.status(404).json({
          error: 'Not found',
          details: 'event not found.'
        });
      }

      await event.destroy();

      res.status(200).json({
        message: 'event deleted successfully.'
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to delete event.',
        details: error.message
      });
    }
  }

}

module.exports = EventController;