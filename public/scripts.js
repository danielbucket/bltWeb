const printUserData = user => {
	console.log('user: ', user)
}

const isNewUser = user => {
	fetch('api/v1/signup', {
		method: "POST",
		body: JSON.stringify(user),
		headers: {"Content-Type": "application/json"}
	})
	.then(userData => userData.json())
	.then(userData => printUserData(userData))
	.catch(error => console.log( error ))
}

const checkUser = user => {
	fetch('api/v1/users')
	.then(data => data.json())
	.then(usersList => {
		const found = usersList.users.find(list => {
			return user.name === list.user_name
		})

		if(!found) {
			return	isNewUser(user)
		}

			console.log('found: ', found)
	})
}

$('#submitBtn').on('click', () => {
	const user_name = $('.username-text').val()
	const email = $('.email-text').val()
	const password = $('.password-text').val()

	checkUser({user_name,email,password})

})

$(document).ready( () => {
	console.log('connected')
})