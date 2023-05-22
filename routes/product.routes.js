const router = require('express').Router()
const ProductsService = require('../services/product.service')

const service = new ProductsService()

router.get('/', (req, res) => {
	res.json(service.find())
})

router.get('/:id', (req, res) => {
	res.json(service.findOne(req.params.id))
})

router.post('/', (req, res) => {
	res.status(201).json(service.create(req.body))
})

router.patch('/:id', (req, res) => {
	res.json(service.update(req.params.id, req.body))
})
7
router.delete('/:id', (req, res) => {
	service.delete(req.params.id)
	res.end()
})

module.exports = router
