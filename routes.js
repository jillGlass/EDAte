const express = require('express')

const router = express.Router()

const db = require('./database')

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/matchProfile', (req, res) => {
  res.render('matchProfile')
})

module.exports = router
