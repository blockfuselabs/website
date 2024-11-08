'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("faqs", {
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:Sequelize.BIGINT
    },
    question:{
      allowNull:false,
      type: Sequelize.STRING,
    },
    answer:{
      allowNull:false,
      type:Sequelize.STRING
    },
    createdAt:{
      type:Sequelize.DATE,
      allowNull:false
    },
    updatedAt:{
      type: Sequelize.DATE,
      allowNull: false
    }
   });
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.dropTable('faqs');
  }
};
