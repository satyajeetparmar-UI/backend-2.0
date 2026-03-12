const express = require('express')
const userController = require('../controllers/user.controller')
const identifyUser = require('../middleware/auth.middleware')

const userRouter = express.Router();

/**
 * @route POST /api/auth/follow/:userid
 * Follow a user 
 */
userRouter.post('/follow/:username', identifyUser, userController.followUserController)

/**
 * @route POST /api/auth/unfollow/:userid
 * unFollow a user 
 */
userRouter.post('/unfollow/:username', identifyUser, userController.unFollowUserController)

module.exports = userRouter;
