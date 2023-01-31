'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('Books', {
			id: {
				type: Sequelize.INTEGER(11),
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			title: {
				type: Sequelize.STRING(300),
				allowNull: false,
			},
			author: {
				type: Sequelize.STRING(300),
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING(500),
				defaultValue: 'No description provided.',
			},
			issueStatus: {
				type: Sequelize.STRING(30),
				defaultValue: 'Available',
				allowNull: false,
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		})
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('Books')
	},
}
