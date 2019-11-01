
exports.up = (knex, Promise) => {
  return knex.schema.createTable('friends', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('hobby')
    table.integer('age')
    table.string('gender')
    table.string('image')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('friends')
}
