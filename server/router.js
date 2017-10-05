const express = require('express')
const router = express.Router();

const userController = require('./controllers/userController')
const loginController = require('./controllers/loginController')

router.all(
	'/login',
	userController.verifyUser,
	loginController.login )

router.get('/users', userController.getAllUsers)
router.post('/signup', loginController.newUser)

module.exports = router;