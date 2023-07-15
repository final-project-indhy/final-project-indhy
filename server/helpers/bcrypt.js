require('dotenv').config()
const GEN_SALT = process.env.GEN_SALT
const MANIPULATE_GEN_SALT = Number(GEN_SALT)
const bcrypt = require("bcryptjs")


function hashPassword(password) {
    return bcrypt.hashSync(password, MANIPULATE_GEN_SALT)
}


module.exports = {
    hashPassword,
}