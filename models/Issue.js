const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

const Issue = sequelize.define('Issue_History', {
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

module.exports = Issue
