/* 
 - Schema : Schema means aap apne database ko bata rahe ho ki kis format me data ko store krna hai
*/

const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
})


// mongoose.model("notes", noteSchema) --> This method creating model and model name is 'notes'

const noteModel = mongoose.model("notes", noteSchema)


module.exports = noteModel