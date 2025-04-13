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
      Article.belongsTo(models.User, { 
        foreignKey: 'author_id', 
        as: 'author', 
        onDelete: 'CASCADE' 
      });
      
      Article.belongsTo(models.Team, { 
        foreignKey: 'team_member_id', 
        as: 'teamAuthor', 
        onDelete: 'CASCADE' 
      });
    }
  }
  Article.init({
    author_id: DataTypes.BIGINT,
    author_type: DataTypes.STRING,
    team_member_id: DataTypes.BIGINT,
    title: DataTypes.STRING,
    content: DataTypes.TEXT('long'),
    image: DataTypes.STRING,
    slug: DataTypes.STRING,
    is_featured: DataTypes.BOOLEAN,
    is_published: DataTypes.BOOLEAN,
    views: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Article',
    tableName: 'articles',
  });
  return Article;
};