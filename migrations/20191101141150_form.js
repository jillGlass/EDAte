exports.up = (knex, Promise) => {
  return knex.schema.createTable('form', (table) => {
    table.increments('id').primary()
    table.string('hobby')
    table.integer('age')
    table.string('gender')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('form')
}
