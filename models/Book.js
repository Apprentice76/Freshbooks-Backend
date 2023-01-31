const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

const Book = sequelize.define('Book', {
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
  updatedAt: Sequelize.DATE
})

module.exports = Book
