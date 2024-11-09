'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Testimonial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define associations here if needed
    }
  }

  Testimonial.init({
    fullname:DataTypes.STRING,
    image:  DataTypes.STRING,
    testimony:DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Testimonial',
    tableName: 'Testimonies',
    timestamps: true, // This automatically adds createdAt and updatedAt fields
  });

  return Testimonial;
};
