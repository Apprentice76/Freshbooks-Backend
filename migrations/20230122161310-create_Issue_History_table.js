'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('Issue_Histories', {
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
			issueDate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE,
		})
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('Issue_Histories')
	},
}
