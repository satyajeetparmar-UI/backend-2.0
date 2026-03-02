const mongoose = required('mongoose')


const followSchema = new mongoose.Schema({
  followers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "Follower is required"]
  },

  followee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: [true, "Followee is required"]
  }
}, {
  timestamps: true // timestamps ye batata ki ye ye document kab create hua tha aur kab update hua tha 
})

const followModel = mongoose.model("Follows", followSchema)