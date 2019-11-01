exports.seed = (knex) =>
  knex('friends').del()
    .then(() =>
      knex('friends').insert([
        { id: 1, name: 'Pablo Uerules', hobby: 'Horse Riding', age: 32, gender: 'Male', image: 'profile-stock-photos/pablo.jpg' },
    { id: 2, name: 'Paul Heros', hobby: 'Racketball', age: 37, gender: 'Male', image: 'profile-stock-photos/pablo.jpg' },
    { id: 3, name: 'James Udeany', hobby: 'Baking', age: 35, gender: 'Male', image: 'profile-stock-photos/peter.jpg' },
    { id: 4, name: 'Jillius Maximus', hobby: 'Horse Riding', age: 39, gender: 'Female', image: 'profile-stock-photos/ashleus.jpg' }
      ])
    )