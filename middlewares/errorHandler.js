const CustomError = require('../CustomError')

const errorHandler = (err, req, res, next) => {

	if(err instanceof CustomError) {
		res.status(err.statusCode).json({
			message: err.message
		})
	} else {
		res.status(500).json({
			message: err.message
		})
	}
}

module.exports = errorHandler
