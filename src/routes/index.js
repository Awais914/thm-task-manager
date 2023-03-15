const express = require('express')
const app = express()

const apiV1 = require('./api/v1/index')

app.use('/api/v1', apiV1)

app.use(function (req, res, next) {
  const err = new Error('Resource Not Found')
  err.status = 404
  next(err)
})

module.exports = app
