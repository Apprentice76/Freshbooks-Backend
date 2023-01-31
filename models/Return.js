const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

const Return = sequelize.define('Return_History', {
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
	returnDate: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
})

module.exports = Return
