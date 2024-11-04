const { Article } = require('../models');

class ArticleController {

  static async create(req, res) {

    
    try {
      const slug_package = (await import('slug')).default;
      const article_slug = slug_package(req.body.title);
      
      const {
        body:
        {
          title,
          content,
          image,
        },
     
      } = req;

      const author_id = req.user.id;
       const imagePath = req.file ? req.file.path : null; 
      const article = await Article.create(
        {
          author_id,
          title,
          content,
          image: imagePath,
          slug: article_slug,
          views: 0
        }
      );
      const articleResponse = { ...article.toJSON() };

      res.status(201).json({ 
        message: 'Article added successfully.', 
        article: articleResponse 
      });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ 
        error: 'Unable to post article.', 
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

      const { count, rows: article } = await Article.findAndCountAll({
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
        message: 'Article retrieved successfully.',
        data: {
          article,
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
        error: 'Unable to retrieve articles.',
        details: error.message
      });
    }
  }
}

module.exports = ArticleController;