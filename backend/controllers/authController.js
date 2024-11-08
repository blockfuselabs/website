const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User, Role } = require('../models');
const SECRET_KEY = "12345";
const SALT_ROUNDS = 10;

class AuthController {
  static async register(req, res) {
    try {
      const { fullname, email, phone, password } = req.body;

      if (!fullname || !email || !password) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'Required fields missing' 
        });
      }

      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ 
          error: 'Registration failed', 
          details: 'Email already exist' 
        });
      }

      const existingPhone = await User.findOne({ where: { phone } });
      if (existingPhone) {
        return res.status(409).json({ 
          error: 'Registration failed', 
          details: 'Phone already exist' 
        });
      }

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      const user = await User.create({
        fullname,
        email,
        phone,
        password: hashedPassword,
        role_id: 4,
      });

      const userResponse = { ...user.toJSON() };
      delete userResponse.password;

      res.status(201).json({ 
        message: 'User registered successfully', 
        user: userResponse 
      });

    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ 
        error: 'Registration failed', 
        details: error.message 
      });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: 'Email and password required' 
        });
      }

      const user = await User.findOne({
        where: { email },
        include: [
          {
            model: Role,
            as: 'role',
            attributes: ['name', 'id'],
          },
        ],
      });
      if (!user) {
        return res.status(404).json({ 
          error: 'Login failed', 
          details: 'User not found' 
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ 
          error: 'Login failed', 
          details: 'Invalid credentials' 
        });
      }

      const token = jwt.sign(
        {
          id: user.id, 
          role_id: user.role_id,
          email: user.email
        }, 
        SECRET_KEY, 
        { expiresIn: '1h' }
      );

      res.json({ 
        message: 'Login successful', 
        token,
        user: {
          id: user.id,
          fullname: user.fullname,
          email: user.email,
          phone: user.phone,
          role_id: user.role_id,
          role: user.role.name
        }
      });

    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ 
        error: 'Login failed', 
        details: error.message 
      });
    }
  }
}

module.exports = AuthController;