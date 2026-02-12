const express = require('express')
const userModel = require('../models/user.model')

const authRouter = express.Router()

authRouter.post("/register", async (req, res) => {
  const { email, name, password } = req.body
  
  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "Email is already registered"
    })
  }

  const user = await userModel.create({
    email, name, password
  })

  res.status(201).json({
    message: "User registered",
    user
  })
})

module.exports = authRouter