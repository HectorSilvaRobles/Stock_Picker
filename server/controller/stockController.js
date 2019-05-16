let stocks = require("../stockDB.json");
let portfolio = require('../portfolioDB.json')

module.exports = {
  getAllStocks: (req, res, next) => {
    console.log("hit");
    res.status(200).send(stocks);
  },
  postStockToPortfolio: (req,res,next) =>{
      const {symbol, companyName, id} = req.body

      portfolio.push({symbol, companyName, id})
      res.status(200).send(portfolio)
  },
};
