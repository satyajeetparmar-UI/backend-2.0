const mongoose = require('mongoose')


const followSchema = new mongoose.Schema({
  followers: {
    type: String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "user",
    // required: [true, "Follower is required"]
  },

  followee: {
    type: String,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "user",
    // required: [true, "Followee is required"]
  }
}, {
  timestamps: true // timestamps ye batata ki ye ye document kab create hua tha aur kab update hua tha 
})

const followModel = mongoose.model("Follows", followSchema)

module.exports = followModel