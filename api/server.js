const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())

app.get('/api', (req, res) => res.send('server running'))
routes(app)

app.use(errorHandler)


app.listen(PORT, () => console.log(`Server running at port ${PORT}`))