const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
