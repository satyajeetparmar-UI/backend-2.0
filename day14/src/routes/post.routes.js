const express = require('express')
const postRouter = express.Router()
const postController = require('../controllers/post.controller')
const multer = require('multer') // client side se jo file aayegi usko read krne ke liye 'Multer' ka use kiya hai jo ki ek middle ware hai
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser = require('../middleware/auth.middleware')

/**
 * POST api/post [protected]
 * - req.body = {caption, image-file}
 */

postRouter.post('/', upload.single("image") , identifyUser, postController.createPostController)




/**
 * GET api/post [protected]
 * - req.body = {caption, image-file}
 */

postRouter.get('/', identifyUser, postController.getPostController)

/**
 * GET api/post/details/:postid
 * return and detail about specific post id, also check whether the post belongs to the user that the request come from
 */

postRouter.get('/details/:postId', identifyUser, postController.getPostDetailsController)


module.exports = postRouter
