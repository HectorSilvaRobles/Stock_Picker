const express = require('express')
const app = express()
const port = 4000
const {getAllStocks, postStockToPortfolio} = require('./controller/stockController')


app.use(express.json())

app.get('/api/stock_picker', getAllStocks)
app.post('/api/stock_picker', postStockToPortfolio)


app.listen(port, ()=> console.log(`listening from port ${port}`))