const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "User name already exists"], // each user have unique user name
    required: [true, "User name is required"] // without user name you can't create a user
  },
  email: {
    type: String,
    unique: [true, "Email is already exists"],
    required: [true, "Email is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  bio: String,
  profileImage: {
    type: String,
    default: "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?semt=ais_user_personalization&w=740&q=80"
  }
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel