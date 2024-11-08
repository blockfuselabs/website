const { Faq} = require('../models');
const { Op, where } = require('sequelize');

class FaqController {

  static async create(req, res) {
    
    try {
      

      const {
        body:
        {
          question,
          answer
        },
     
      } = req;
      // Custom validations
      if(!question|| !answer){
        return res.status(400).json({
          message: "Faqs not created",
          error: "All Field are required"
        });
      }

      if(question.trim().length < 5 || question.trim() > 255 ){
        return res.status(400).json({
          message:" Faqs not created",
          error: "Faqs must be between 5 and 255 characters"
        });
      }

      if(answer.trim().length< 20){
        return res.status(400).json({
          error:"Faqs not created",
          message: "Answer is less than 255 characters"
        })
      }
      

      const faq = await Faq.create(
        {
          question,
          answer
        }
      );
      const faqResponse = { ...faq.toJSON() };

      res.status(201).json({ 
        message: 'Faqs created successfully.', 
        faq: faqResponse 
      });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ 
        error: 'Unable to create  Faq.', 
        details: error.message 
      });
    }
  }


  static async getAll(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const offset = (page - 1) * limit;

      
      const { count, rows: articles } = await Faq.findAndCountAll({
        offset: parseInt(offset),
        limit: parseInt(limit),
      });

     
      const totalPages = Math.ceil(count / limit);
      const currentPage = parseInt(page);
      const hasNextPage = currentPage < totalPages;
      const hasPrevPage = currentPage > 1;

      res.status(200).json({
        message: 'Faq retrieved successfully.',
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
        error: 'Unable to retrieve faq.',
        details: error.message,
      });
    }
  }

  


  static async getOne(req, res) {
    try {
      const { id } = req.params;



      const faq= await Faq.findByPk(id);

      if (!faq) {
        return res.status(404).json({
          error: 'Not found',
          details: 'faq not found.'
        });
      }

      const faqResponse = { ...faq.toJSON() };
      res.status(200).json({
        message: 'Article retrieved successfully.',
        faq: faqResponse
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to retrieve faq.',
        details: error.message
      });
    }
  }


  static async delete(req, res) {
    try {
      const { id } = req.params;
      
      const faq = await Faq.findByPk(id);

      if (!faq) {
        return res.status(404).json({
          error: 'Not found',
          details: 'faq not found.'
        });
      }

      await faq.destroy();

      res.status(200).json({
        message: 'faq deleted successfully.'
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to delete faq.',
        details: error.message
      });
    }
  }

  
  static async update(req, res){

    const {id} = req.params;
    const {
      body:
      {
        question,
        answer
      },
    } = req;
   
  
    try{
      const faq= await Faq.findByPk(id);
      if(!faq){
        return res.status(404).json({
          error:"Not found",
          message:"Faq not found"
  
        })
      }
      // Check if title and content are strings
  if (typeof question !== 'string' || typeof answer !== 'string') {
    return res.status(400).json({ error: 'Question and Answer must be strings.' });
  }
      if(question){
        if(question.trim().length < 5 || question.trim() > 255 ){
          return res.status(400).json({
            message:"Could  not update Question",
            error: "Question must be between 5 and 255 characters"
          });
        }
        // update question
        faq.question = question
      }
      if(answer){
        if(answer.trim().length< 50){
          return res.status(400).json({
            error:"Could not update Faq",
            message: "Answer  is less than 50 characters"
          })
        }
        faq.answer = answer;
      }
      

      await faq.save();
      const uploadedArticle = {...faq.toJSON()};
      return res.status(201).json({
        message:"Faq updated successfully",
      article: uploadedArticle});
    }
    catch(error){
      console.log('Error:', error);
      res.status(500).json(
        {
          error:'Unable to update Faq',
          details: error.message
        }
      )
    }
  }

}
module.exports = FaqController;
