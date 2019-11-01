const request = require('supertest')
const cheerio = require('cheerio')
const server = require('../server')

const testConfig = ('./test-configuration')
const db = require('../database')

let testDb = null

beforeEach(() => {
  testDb = testConfig.getTestDb()
  return testConfig.initialise(testDb)
})

afterEach(() => testConfig.cleanup(testDb))

describe('DB Friends table tests', () => {
  it('getFriends gets all friends', () => {
    const expected = 30

    return db.getFriends(testDb)
      .then(friends => {
        const actual = friends.length
        expect(actual).toBe(expected)
      })
      .catch(err => expect(err).toBeNull())
  })
})
