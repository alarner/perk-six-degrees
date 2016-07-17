
exports.up = function(knex, Promise) {
  return knex.schema.createTable('links', function(t) {
  	t.increments('id').unsigned().primary();
  	t.datetime('createdAt').notNull();
  	t.datetime('updatedAt').nullable();
  	t.datetime('deletedAt').nullable();

  	t.string('label').notNull();
  	t.string('url').notNull();

  	t.integer('order').notNull();
  	t.integer('userId').notNull().references('id').inTable('users').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('links');
};
