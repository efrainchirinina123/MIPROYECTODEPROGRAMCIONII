const { validationResult } = require('express-validator')

const validateFields = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(
            errors.array().map(error => ({
                field: error.param,
                message: error.msg
            }))
        )
    }
    next()
}

module.exports = { validateFields }