const { Community } = require('../models');
const { Op, where } = require('sequelize');
const { fs } = require('fs');
const path=require('path');
const cloudinary = require('../config/cloudinaryConfig');
const { error } = require('console');


class CommunityController {
    static async create(req, res) {
        try {
            const { image_id } = req.body;

            const findExistingImage = await Community.findOne(
                {
                    where: {image_id}
                }
            );

            if(findExistingImage) {
                return res.status(409).json({
                    error: "Community image already exists",
                    message: "Cannot add duplicate image"
                })
            }

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
                    where: {image_id}
                }
            );

            if(!community) {
                return res.status(404).json({
                    error: "Not found",
                    message: "Community image not found"
                })
            }


            if(req.file) {
                if (req.file) {
        
                    const b64 = Buffer.from(req.file.buffer).toString("base64");
                    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
                    
                    const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
                      resource_type: 'image',
                      folder: 'community'
                    });
                    community.image_link = cloudinaryResponse.secure_url;
                    await community.save();

                  } else {
                    return res.status(400).json({
                      error: 'Community image not created',
                      message: 'Please upload a featured image for the community',
                    });
                }
            }

            await community.save();

            return res.status(201).json({
                message: "Community image updated successfully"
            })

            
        } catch (error) {
            res.status(500).json({
                error: "Unable to update image path",
                message: error.message
            })
        }
    }

    static async getCommunityImages(req, res) {
        try {
            const communityImages = await Community.findAll();

            if(!community) {
                return res.status(404).json({
                    error: "Not found",
                    message: "Community images not found"
                });
            }

            return res.status(200).json({
                message: "Community images retrieved successfully",
                communityImages
            });
        } catch (error) {
            res.status(500).json({
                error: "Unable to retrieve all community images",
                message: error.message
            });
        }
    }
}

module.exports = CommunityController;