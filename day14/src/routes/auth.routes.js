const express = require('express')
const authController = require('../controllers/auth.controller')
const identifyUser = require('../middleware/auth.middleware')

const authRouter = express.Router()

/**
 * /api/auth/register
 */
authRouter.post('/register', authController.registerController)

/**
 * /api/auth/login
 */
authRouter.post('/login', authController.loginController)

/**
 * /api/auth/get-me
 */
authRouter.get('/get-me', identifyUser , authController.getMeController)


module.exports = authRouter
