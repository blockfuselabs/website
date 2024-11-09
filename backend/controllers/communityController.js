const { Community } = require('../models');
const { Op, where } = require('sequelize');
const cloudinary = require('../config/cloudinaryConfig');


class CommunityController {
    static async create(req, res) {
        try {
            const { image_id } = req.body;

            if(!image_id) {
                res.status(400).json({
                    message: "Community image not added",
                    error: "Field is required"
                });
            }

            let imagePath = null;

            if (req.file) {
        
                const b64 = Buffer.from(req.file.buffer).toString("base64");
                let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
                
                const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
                  resource_type: 'image',
                  folder: 'community'
                });
                imagePath = cloudinaryResponse.secure_url;
              } else {
                return res.status(400).json({
                  error: 'Community image not created',
                  message: 'Please upload a featured image for the community',
                });
              }

              const community = await Community.create({
                image_link: imagePath,
                image_id: image_id
              });

              res.status(201).json({
                message: "Community image added successfully"
              });
        } catch (error) {
            res.status(500).json({
                error: "Unable to add community image.",
                message: error.message
            });
        }
    }

    static async update(req, res) {
        const { image_id } = req.body;

        try {
            const community = await Community.findOne(
                {
                    where: {id}
                }
            );

            if(!community) {
                return res.status(404).json({
                    error: "Not found",
                    message: "Community image not found"
                })
            }

            
        } catch (error) {
            
        }
    }
}