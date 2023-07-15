const { User } = require("../models")

class UserController {

    static async registerUser(req, res, next) {
        // res.send("Masuk rEgister")
        try {
            const { username, email, password } = req.body
            let inputUser = {
                username, email, password
            }
            const response = await User.create(inputUser)
            res.status(201).json({
                message: "Success to add!"
            })
        } catch (error) {
            console.log(error, "==> NIH");
            next(error)
        }
    }
}

module.exports = UserController