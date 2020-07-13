const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const dotenv = require('dotenv')


const logger = require('./common/logger')
const database = require('./models/model');

dotenv.config()
database()

const app = express()
app.use(cors())
app.use(helmet())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello Smart Security!")
})




app.listen(process.env.PORT, () => {
  logger.info(`API Listening on port: ${process.env.NODE_ENV} as ${process.env.NODE_ENV}`)
})