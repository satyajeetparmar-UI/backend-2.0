// server ko start krna
// database se connect krna 
require('dotenv').config();  // we can't access var from the '.env' file with the help of this method --> require("dotenv").config()
const mongoose = require('mongoose')

const connectToDb = require('./src/config/database')

app = require('./src/app')



connectToDb()

app.listen(3000, () => {
  console.log("server is running on port 3000")
})