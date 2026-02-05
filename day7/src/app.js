// server ko create krna 

const express = require("express")
const noteModel = require('./models/notes.models')

const app = express()

app.use(express.json())


// POST 

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

/* 
  GET /notes
  - fetch all the notes data
*/

app.get('/notes', async (req, res) => {
  const note = await noteModel.find() // find method return data into Array

  res.status(200).json({
    message: "Notes fetched successfully",
    note
  })
})



module.exports = app;