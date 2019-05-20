let stocks = require("../stockDB.json");
let portfolio = require('../portfolioDB.json')

let unique;
module.exports = {
  getAllStocks: (req, res, next) => {
    console.log("hit");
    res.status(200).send(stocks);
  },
  postStockToPortfolio: (req,res,next) =>{
      const {symbol, companyName, id, quantity} = req.body
      console.log('post hit')
      // check for unique
      portfolio.push({symbol, companyName, id, quantity})
    // function checkUnique(arr, value) {
    //   //return true if value is not in the array
      
    // for( let i = 0; i < arr.length; i++){
    //   console.log(arr[i])
    // }
    // }
    // checkUnique(portfolio, id)
   function getUnique(arr, value) {

    unique = arr.map(val => val[value])
    .map((val, index, final) => final.indexOf(val) === index && index)
    .filter(val => arr[val]).map(val => arr[val])
    console.log("Sending after filter: ", unique)
    return res.status(200).send(unique)
   }
  
    getUnique(portfolio, 'symbol') 
  
  },
   deleteStockFromPortfolio: (req, res, next) => {
    let symbol;
    const {id} =req.params
    
     for(let i =0; i < unique.length; i++){
       symbol= unique[i].symbol
       console.log('this is ', symbol)
       if(symbol == id){
         unique.splice(i, 1)
         res.status(200).send(unique)
       }
       
     }
     console.log('sending array', unique)
     
   },
   updateQuantityOfStocks: (req, res, next) => {
      const {id} = req.params
      const {new_amount} = req.query

      const findStock = portfolio.findIndex(elem => {
        return elem.symbol === id
      })

      const updateQuantity = portfolio.map((elem, index, arr) => {
        console.log(arr[findStock].quantity)
        if(findStock !== -1){
          arr[findStock].quantity = new_amount
        }
      })

      // console.log(findStock)
      console.log(portfolio)

      // if( updateQuantity !== -1){
      //   portfolio[index].quantity = new_amount
      // }
   }
};
