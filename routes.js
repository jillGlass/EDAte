const express = require('express')

const router = express.Router()

const db = require('./database')

router.get('/', (req, res) => {
  res.render('home')
})

router.post('/', (req, res) => {
  db.formInput(req.body)
    .finally(() => res.redirect('/match'))
})

router.get('/match', (req, res) => {
  db.getFriends()
    .then((friends) => db.getMatch(friends))
    .then((match) => res.render('matchProfile', match))
})

module.exports = router
