'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Community extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Community.init({
    image_link: DataTypes.STRING,
    image_id: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'Community',
    tableName: 'communitys',
  });
  return Community;
};