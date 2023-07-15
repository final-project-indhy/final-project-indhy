function errorHandler(error, req, res, next) {
    let message;
    let status;

    switch (error.name) {
        case "SequelizeValidationError":
            status = 400
            message = error.errors[0].message
            break;
        default:
            status = 500
            message = "Internal Server Error"
            break;
    }
    res.status(status).json({ message })
}

module.exports = errorHandler