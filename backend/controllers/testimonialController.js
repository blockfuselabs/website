const { Testimonial } = require('../models');

// Create a new testimony
exports.createTestimony = async (req, res) => {
  try {
    const { fullname, image, testimony } = req.body;
    const newTestimony = await Testimonial.create({
      fullname,
      image,
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
