'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventPhotos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EventPhotos.belongsTo(models.Event, { 
        foreignKey: 'event_id', 
        as: 'event', 
        onDelete: 'CASCADE' 
      });
    }
  }
  EventPhotos.init({
    event_id: DataTypes.INTEGER,
    photo_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EventPhotos',
    tableName: 'event_photos'
  });
  return EventPhotos;
};