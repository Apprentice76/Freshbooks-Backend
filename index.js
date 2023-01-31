const express = require('express')
const cors = require('cors')

const Book = require('./models/Book')
const Issue = require('./models/Issue')
const Return = require('./models/Return')

require('./database/connection')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000

app.get('/', async (request, response) => {
	return response.status(200).send('<h1>Server Running!!!</h1>')
})

app.get('/books', async (request, response) => {
	const allBooks = await Book.findAll()
	return response.status(200).json(allBooks)
})

app.put('/update', async (request, response) => {
	const body = request.body
	console.log(body)

	const book = await Book.findAll({
		where: {
			id: body.id,
		},
	}).then((books) => books[0])

	const newBook = await Book.update(body, {
		where: {
			id: body.id,
		},
	})

	if (
		book.issueStatus === 'Available' &&
		body.issueStatus === 'Unavailable'
	) {
		await Issue.create({
			title: book.title,
			author: book.author,
			issueDate: Date.now(),
		})
	} else if (
		book.issueStatus === 'Unavailable' &&
		body.issueStatus === 'Available'
	) {
		await Return.create({
			title: book.title,
			author: book.author,
			returnDate: Date.now(),
		})
	}
	return response.status(200).json(newBook)
})

app.post('/add-book', async (request, response) => {
	const body = request.body
	console.log(body)
	const book = await Book.create({
		title: body.title,
		author: body.author,
		description: body.description,
	})
	return response.status(201).json(book)
})

app.delete('/remove-book/:id', async (request, response) => {
	await Book.destroy({
		where: {
			id: request.params.id,
		},
	})
	return response.status(204).send({ message: 'User deleted' })
})

app.get('/issue-history', async (request, response) => {
	const issueHistory = await Issue.findAll()
	response.status(200).json(issueHistory)
})

app.get('/return-history', async (request, response) => {
	const returnHistory = await Return.findAll()
	response.status(200).json(returnHistory)
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
