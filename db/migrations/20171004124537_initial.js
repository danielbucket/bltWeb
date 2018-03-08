
exports.up = (knex, Promise) => {
  return Promise.all([
  	knex.schema.createTable('users', table => {
  		table.increments('id').primary()
      
  		table.string('user_name')
  		table.string('email')
      table.string('password')
      
  		table.timestamps(true, true)
  	}),

  	knex.schema.createTable('passwords', table => {
  		table.increments('id').primary()
  		table.string('password')

  		table.timestamps(true, true)
  	})
	])
};

exports.down = (knex, Promise) => {
  return Promise.all([  
  	knex.schema.dropTable('users')
	])
};
