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
		const found = usersList.users.find(listItem => {

			if (user.user_name === listItem.user_name
							&& user.email === listItem.email)
			{ return listItem }
		})

		if(!found){ return isNewUser(user) }
		if(found){ return printUserData(found) }
		
	})
	.catch(error => console.log( error ))
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