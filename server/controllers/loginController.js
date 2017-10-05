const db = require('../knex')

const newUser = (req,res) => {
	const userData = req.body;
	console.log('userData: ', userData)

	db('users').where('user_name', userData.userName)
	.select('*')
	.then(user => res.status(404).json({ userData }) )
	.catch(error => res.status(500).json({ error: error }))
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