const { Team } = require('../models');

class TeamController {
  /**
   * TODO: - Add validation for each data.
   *       - Image should be uploaded, processed and the image URL should be saved.
   *       - Protect the controller, only authenticated users with Super Admin role should be allowed to access this controller
   **/
  static async add(req, res) {
    try {
      
      const slug = (await import('slug')).default;

      const { fullname, position, about, image } = req.body;

      if (!fullname || !position || !about || !image) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'All fields are required.' 
        });
      }

      const memberSlug = slug(`${fullname} ${position}`);

      const team = await Team.create({
        fullname,
        position,
        about,
        image,
        slug: memberSlug,
      });

      const teamResponse = { ...team.toJSON() };

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
      const { fullname, position, about, image } = req.body;

      const team = await Team.findByPk(id);

      const slug = (await import('slug')).default;

     // Checking if the team member exists in the database.
      if (!team) {
        return res.status(404).json({
          error: 'Not found',
          details:  'Team member not found.'
        });
      }
      // Updating the fields of the team member object
      team.fullname = fullname || team.fullname;
      team.position = position || team.position;
      team.about = about || team.about;
      team.image = image || team.image;
      team.slug = (fullname == team.fullname && position == team.position)?team.slug:slug(`${fullname} ${position}`);

      await team.save();

      res.status(200).json({
        message: 'Team member updated successfully.',
        team
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
