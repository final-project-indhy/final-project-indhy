const express = require("express")
const route = express.Router()
const userRoutes = require("./user")
const errorHandler = require("../middlewares/errorHndler")

route.use("/user", userRoutes)
route.use(errorHandler)

module.exports = route