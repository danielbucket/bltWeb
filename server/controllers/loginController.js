const db = require('../knex')

const newUser = (req,res) => {
	const user = req.body
	const userData = req.body;
	console.log('userData: ', userData)

	db('users')
	.insert(user, 'user_name')
	.then(data => res.status(201).json(data[0]) )
	.catch(error => res.status(500).json({ error }))
}



const login = (req,res) => {
	const user = req.body.user;
	const password = req.body.password;


	db('users')
	.insert(user)
	.then(id => {
			console.log('body: ', id[0])
			db('passwords')
		.insert(password)
		.then(() => res.status(202).json({ user }))
		.catch(error => res.status(500).json({ error }))
	})

}


module.exports = {
	newUser,
	login
}