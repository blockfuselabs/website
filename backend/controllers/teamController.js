const { Team } = require('../models');

class TeamController {
  /**
   * TODO: - Add validation for each data.
   *       - Image should be uploaded, processed and the image URL should be saved.
   *       - Protect the controller, only authenticated users with Super Admin role should be allowed to access this controller
   **/
  static async add(req, res) {
    try {
      const { fullname, position, about, image, slug } = req.body;

      if (!fullname || !position || !about || !image || !slug) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'All fields are required.' 
        });
      }

      const team = await Team.create({
        fullname,
        position,
        about,
        image,
        slug,
      });

      const teamResponse = { ...team.toJSON() };

      res.status(201).json({ 
        message: 'Team member added successfully.', 
        team: teamResponse 
      });

    } catch (error) {
      console.error('Error:', error);
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
      const { fullname, position, about, image, slug } = req.body;

      const team = await Team.findByPk(id);

     // Checking if the team member exists in the database.
      if (!team) {
        return res.status(404).json({ error: 'Team member not found.' });
      }
      // Updating the fields of the team member object
      team.fullname = fullname || team.fullname;
      team.position = position || team.position;
      team.about = about || team.about;
      team.image = image || team.image;
      team.slug = slug || team.slug;

      await team.save();

      res.status(200).json({
        message: 'Team member updated successfully.',
        team
      });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to update team member.',
        details: error.message
      });
    }
  }

}


module.exports = TeamController;