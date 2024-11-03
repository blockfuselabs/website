require('dotenv').config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASS, // Access the environment variable
    database: process.env.DB_NAME,  // Access the environment variable
    host: "127.0.0.1",
    dialect: "mysql"
  },
};
