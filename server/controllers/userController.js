const db = require('../knex')

const verifyUser = (req,res) => {
}

const getAllUsers = (req, res) => {
	db('users')
	.select('*')
	.then(users => res.status(200).json({ users }))
	.catch(error => res.status(500).json({ error }))
}

module.exports = {
	verifyUser,
	getAllUsers
}