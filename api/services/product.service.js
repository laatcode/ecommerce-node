const {faker} = require('@faker-js/faker')
const CustomError = require('../CustomError')

class ProductsService {
	constructor() {
		this.products = []
		this.generateData()
	}

	generateData() {
		for(let index = 0; index < 10; index++) {
			this.products.push({
				id: faker.string.uuid(),
				name: faker.commerce.productName(),
				price: parseInt(faker.commerce.price(), 10),
				image: faker.image.url()
			})
		}
	}


	find() {
		return this.products
	}

	findOne(id) {
		const productFound = this.products.find(product => product.id === id)
		if(productFound) {
			return productFound
		}

		throw new CustomError("CustomError", "Not Found", 404)
	}

	create(data) {
		const newProduct = {
			...data,
			id: faker.string.uuid()
		}

		this.products.push(newProduct)

		return newProduct
	}

	update(id, data) {
		let productFound = this.findOne(id)
		productFound = {
			...productFound,
			...data,
			id
		}

		this.products = this.products.filter(product => product.id !== id)
		this.products.push(productFound)

		return productFound
	}

	delete(id) {
		this.findOne(id)
		this.products = this.products.filter(product => product.id !== id)
	}

}

module.exports = ProductsService
