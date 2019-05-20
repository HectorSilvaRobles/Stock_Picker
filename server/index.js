const express = require('express')
const app = express()
const port = 4000
const {getAllStocks, postStockToPortfolio, deleteStockFromPortfolio, updateQuantityOfStocks} = require('./controller/stockController')


app.use(express.json())

app.get('/api/stock_picker', getAllStocks)
app.post('/api/stock_picker', postStockToPortfolio)
app.delete('/api/stock_picker/:id', deleteStockFromPortfolio)
app.put('/api/stock_picker/:id', updateQuantityOfStocks)

app.listen(port, ()=> console.log(`listening from port ${port}`))