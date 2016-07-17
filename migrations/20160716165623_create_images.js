
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', function(t) {
  	t.increments('id').unsigned().primary();
  	t.datetime('createdAt').notNull();
  	t.datetime('updatedAt').nullable();
  	t.datetime('deletedAt').nullable();

  	t.string('originalFileName').notNull();
  	t.string('original').notNull();
  	t.string('medium').nullable();
  	t.string('small').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images');
};
