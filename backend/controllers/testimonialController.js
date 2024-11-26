const { Testimonial } = require('../models');
const cloudinary = require('../config/cloudinaryConfig');

// Create a new testimony
exports.createTestimony = async (req, res) => {
  try {
    const { fullname, testimony } = req.body;
    
    if (!fullname || !testimony) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'All fields are required.' 
        });
    }
    
    let imagePath = null;

    if (req.file) {
        
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        
        const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
          resource_type: 'image',
          folder: 'testimony'
        });
        imagePath = cloudinaryResponse.secure_url;
    } else {
        return res.status(400).json({
          error: 'Testimony not added',
          message: 'Please upload a photo of the person',
        });
    }
        
    const newTestimony = await Testimonial.create({
      fullname,
      image: imagePath,
      testimony
    });
    return res.status(201).json({ message: 'Testimony created successfully', data: newTestimony });
  } catch (error) {
    console.error('Error creating testimony:', error);
    return res.status(500).json({ message: 'Error creating testimony', error });
  }
  
};

// Update a testimony by ID
exports.updateTestimony = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, image, testimony } = req.body;
    const existingTestimony = await Testimonial.findByPk(id);
    if (existingTestimony) {
      await existingTestimony.update({ fullname, image, testimony });
      return res.status(200).json({ message: 'Testimony updated successfully', data: existingTestimony });
    }
    return res.status(404).json({ message: 'Testimony not found' });
  } catch (error) {
    console.error('Error updating testimony:', error);
    return res.status(500).json({ message: 'Error updating testimony', error });
  }
};
// Delete a testimony by ID
exports.deleteTestimony = async (req, res) => {
  try {
    const { id } = req.params;
    const testimony = await Testimonial.findByPk(id);
    if (testimony) {
      await testimony.destroy();
      return res.status(200).json({ message: 'Testimony deleted successfully' });
    }
    return res.status(404).json({ message: 'Testimony not found' });
  } catch (error) {
    console.error('Error deleting testimony:', error);
    return res.status(500).json({ message: 'Error deleting testimony', error });
  }
};



exports.getAllTestimonies = async (req, res) => {
  try {
    const testimonies = await Testimonial.findAll();
    return res.status(200).json({ data: testimonies });
  } catch (error) {
    console.error('Error fetching testimonies:', error);
    return res.status(500).json({ message: 'Error fetching testimonies', error });
  }
};
