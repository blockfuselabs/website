'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Application.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.ENUM("male", "female", "others"),
    residential_address: DataTypes.STRING,
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    referral_source: DataTypes.STRING,
    application_type: DataTypes.ENUM("waitlist", "web2", "web3"),
    github_link: DataTypes.STRING,
    full_time: DataTypes.BOOLEAN,
    programming_language: DataTypes.STRING,
    time_dedication: DataTypes.STRING,
    code_experience: DataTypes.STRING,
    transaction_receipt: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Application',
    tableName: 'applications'
  });
  return Application;
};