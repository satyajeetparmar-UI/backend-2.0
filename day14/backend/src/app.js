const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  credentials: true, // iski wajah se backend ka server frontend pr cookies ko setup kr sake 
  origin: "http://localhost:5173" // frontend ka address add krna hai ye change bhi ho sakta hai according to port
}))

/**
 * require routes
 */
const authRouter = require('./routes/auth.routes')
const postRouter = require('./routes/post.routes')
const userRouter = require('./routes/user.routes')


/**
 * using routes
 */

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)
app.use('/api/user', userRouter)

module.exports = app;