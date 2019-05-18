let stocks = require("../stockDB.json");
let portfolio = require('../portfolioDB.json')

let unique;
module.exports = {
  getAllStocks: (req, res, next) => {
    console.log("hit");
    res.status(200).send(stocks);
  },
  postStockToPortfolio: (req,res,next) =>{
      const {symbol, companyName, id} = req.body
      console.log('post hit')
      portfolio.push({symbol, companyName, id})
    

    // function removeDuplicates(array){
    
    //   var identifier = [];
    //   var uniqueStocks = [];

    //   for(i=0; i<array.length; i++){
    //     identifier.push(array[i].symbol)
    //   }
    //   console.log(uniqueStocks)
    //   console.log(array.includes(identifier))
    //   for(d = 0; d < identifier.length; d ++){
    //     if(array.includes(identifier[d])){
    //       console.log('hi')
    //      }
    //   }
    //  }
    
    
   function getUnique(arr, value) {

    unique = arr.map(val => val[value])
    .map((val, index, final) => final.indexOf(val) === index && index)
    .filter(val => arr[val]).map(val => arr[val])

    return unique
   }
   


    getUnique(portfolio, 'symbol')

          
          res.status(200).send(unique)
  
  },
};
