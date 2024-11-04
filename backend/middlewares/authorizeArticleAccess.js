const { User, Article } = require('../models');

async function authorizeArticleAccess(req, res, next) {
  try {
    const user = await User.findByPk(req.user.id);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Allow Super Admin to manage all articles
    if (user.role_id === 1) {
      return next();
    }

    // Allow Admin and Author to create articles
    if (req.method === 'POST' && (user.role_id === 2 || user.role_id === 3)) {
      return next();
    }

    // Admin or Author can only manage their own articles
    if (req.method !== 'POST') {
      const articleId = req.params.id;
      const article = await Article.findByPk(articleId);

      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }

      if (article.userId !== user.id && user.role_id !== 1) {
        return res.status(403).json({ message: 'Access denied' });
      }
    }

    next();
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}

module.exports = authorizeArticleAccess;
