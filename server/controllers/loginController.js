const db = require('../knex')

const newUser = (req,res) => {
	const userData = req.body.user;
	
	console.log(userData)
	// db('users').where('user_name', userData.userName)
	// .select('*')
	// .then(user => res.status(404).json({ userData }) )
	// .catch(error => res.status(500).json({ error: error }))
}



const login = (req,res) => {
	const user = req.body.user;

	console.log('bleh bleh: ', req.body)

}


module.exports = {
	newUser,
	login
}