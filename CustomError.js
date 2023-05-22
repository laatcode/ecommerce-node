class CustomError {
	constructor(name = "CustomError", message, statusCode = 400) {
		this.name = name
		this.message = message
		this.statusCode = statusCode
	}
}

module.exports = CustomError
