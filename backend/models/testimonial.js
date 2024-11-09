const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Testimonial extends Model {}
  Testimonial.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    testimony: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Testimonial',
    tableName: 'testimonials',
  });

  return Testimonial;
};