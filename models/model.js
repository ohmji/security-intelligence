const dotenv = require('dotenv')
const logger = require('../common/logger')
const mongoose = require('mongoose');

module.exports = function() {

dotenv.config()

const url = process.env.MONGO_URL ;

mongoose.connect(url, 
    { useNewUrlParser: true, useFindAndModify: true,useUnifiedTopology: true }, () => {
    console.log("Connected to database!")
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


};