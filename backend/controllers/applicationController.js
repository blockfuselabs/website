const { Application } = require('../models/application');

class ApplicationController {

  static async store(req, res) {
    try {
      
        const { 
            fullname, 
            email, 
            phone, 
            gender, 
            residential_address, 
            country, 
            state, 
            referral_source, 
            application_type 
        } = req.body;


        const applictaion = await Application.create({
            fullname, 
            email, 
            phone, 
            gender, 
            residential_address, 
            country, 
            state, 
            referral_source, 
            application_type
        });

        const applictaionResponse = { ...applictaion.toJSON() };
            res.status(201).json({ 
            message: 'applictaion was submitted successfully!', 
            applictaion: applictaionResponse 
        });

    } catch (error) {

        console.error('Error:', error);

        res.status(500).json({ 
        error: 'Unable to submit applictaion.', 
        details: error.message 
        });
    }
  }

}

module.exports = ApplicationController;