/* 
  - server ko create krna 
  - server ko config krna
*/ 

const express = require("express")

const app = express()

app.use(express.json())

const notes = []


/*
  POST --> post method se new request banati hai.
*/
app.post('/notes', (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "Note created successfully"
  })
})

/*
  GET --> Jab data server se client side pr ja raha hota hai tab get method use karte hai. [Data mangne ke liye (fetch karna)]
*/

app.get('/notes', (req, res) => {
  res.status(200).json({ // API ka response hamesha JSON format me jata hai.
    notes: notes
  })
})

/* 
  DELETE --> data delete krta hai
*/
app.delete('/notes/:index', (req, res) => {
  delete notes[req.params.index]

  res.status(200).json({
    message: "Note deleted successfully"
  })
})

/* 
  PATCH --> Patch method se ham sirf decription update kr sakte hai title nahi
*/
app.patch('/notes/:index', (req, res) => {
  notes[req.params.index].description = req.body.description

  res.status(200).json({
    message: "Note updated successfully"
  })
})




module.exports = app;