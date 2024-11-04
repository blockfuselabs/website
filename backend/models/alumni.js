'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alumni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alumni.init({
    cohort_id: DataTypes.BIGINT,
    fullname: DataTypes.STRING,
    major: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alumni',
    tableName: 'alumnis',
  });
  return Alumni;
};