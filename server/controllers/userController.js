const db = require('../knex')

const verifyUser = (req,res,next) => {
const user_name = req.body.name;

db('users').where('user_name', user_name)
.select('user_name')
.then(data => {

	if(!data.length) {
		return res.redirect(202, '/api/v1/signup', {
			"method":"POST",
			"body": JSON.stringify(req.body),
			"headers": {"ContentType": "application/json"}
		})
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