const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)

module.exports = {
  getFriends
  
}

function getFriends () {
  return db('friends')
    .select()
}



