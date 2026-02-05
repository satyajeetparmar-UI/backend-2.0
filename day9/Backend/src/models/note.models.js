const mongoose = require('mongoose')

// create schema like this 
const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
})


// Model --> Model ki help se ham hamare database me data add, delete and update krte hai (CRUD operation model ki help se perform kiye jaate hai)
const noteModel = mongoose.model('notes', noteSchema)

module.exports = noteModel