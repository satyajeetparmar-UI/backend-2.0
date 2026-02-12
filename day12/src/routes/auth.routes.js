const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const authRouter = express.Router()

authRouter.post("/register", async (req, res) => {
  const { email, name, password } = req.body
  
  const isUserAlreadyExists = await userModel.findOne({ email });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "Email is already registered"
    })
  }

  /**
   * password ko hash me change krne ka liye ye method ka use krte hai
   */
  const hash = crypto.createHash("md5").update(password).digest("hex")

  const user = await userModel.create({
    email, name, password: hash
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



/**
 * login api 
 */

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body
  
  const user = await userModel.findOne({ email })
  
  if (!user) {
    return res.status(404).json({
      message: "User not found with this email address"
    })
  }


  /**
   * - Jab user password dalta hai login ke liye to phir password phir se hash me change hota hai and hash match hota hai uske baad user login krta hai 
   * - agar hash match nahi hua mtlb password incorrect hai.
   */
  const isPasswordCorrect = user.password === crypto.createHash("md5").update(password).digest("hex")

  if (!isPasswordCorrect) {
    return res.status(401).json({
      message: "Wrong password"
    })
  }

  const token = jwt.sign({
    id: user._id,
  },
  process.env.JWT_SECRET
  )

  res.cookie("jwt_token", jwt)

  res.status(200).json({
    message: "User logged in", 
    user
  })
})

module.exports = authRouter