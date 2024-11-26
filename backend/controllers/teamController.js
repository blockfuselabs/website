const { Team } = require('../models');
const cloudinary = require('../config/cloudinaryConfig');

class TeamController {
    
  static async add(req, res) {
    try {
      
      const slug = (await import('slug')).default;

      const { fullname, position, about, twitter, github, linkedin, warpcast } = req.body;

      if (!fullname || !position) {
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
              folder: 'team',
              quality: 'auto:low',
              width: 800,
              height: 600,
              crop: 'limit',
              format: 'png'
            });
            imagePath = cloudinaryResponse.secure_url;
        } else {
            return res.status(400).json({
              error: 'Team member not added',
              message: 'Please upload a photo of the team member',
            });
        }

      const memberSlug = slug(`${fullname} ${position}`);

      const team = await Team.create({
        fullname,
        position,
        about,
        image: imagePath,
        slug: memberSlug,
        github,
        twitter,
        linkedin,
        warpcast
      });

      const teamResponse = team.toJSON();

      res.status(201).json({ 
        message: 'Team member added successfully.', 
        team: teamResponse 
      });

    } catch (error) {
      res.status(500).json({ 
        error: 'Unable to add team member.', 
        details: error.message 
      });
    }
  }

  // Update Team
  static async update(req, res) {
      try {
        const { id } = req.params;
        const { fullname, position, about, twitter, github, linkedin, warpcast } = req.body;
    
        const team = await Team.findByPk(id);
        const slug = (await import('slug')).default;
        
        if (!team) {
          return res.status(404).json({
            error: 'Not found',
            details: 'Team member not found.'
          });
        }
        
        let imagePath = team.image;
        if (req.file) {
          const b64 = Buffer.from(req.file.buffer).toString("base64");
          let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
          
          const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
            resource_type: 'image',
            folder: 'team',
            quality: 'auto:low',
              width: 800,
              height: 600,
              crop: 'limit',
              format: 'png'
          });
          imagePath = cloudinaryResponse.secure_url;
        }
        
        team.fullname = fullname || team.fullname;
        team.position = position || team.position;
        team.about = about || team.about;
        team.image = imagePath;
        team.twitter = twitter || team.twitter;
        team.github = github || team.github;
        team.linkedin = linkedin || team.linkedin;
        team.warpcast = warpcast || team.warpcast;
        team.slug = ((fullname === team.fullname && position === team.position) || (!fullname && !position)) 
                      ? team.slug 
                      : slug(`${fullname} ${position}`);
    
        await team.save();
    
        res.status(200).json({
          message: 'Team member updated successfully.',
          team: team.toJSON()
        });
      } catch (error) {
        res.status(500).json({
          error: 'Unable to update team member.',
          details: error.message
        });
      }
    }

   /**
   * Get all team members
   **/
  static async getAll(req, res) {
    try {
      const teams = await Team.findAll();

      if(!teams) {
        res.status(400).json({
          error: 'Not found',
          details: 'No team members found.'
        });
      }

      res.status(200).json({ message: 'Team members retrieved successfully', teams });

    } catch (error) {
      res.status(500).json({
        error: 'Unable to retrieve team members.',
        details: error.message
      });
    }
  }
/**
   * Get a team member by ID
   **/
  static async getById(req, res) {
    try {
      const { id } = req.params;
      const team = await Team.findByPk(id);

      if (!team) {
        return res.status(404).json({
          error: 'Not found',
          details: 'Team member not found.'
        });
      }

      res.status(200).json({ message: 'Team member retrieved successfully', team });
    } catch (error) {
      res.status(500).json({
        error: 'Unable to retrieve team member.',
        details: error.message
      });
    }
  }

  /**
   * Delete a team member by ID
   **/
  static async delete(req, res) {
    try {
      const { id } = req.params;
      
      const team = await Team.findByPk(id);

      if (!team) {
        return res.status(404).json({
          error: 'Not found',
          details: 'Team member not found.'
        });
      }

      await team.destroy();

      res.status(200).json({ message: 'Team member deleted successfully.' });
    } catch (error) {
      res.status(500).json({
        error: 'Unable to delete team member.',
        details: error.message
      });
    }
  }

}


module.exports = TeamController;
