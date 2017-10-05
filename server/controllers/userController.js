const db = require('../knex')

const verifyUser = (req,res,next) => {
	const user_name = req.body.user_name;
	
	db('users').where('user_name', user_name)
	.select('user_name')
	.then(data => {

		if(!data.length) {
			res.redirect(202, '/api/v1/signup')
		}

		next()
	})
	.catch(error => res.status(500).json({ error }))

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