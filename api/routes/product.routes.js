const router = require('express').Router()
const ProductsService = require('../services/product.service')

const validatorHandler = require('../middlewares/validation.handler')
const { getProductSchema, createProductSchema, updateProductSchema } = require('../schemas/products.schema')

const service = new ProductsService()

router.get('/', (req, res) => {
	res.json(service.find())
})

router.get('/:id',
	validatorHandler(getProductSchema, 'params'),
	(req, res) => {
		res.json(service.findOne(req.params.id))
	}
)

router.post('/',
	validatorHandler(createProductSchema, 'body'),
	(req, res) => {
		res.status(201).json(service.create(req.body))
	}
)

router.patch('/:id',
	validatorHandler(getProductSchema, 'params'),
	validatorHandler(updateProductSchema, 'body'),
	(req, res) => {
		res.json(service.update(req.params.id, req.body))
	}
)

router.delete('/:id', (req, res) => {
	service.delete(req.params.id)
	res.end()
})

module.exports = router
