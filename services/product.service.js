const {faker} = require('@faker-js/faker')

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

	findOne() {
	}

	create() {
	}

	update() {
	}

	delete() {
	}

}

module.exports = ProductsService
