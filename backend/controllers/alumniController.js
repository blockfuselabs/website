const { Alumni } = require('../models');

class AlumniController {
    static async addAlumni(req, res) {
        try {
            const { cohort_id, fullname, major } = req.body;

            if (!fullname || !major) {
                return res.status(400).json({
                    error: "Validation failed",
                    message: "All fields are required."
                });
            }

            const alumni = await Alumni.create({
                cohort_id,
                fullname,
                major
            });

            const alumniResponse = { ...cohort_id.toJSON() };

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
            const { fullname, major } = req.body;

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
                major: major || alumni.major
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

            const alumni = Alumni.findOne({
                where: { id }
            });

            if(!alumni) {
                return res.status(404).json({
                    error: "Not found",
                    message: "Alumni not found."
                });
            }

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
}


module.exports = AlumniController;
