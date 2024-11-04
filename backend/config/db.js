const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(
    config.development.database, config.development.username, config.development.password, 
    {
        port: 3307,
        host: config.development.host,
        dialect: config.development.dialect,
    }
);

module.exports = { sequelize };
