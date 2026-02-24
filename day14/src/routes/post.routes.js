const express = require('express')
const postRouter = express.Router()
const postController = require('../controllers/post.controller')
const multer = require('multer') // client side se jo file aayegi usko read krne ke liye 'Multer' ka use kiya hai jo ki ek middle ware hai
const upload = multer({ storage: multer.memoryStorage() })

/**
 * POST api/post [protected]
 * - req.body = {caption, image-file}
 */

postRouter.post('/', upload.single("image") , postController.createPostController)


module.exports = postRouter
