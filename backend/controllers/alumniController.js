const { Alumni, Cohort } = require('../models');
const { Op } = require('sequelize')

class AlumniController {
    static async addAlumni(req, res) {
        try {
            const { cohort_id, fullname, major, github_link, linkedin_link } = req.body;

            if (!fullname || !major) {
                return res.status(400).json({
                    error: "Validation failed",
                    message: "All fields are required."
                });
            }

            const alumni = await Alumni.create({
                cohort_id,
                fullname,
                major,
                github_link,
                linkedin_link
            });

            const alumniResponse = { ...alumni.toJSON() };

            res.status(201).json({
                message: 'Alumni added successfully.',
                alumni: alumniResponse
            });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({
                error: 'Unable to add cohort.',
                message: error.message
            });
        }
    }

    static async updateAlumni(req, res) {
        try {
            const { id } = req.params;
            const { fullname, major, github_link, linkedin_link } = req.body;

            const alumni = await Alumni.findOne({
                where: { id }
            });

            if(!alumni) {
                return res.status(404).json({
                    error: "Not Found",
                    message: "Alumni not found,"
                });
            }


            await alumni.update({
                fullname: fullname || alumni.fullname,
                major: major || alumni.major,
                github_link: github_link || alumni.github_link, 
                linkedin_link: linkedin_link || alumni.linkedin_link 
            });

            res.status(200).json({
                message: "Alumni updated successfully.",
                alumni: alumni.toJSON()
            });


        } catch (error) {
            console.error(error)
            res.status(500).json({
                error: "Unable to update alumni.",
                message: error.message
            });
        }
    }

    static async deleteAlumni(req, res) {
        try {
            const { id } = req.params;

            const alumni = await Alumni.findOne({
                where: { id }
            });

            console.log(await alumni)

            if(!alumni) {
                return res.status(404).json({
                    error: "Not found",
                    message: "Alumni not found."
                });
            };

            await alumni.destroy();

            res.status(200).json({
                message: "Alumni deleted successfully."
            })

        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Unable to delete alumni.",
                message: error.message
            });
        }
    }

    static async getAllAlumni(req, res) {
        try {
            const { identifier } = req.params;
            
            const where = {};
            if (!isNaN(identifier)) {
                where.id = identifier;
            } else {
                where.slug = identifier;
            }

            const cohort = await Cohort.findOne({
                where: { [Op.or]: [where] }
            });

            if (!cohort) {
                return res.status(404).json({
                error: 'Not found',
                details: 'Cohort not found.'
                });
            }

            const alumnis = await Alumni.findAndCountAll({
                where: { cohort_id: cohort.id }
            });

            if (!alumnis) {
                return res.status(404).json({
                    error: 'Not found',
                    details: 'No alumnis in this cohort.'
                });
            }

            return res.status(200).json({
                message: 'Alunmis retrieved successfully',
                alumnis
            });

        } catch (error) {
            console.error(error);
        }
    }
}


module.exports = AlumniController;
