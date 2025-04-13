const { Article, Team, User } = require('../models');
const { Op, where } = require('sequelize');
const path=require('path');
const fs=require('fs');
const cloudinary = require('../config/cloudinaryConfig');

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
          team_member_id,
          is_featured,
        },
     
      } = req;
      // Custom validations
      if(!title || !content){
        return res.status(400).json({
          message: "Article not created",
          error: "All Field are required"
        });
      }

      if(title.trim().length < 5 || title.trim() > 255 ){
        return res.status(400).json({
          message:"Article not created",
          error: "Title must be between 5 and 255 characters"
        });
      }

      if(content.trim().length< 255){
        return res.status(400).json({
          error:"Article not created",
          message: "Article is less than 255 characters"
        })
      }
      
      const author_id = req.user.id;
      const author_type = (team_member_id?'team':'user');
      const team_member = team_member_id ?? '';
      let imagePath = null;

      if (req.file) {
        
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        
        const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
          resource_type: 'image',
          folder: 'articles'
        });
        imagePath = cloudinaryResponse.secure_url;
      } else {
        return res.status(400).json({
          error: 'Article not created',
          message: 'Please upload a featured image for the article',
        });
      }

      const article = await Article.create(
        {
          author_id: author_id,
          author_type,
          team_member_id: team_member,
          title,
          content,
          image: imagePath,
          slug: article_slug,
          is_featured: is_featured,
          is_published: true,
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
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;
        
        const { count, rows: articles } = await Article.findAndCountAll({
          where: {
            is_published: true,
          },
          offset: parseInt(offset),
          limit: parseInt(limit),
          attributes: ['id', 'author_id', 'slug', 'team_member_id', 'title', 'image', 'content', 'is_featured', 'author_type'],
          include: [
            {
              model: User,
              as: 'author',
              attributes: ['fullname'],
            },
            {
              model: Team,
              as: 'teamAuthor',
              attributes: ['fullname'],
            }
          ],
        });
        
        const mappedArticles = articles.map((article) => {
          const authorName = article.author_type === 'team'
            ? article.teamAuthor?.fullname
            : article.author?.fullname;
          return { ...article.toJSON(), author_name: authorName };
        });
        
        const totalPages = Math.ceil(count / limit);
        const currentPage = parseInt(page);
        const hasNextPage = currentPage < totalPages;
        const hasPrevPage = currentPage > 1;
    
        res.status(200).json({
          message: 'Articles retrieved successfully.',
          data: {
            articles: mappedArticles,
            pagination: {
              total: count,
              per_page: parseInt(limit),
              current_page: currentPage,
              total_pages: totalPages,
              has_next_page: hasNextPage,
              has_prev_page: hasPrevPage,
            },
          },
        });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
          error: 'Unable to retrieve articles.',
          details: error.message,
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
    
        const article = await Article.findOne({
          where: { [Op.or]: [where] },
          include: [
            {
              model: User,
              as: 'author',
              attributes: ['fullname']
            },
            {
              model: Team,
              as: 'teamAuthor',
              attributes: ['fullname']
            },
          ],
        });
    
        if (!article) {
          return res.status(404).json({
            error: 'Not found',
            details: 'Article not found.',
          });
        }
    
        const author = article.team_member_id
          ? article.teamAuthor.fullname
          : article.author.fullname;
    
        const articleResponse = { ...article.toJSON(), author };
    
        res.status(200).json({
          message: 'Article retrieved successfully.',
          article: articleResponse,
        });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
          error: 'Unable to retrieve article.',
          details: error.message,
        });
      }
    }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      
      const article = await Article.findOne({
        where: { id }
      });

      if (!article) {
        return res.status(404).json({
          error: 'Not found',
          details: 'Article not found.'
        });
      }

      await article.destroy();

      res.status(200).json({
        message: 'Article deleted successfully.'
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to delete article.',
        details: error.message
      });
    }
  }
  
  static async update(req, res){

    const {id} = req.params;
    const {
      body:
      {
        title,
        image,
        content,
        is_featured,
        is_published,
      },
    } = req;
   
  
    try{
      const article = await Article.findOne(
        {
          where: {id}
        }
      );
      if(!article){
        return res.status(404).json({
          error:"Not found",
          message:"Article not found"
  
        })
      }
      // Check if title and content are strings
  if (typeof title !== 'string' || typeof content !== 'string') {
    return res.status(400).json({ error: 'Title and content must be strings.' });
  }
      if(title){
        if(title.trim().length < 5 || title.trim() > 255 ){
          return res.status(400).json({
            message:"Could  not update aritcle",
            error: "Title must be between 5 and 255 characters"
          });
        }
        // update title and slug
        const slug_package = (await import('slug')).default;
        const article_slug = slug_package(title);
        article.slug = article_slug;
        article.title = title;
      }
      if(content){
        if(content.trim().length< 255){
          return res.status(400).json({
            error:"Could not update Article",
            message: "Article is less than 255 characters"
          })
        }
        article.content = content;
      }
      if(req.file){
        console.log(req)
        if(article.image){
          const oldImagePath = path.resolve(article.image);
          fs.unlink(oldImagePath, (error)=>{
            if(error) console.log("Error in deleting Image");
            console.log("Successfully update the filepath")
          });
        // save new image
        article.image = req.file.path;
        console.log("Successfully update the filepath")
        }
      }

      if(is_featured){
        article.is_featured = is_featured;
      }
      
      if(is_published){
        article.is_published = is_published;
      }

      await article.save();
      const uploadedArticle = {...article.toJSON()};
      return res.status(201).json({
        message:"Article updated successfully",
      article: uploadedArticle});
    }
    catch(error){
      console.log('Error:', error);
      res.status(500).json(
        {
          error:'Unable to update article',
          details: error.message
        }
      )
    }
  }

  static async getUserArticles(req, res) {
    try {
      const { identifier } = req.params;

      const { page = 1, limit = 10 } = req.query;
      const offset = (page - 1) * limit;

      const where = {};
      if (!isNaN(identifier)) {
        where.id = identifier;
      } else {
        where.slug = identifier;
      }

      const team = await Team.findOne({
        where: { [Op.or]: [where] }
      });

      if (!team) {
        return res.status(404).json({
          error: 'Not found',
          details: 'Team member not found.'
        });
      }

      const { count, rows: articles } = await Article.findAndCountAll({
        where: { team_member_id: identifier },
        offset: parseInt(offset),
        limit: parseInt(limit),
      });

      const totalPages = Math.ceil(count / limit);
      const currentPage = parseInt(page);
      const hasNextPage = currentPage < totalPages;
      const hasPrevPage = currentPage > 1;

      res.status(200).json({
        message: 'Team member articles retrieved successfully.',
        data: {
          articles,
          pagination: {
            total: count,
            per_page: parseInt(limit),
            current_page: currentPage,
            total_pages: totalPages,
            has_next_page: hasNextPage,
            has_prev_page: hasPrevPage,
          },
        },
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to retrieve articles.',
        details: error.message,
      });
    }
  
  }
}

module.exports = ArticleController;
