const productRoutes = require('./product.routes')
const router = require('express').Router()

const apiRoutes = server => {
	server.use('/api/v1', router)
	router.use('/products', productRoutes)
}

module.exports = apiRoutes
