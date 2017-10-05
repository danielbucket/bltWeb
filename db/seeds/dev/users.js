
exports.seed = (knex, Promise) => {
  return knex('users').del()
    .then( () => {
      return knex('users').insert([
        {id: 1, user_name: 'user1', password: 'password1'},
        {id: 2, user_name: 'user2', password: 'password2'},
        {id: 3, user_name: 'user3', password: 'password3'}
      ]);
    });
};
