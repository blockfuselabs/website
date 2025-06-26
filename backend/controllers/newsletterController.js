const { Newsletter } = require('../models');

class NewsletterController {
  static async submit(req, res) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'Email is required.' 
        });
      }

      const emailExist = await Newsletter.findOne({
        where: { email }
      });

      if (emailExist) {
        return res.status(201).json({
            message: 'Email added successfully.',
        });
      }

      await Newsletter.create({
        fullname: "User",
        email
      });

      res.status(201).json({ 
        message: 'Email added successfully.'
      });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ 
        error: 'Unable to add email.', 
        details: error.message 
      });
    }
  }
}

module.exports = NewsletterController;