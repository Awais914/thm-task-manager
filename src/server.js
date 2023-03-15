const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const toobusy = require('toobusy-js')

const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorHandler')
const routes = require('./routes')

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Accept']
}))

app.use(function (req, res, next) {
  if (toobusy()) {
    res.status(503).send('Server is busy. Can\'t handle request right now!')
  } else {
    next()
  }
})

app.use('/', routes)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Task Manager listening on port ${port}!`))
