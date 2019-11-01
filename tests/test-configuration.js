const knex = require('knex')

const config = require('./knexfile').staging

module.exports = {
  getTestDb: () => knex(config),

  initialise: db =>
    db.migrate
      .latest()
      .then(() => db.seed.run()),

  cleanup: db => db.destroy()
}
