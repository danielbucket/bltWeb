
exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then( () => {
      return knex('users').insert([
        {id: 1, user_name: 'user1', email: 'danieljbucket1@gmail.com', password: 'password1'},
        {id: 2, user_name: 'user2', email: 'danieljbucket2@gmail.com', password: 'password2'},
        {id: 3, user_name: 'user3', email: 'danieljbucket3@gmail.com', password: 'password3'}
      ]);
    });
};
	