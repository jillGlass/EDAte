const knex = require('knex')
const config = require('./knexfile').development

const db = knex(config)

module.exports = {
  getFriends,
  formInput,
  getMatch

}

function getFriends (database = db) {
  return database('friends')
    .select()
}

function formInput (input, database = db) {  
  const hobby = input.hobby
  const age = input.age
  const gender = input.gender
  const record = {
    hobby: hobby,
    age: age,
    gender: gender
  }
  return database('form').insert(record)
}

function getMatch (friendsTable, database = db) {
  return database(friendsTable)
    .join(friendsTable, 'friends.id', '=', 'form.id')
    .where('friends.hobby', 'form.hobby')
    .where('friends.age', 'form.age')
    .where('friends.gender', 'form.gender')
}
