'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article.belongsTo(models.User, { foreignKey: 'author_id', as: 'author', onDelete: 'CASCADE' });
    }
  }
  Article.init({
    author_id: DataTypes.BIGINT,
    title: DataTypes.STRING,
    content: DataTypes.TEXT('long'),
    image: DataTypes.STRING,
    slug: DataTypes.STRING,
    views: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Article',
    tableName: 'articles',
  });
  return Article;
};