
exports.up = (knex, Promise) => {
  return Promise.all([
  	knex.schema.createTable('users', table => {
  		table.increments('id').primary()
  		table.string('user_name')
  		table.string('email')

  		table.timestamps(true, true)
  	}),

  	knex.schema.createTable('passwords', table => {
  		table.increments('id').primary()
  		table.string('password')
  		table.integer('user_id').unsigned()
  		table.foreign('user_id').references('users.id')

  		table.timestamps(true, true)
  	})
  	])
};

exports.down = (knex, Promise) => {
  return Promise.all([
  	knex.schema.dropTable('passwords'),
  	knex.schema.dropTable('users')
	])
};
