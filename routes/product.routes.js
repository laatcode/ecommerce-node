const router = require('express').Router()
const ProductsService = require('../services/product.service')

const service = new ProductsService()

router.get('/', (req, res) => {
	res.json(service.find())
})

module.exports = router
