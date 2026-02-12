const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

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

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email
    }, 
      process.env.JWT_SECRET
  )

  res.cookie("jwt_token", token, {
    // Save token in cookie
    httpOnly: true,
    secure: false, // true in production (HTTPS)
    sameSite: "strict",
    maxAge:  7 * 24 * 60 * 60 * 1000
  })

  res.status(201).json({
    message: "User registered",
    user,
    token
  })
})

module.exports = authRouter