const express = require("express")
const route = express.Router()
const UserController = require("../controllers/userController")

route.post("/register", UserController.registerUser)

module.exports = route