
exports.seed = (knex, Promise) => {
  return knex('passwords').del()
    .then( () => {
      return knex('passwords').insert([
        {id: 1, password: 'password1'},
        {id: 2, password: 'password2'},
        {id: 3, password: 'password3'}
      ]);
    });
};
