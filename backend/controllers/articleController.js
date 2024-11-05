const { Article } = require('../models');
const { Op, where } = require('sequelize');
const path=require('path');
const fs=require('fs');
const { toTwos } = require('ethers');
const { timeLog } = require('console');


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
      // Custom validations
      if(!title || !content){
        return res.status(400).json({
          message: "Artcile not Created",
          error: "All Field are required"
        });
      }

      if(title.trim().length < 5 || title.trim() > 255 ){
        return res.status(400).json({
          message:"Could  not update aritcle",
          error: "Title must be between 5 and 255 characters"
        });
      }

      if(content.trim().length< 255){
        return res.status(400).json({
          error:"Could not update Article",
          message: "Article is less than 255 characters"
        })
      }
      
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
      const { page = 1, limit = 10 } = req.query;
      const offset = (page - 1) * limit;

      
      const { count, rows: articles } = await Article.findAndCountAll({
        offset: parseInt(offset),
        limit: parseInt(limit),
      });

     
      const totalPages = Math.ceil(count / limit);
      const currentPage = parseInt(page);
      const hasNextPage = currentPage < totalPages;
      const hasPrevPage = currentPage > 1;

      res.status(200).json({
        message: 'Articles retrieved successfully.',
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
        where: { [Op.or]: [where] }
      });

      if (!article) {
        return res.status(404).json({
          error: 'Not found',
          details: 'Article not found.'
        });
      }

      const articleResponse = { ...article.toJSON() };
      res.status(200).json({
        message: 'Article retrieved successfully.',
        article: articleResponse
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to retrieve article.',
        details: error.message
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
        content
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
}

module.exports = ArticleController;