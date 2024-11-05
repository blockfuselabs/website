const bcrypt = require('bcrypt');
const { User, Role } = require('../models');
const { Op } = require('sequelize');
const SECRET_KEY = "12345";
const SALT_ROUNDS = 10;

class UserController {
  static async addUser(req, res) {
    try {
      
      const { role_id, fullname, email, phone, password } = req.body;

      if (!fullname || !email || !phone || !password || !role_id) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'All fields are required.' 
        });
      }

      if (role_id > 4 || role_id < 1) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'Invalid permission specified.' 
        });
      }

      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ 
          error: 'Account creation failed.', 
          details: 'Email already exist' 
        });
      }

      const existingPhone = await User.findOne({ where: { phone } });
      if (existingPhone) {
        return res.status(409).json({ 
          error: 'Account creation failed.', 
          details: 'Phone already exist' 
        });
      }

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      const user = await User.create({
        fullname,
        email,
        phone,
        password: hashedPassword,
        role_id,
      });

      const userResponse = { ...user.toJSON() };
      delete userResponse.password;

      res.status(201).json({ 
        message: 'User registered successfully', 
        user: userResponse 
      });

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ 
        error: 'Unable to add user.', 
        details: error.message 
      });
    }
  }

  static async getAllUsers(req, res) {
    try {

      const {
        role,
        page = 1,
        limit = 10,
        sortBy = 'fullname',
        sortOrder = 'DESC',
        search
      } = req.query;

      const offset = (page - 1) * limit;

      const whereClause = {};

      if (search) {
        whereClause[Op.or] = [
          { fullname: { [Op.iLike]: `%${search}%` } },
          { email: { [Op.iLike]: `%${search}%` } },
          { phone: { [Op.iLike]: `%${search}%` } }
        ];
      }

      const allowedSortFields = ['fullname', 'role_id', 'phone', 'email'];
      const validSortBy = allowedSortFields.includes(sortBy) ? sortBy : 'fullname';

      const validSortOrder = ['ASC', 'DESC'].includes(sortOrder.toUpperCase()) 
        ? sortOrder.toUpperCase() 
        : 'DESC';

      const { count, rows: users } = await User.findAndCountAll({
        where: whereClause,
        include: [
          {
            model: Role,
            as: 'role',
            attributes: ['name', 'id'],
          },
        ],
        order: [[validSortBy, validSortOrder]],
        limit: parseInt(limit),
        offset: parseInt(offset),
        attributes: { exclude: ['password', 'token', 'tokenExpiresAt'] }
      });

      const totalPages = Math.ceil(count / limit);
      const currentPage = parseInt(page);
      const hasNextPage = currentPage < totalPages;
      const hasPrevPage = currentPage > 1;

      res.status(200).json({
        message: 'Users retrieved successfully.',
        data: {
          users,
          pagination: {
            total: count,
            per_page: parseInt(limit),
            current_page: currentPage,
            total_pages: totalPages,
            has_next_page: hasNextPage,
            has_prev_page: hasPrevPage
          },
          filters: {
            role,
            search
          },
          sorting: {
            sortBy: validSortBy,
            sortOrder: validSortOrder
          }
        }
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to retrieve users.',
        details: error.message
      });
    }
  }

  static async getUser(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findOne({
        where: { id },
        attributes: { exclude: ['password', 'token', 'tokenExpiresAt'] }
      });

      if (!user) {
        return res.status(404).json({
          error: 'Not found',
          details: 'User not found.'
        });
      }

      res.status(200).json({
        message: 'User details retrieved successfully.',
        user
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to retrieve user details.',
        details: error.message
      });
    }
  }

  static async updateUser(req, res) {
    try {
      
      const { id } = req.params;
      const { fullname, email, phone, role_id } = req.body;

      const user = await User.findOne({
        where: { id },
        attributes: { exclude: ['password', 'token', 'tokenExpiresAt'] }
      });

      if (!user) {
        return res.status(404).json({
          error: 'Not found',
          details: 'User not found.'
        });
      }

      if (!fullname || !email || !phone || !role_id) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'All fields are required.' 
        });
      }

      if (role_id > 4 || role_id < 1) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'Invalid permission specified.' 
        });
      }

      if (email !== user.email) {
        const existingEmail = await User.findOne({ where: { email: email } });
        if (existingEmail) {
          return res.status(400).json({
            error: 'Validation failed',
            details: 'A user with this email already exists.'
          });
        }
      }

      if (phone !== user.phone) {
        const existingPhone = await User.findOne({ where: { phone: phone } });
        if (existingPhone) {
          return res.status(400).json({
            error: 'Validation failed',
            details: 'A user with this phone number already exists.'
          });
        }
      }

      await user.update({
        fullname: fullname || user.name,
        email: email || user.email,
        phone: phone || user.phone,
        role_id: role_id || user.role_id
      });

      res.status(200).json({
        message: 'User updated successfully.',
        user: user.toJSON()
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to update user.',
        details: error.message
      });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      
      const user = await User.findOne({
        where: { id }
      });

      if (!user) {
        return res.status(404).json({
          error: 'Not found',
          details: 'User not found.'
        });
      }

      if (user.role_id == 1) {
        return res.status(404).json({
          error: 'Unable to user',
          details: 'You cannot delete super admin.'
        });
      }

      await user.destroy();

      res.status(200).json({
        message: 'User deleted successfully.'
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: 'Unable to delete user.',
        details: error.message
      });
    }
  }

}

module.exports = UserController;
