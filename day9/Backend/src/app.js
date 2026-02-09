// sever ko create krna 

const express = require("express");
const noteModel = require('./models/note.models')
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static('./public'))

/**
 * - POST /notes
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


/**
 * - GET /notes
 * - Fetch all the notes data from mongodb and send them in response
 */
app.get('/notes', async (req, res) => {
  const notes = await noteModel.find()

  res.status(200).json({
    message: "Notes fetched successfully",
    notes
  })
})

/**
 * - DELETE /notes/:id
 * - Delete notes with the id from req.params
 */
app.delete('/notes/:id',async (req, res) => {
  const id = req.params.id
  
  await noteModel.findByIdAndDelete(id)

  res.status(200).json({
    message: "Note deleted successfully"
  })
})


/**
 * - PATCH /notes/:id
 * - update the description of note
 * - req.body = {description}
 */
app.patch('/notes/:id', async (req, res) => {
  const id = req.params.id

  const { description } = req.body
  
  await noteModel.findByIdAndUpdate(id, {description})

  res.status(200).json({
    message: "Note updated successfully"
  })
})


app.use('*name', (req, res) => {
  
  res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})

module.exports = app