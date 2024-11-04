'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alumnis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      cohort_id: {
        type: Sequelize.BIGINT,
        references: {
          model: {
            tableName: 'cohorts',
          },
          key: 'id',
        }
      },
      fullname: {
        type: Sequelize.STRING
      },
      major: {
        type: Sequelize.STRING
      },
      github_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      linkedin_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('alumnis');
  }
};