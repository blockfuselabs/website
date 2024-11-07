const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret';

async function authorizeSuperAdmin(req, res, next) {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user || user.role_id !== 1) {
      return res.status(403).json({ message: 'Access denied, insufficient permissions' });
    }
    next();
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}

module.exports = authorizeSuperAdmin;
