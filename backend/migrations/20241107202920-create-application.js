'use strict';

const { fields } = require('../config/uploadConfig');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM("male", "female", "others"),
        allowNull: false
      },
      residential_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      referral_source: {
        type: Sequelize.STRING,
        allowNull: false
      },
      application_type: {
        type: Sequelize.ENUM("waitlist", "web2", "web3"),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }, {
      indexes: [
        {
          fields: ["country"],
        },
        {
          fields: ["state"],
        },
        {
          fields: ["gender"],
        },
        {
          fields: ["referral_source"],
        },
        {
          fields: ["application_type", "created_at"],
        },
      ]
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('applications');
  }
};