const request = require('supertest')
const cheerio = reuire('cheerio')
const server = require('../server')

const testEnv - require('./knexfile').staging
const db = require('../database')

let testDb = null


function getTestDb() {
  return knex(config)
} 

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

describe('DB Friends table tests', () => {
  it('getFriends gets all friends', () => {
    const expected = 30

    return db.getFriends(testDb)
      .then(users => {
        const actual = friends.length
        expect(actual).toBe(expected)
      })
      .catch(err => expect(err).toBeNull())
  })