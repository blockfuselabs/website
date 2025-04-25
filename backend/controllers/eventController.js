const { Event, EventPhotos } = require('../models');
const { Op } = require('sequelize');
const cloudinary = require('../config/cloudinaryConfig');

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
      
      const { identifier } = req.params;
    
       if (!identifier) {
          return res.status(400).json({
            error: 'Invalid request',
            details: 'Identifier is required.',
          });
        }
    
        const where = {};
        if (!isNaN(identifier)) {
          where.id = parseInt(identifier);
        } else {
          where.slug = identifier;
        }
    
        const event = await Event.findOne({
          where: { [Op.or]: [where] }
        });

      if (!event) {
        return res.status(404).json({
          error: 'Not found',
          details: 'Event not found.'
        });
      }
      
      const eventPhotos = await EventPhotos.findAndCountAll({
        where: { event_id: event.id }
      });
      
      res.status(200).json({
        message: 'Event retrieved successfully.',
        event: {
          ...event.toJSON(),
          event_photos: eventPhotos.rows,
          photos_count: eventPhotos.count,
        }
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
      
      const { title, description, link, youtube_link, twitter_link, start_date, end_date } = req.body;

      if (!title || !start_date || !end_date || !description || !link) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'All fields are required.' 
        });
      }
      
      let event_youtube_link = youtube_link ?? null;
      let event_twitter_link = twitter_link ?? null;
      
      let imagePath = null;

        if (req.file) {
            
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
            
            const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
              resource_type: 'image',
              folder: 'events',
              quality: 'auto:low',
              width: 800,
              height: 600,
              crop: 'limit',
              format: 'png'
            });
            imagePath = cloudinaryResponse.secure_url;
        } else {
            return res.status(400).json({
              error: 'Event not added',
              message: 'Please upload the event picture',
            });
        }

      const eventSlug = slug(`${title}`);

      const event = await Event.create({
        title: title,
        start_date: start_date,
        end_date: end_date,
        description: description,
        link: link,
        youtube_link: event_youtube_link,
        twitter_link: event_twitter_link,
        image: imagePath,
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
  
  static async addEventPhoto(req, res) {
    try {
      
      const { id } = req.params;
    
       if (!id) {
          return res.status(400).json({
            error: 'Invalid request',
            details: 'Event ID is required.',
          });
        }
    
        const event = await Event.findOne({
            where: { id }
        });
    
        if (!event) {
            return res.status(404).json({
              error: 'Not found',
              details: 'Event not found.'
            });
        }
      
      let imagePath = null;

        if (req.file) {
            
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
            
            const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
              resource_type: 'image',
              folder: 'event_photos',
              quality: 'auto:low',
              width: 800,
              height: 600,
              crop: 'limit',
              format: 'png'
            });
            imagePath = cloudinaryResponse.secure_url;
        } else {
            return res.status(400).json({
              error: 'Event photo not added',
              message: 'Please upload a photo from the event',
            });
        }

      const eventPhoto = await EventPhotos.create({
        event_id: id,
        photo_url: imagePath
      });

      const eventResponse = { ...eventPhoto.toJSON() };

      res.status(201).json({ 
        message: 'Event photo added successfully.', 
        event: eventResponse 
      });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ 
        error: 'Unable to add event photo.', 
        details: error.message 
      });
    }
  }
  
  static async getAllPhotos(req, res) {
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

  static async getEventsByType(req, res) {
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

      const queryType = req.query.type ? req.query.type.toLowerCase() : 'upcoming';

      const whereClause = {};

      if (queryType === 'past') {
        whereClause.end_date = { [Op.lt]: new Date() };
      } else {
        whereClause.end_date = { [Op.gt]: new Date() };
      }
      
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
        ? (queryType != 'past' ? 'ASC' : sortOrder.toUpperCase()) 
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
        message: `${queryType} events retrieved successfully.`,
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
        error: `Unable to retrieve ${queryType} events.`,
        details: error.message
      });
    }
  }

  static async update(req, res) {
    try {

      const slug = (await import('slug')).default;
      
      const { id } = req.params;
      const { title, description, link, youtube_link, twitter_link, start_date, end_date } = req.body;

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
      
      let imagePath = event.image;

        if (req.file) {
            
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
            
            const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
              resource_type: 'image',
              folder: 'events',
              quality: 'auto:low',
              width: 800,
              height: 600,
              crop: 'limit',
              format: 'png'
            });
            imagePath = cloudinaryResponse.secure_url;
        }

      await event.update({
        title: title || event.title,
        description: description || event.description,
        image: imagePath,
        start_date: start_date || event.start_date,
        end_date: end_date || event.end_date,
        link: link || event.link,
        youtube_link: youtube_link || event.youtube_link,
        twitter_link: twitter_link || event.twitter_link,
        slug: newSlug
      });

      res.status(200).json({
        message: 'Event updated successfully.',
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