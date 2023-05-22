const express = require('express')
const app = express()
const PORT = 5000
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())

app.get('/', (req, res) => res.send('server running'))
routes(app)

app.use(errorHandler)


app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
