// sever ko create krna 

const express = require("express");
const noteModel = require('./models/note.models')


const app = express()
app.use(express.json())

/**
 * - POST /api/notes
 * - create new note and save data in mongodb
 * - req.body (title, description)
 */
app.post('/notes', async (req, res) => {
  const { title, description } = req.body
  
  const note = await noteModel.create({
    title, description
  })

  res.status(201).json({
    message: "Note created successfully", 
    note
  })
})




module.exports = app