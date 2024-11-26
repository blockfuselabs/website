'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('applications', 'github_link', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      queryInterface.addColumn('applications', 'full_time', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }),

      queryInterface.addColumn('applications', 'programming_language', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      queryInterface.addColumn('applications', 'time_dedication', {
        type: Sequelize.STRING,
        allowNull: false,
      }),

      queryInterface.addColumn('applications', 'code_experience', {
        type: Sequelize.STRING,
        allowNull: true,
      }),

      queryInterface.addColumn('applications', 'transaction_receipt', {
        type: Sequelize.STRING,
        allowNull: true,
      })
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('applications', 'github_link'),
      queryInterface.removeColumn('applications', 'full_time'),
      queryInterface.removeColumn('applications', 'programming_language'),
      queryInterface.removeColumn('applications', 'time_dedication'),
      queryInterface.removeColumn('applications', 'code_experience'),
      queryInterface.removeColumn('applications', 'transaction_receipt')
    ]);
  }
};