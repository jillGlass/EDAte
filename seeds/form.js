exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('form').del()
    .then(function () {
      // Inserts seed entries
      return knex('form').insert([
        { id: 1, hobby: 'rowValue1', age: 'rowValue2', gender: 'rowValue3' }
      ])
    })
}
