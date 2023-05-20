const express = require('express')
const app = express()
const PORT = 5000
const routes = require('./routes')

app.get('/', (req, res) => res.send('server running'))
routes(app)


app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
