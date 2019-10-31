const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

describe('/ route tests', () => {
  it('gives a 200 status code', (done) => {
    const expected = 200

    request(server)
      .get('/')
      .end((err, res) => {
        const actual = res.status
        expect(err).toBeNull()
        expect(actual).toBe(expected)
        done()
      })
  })
})
