const { Article } = require('../models');

class ArticleController {

  static async create(req, res) {
    try {

      res.status(201).json({ 
        message: 'Article created successfully.', 
        team: teamResponse 
      });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ 
        error: 'Unable to post article.', 
        details: error.message 
      });
    }
  }
}

module.exports = ArticleController;