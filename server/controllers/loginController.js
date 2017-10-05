const db = require('../knex')

const newUser = (req,res) => {
	const user = req.body

	db('users')
	.insert(user, 'user_name')
	.then(data => res.status(201).json(data[0]) )
	.catch(error => res.status(500).json({ error }))
}



const login = (req,res) => {
	const user = req.body.user;

	console.log('bleh bleh: ', req.body)

}


module.exports = {
	newUser,
	login
}