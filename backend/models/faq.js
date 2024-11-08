'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Faq.init({
    id:{
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    },
    question:{
     type: DataTypes.STRING,
     allowNull: false,
    },
     answer: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
  }, 
},
  {
    sequelize,
    modelName: 'Faq',
    tableName: 'faqs',
    timestamps: true, 
  },

);
  return Faq;
};