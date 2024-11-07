const { Sequelize } = require('sequelize');
const config = require('./config');

const envConfig = config[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize(envConfig.database, envConfig.username, envConfig.password, {
  host: envConfig.host,
  dialect: envConfig.dialect,
});

module.exports = { sequelize };
