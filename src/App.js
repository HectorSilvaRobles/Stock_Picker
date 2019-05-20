import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Stocks from './components/Stocks'
import Portfolio from "./components/Portfolio/Portfolio";
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAllStocks: [],
      portfolio: []
    };

    this.displayStocks = this.displayStocks.bind(this);
    this.postStockToPortfolio= this.postStockToPortfolio.bind(this)
    this.deleteStockFromPortfolio = this.deleteStockFromPortfolio.bind(this)
  }

  componentDidMount() {
    this.displayStocks();
    // this.postStockToPortfolio()
    this.deleteStockFromPortfolio()
  }

  displayStocks() {
    axios
      .get("/api/stock_picker")
      .then(response => {
        this.setState({
          displayAllStocks: response.data
        });
      })
      .catch(error => console.log("wow"));
  }

  postStockToPortfolio(stock){
      axios.post('/api/stock_picker', stock).then(response => {
          this.setState({
              portfolio: response.data
          })
      })
  }
  
  deleteStockFromPortfolio(symbol){

    let copy = this.state.portfolio.slice()
    let sym;
    let stockDelete;

    copy.map((value, index, arr) => {
      sym = value.symbol
      stockDelete = value
    })
    
    axios.delete(`/api/stock_picker/${sym}`)
    .then(response => {
      console.log('response after deleteing', response.data)
      this.setState({
        portfolio: response.data
      })
    })
  }

  updateQuantity(id, amount){
    console.log(amount)
  axios.put(`/api/stock_picker/${id}/?new_amount=${amount}`)
  .then(response => console.log(response))
}
  render() {
   
    const { displayAllStocks, portfolio } = this.state;
    console.log(displayAllStocks)

    let mappedStocksCollection = displayAllStocks.map(element => { 

    return (
      <Stocks 
      key={element.id}
      symbol={element.symbol}
      id={element.id}
      companyName={element.companyName}
      open={element.open}
      close={element.close}
      logo={element.url}
      latestTime={element.latestTime}
      realtimePrice={element.realtimePrice}
      previousClose={element.previousClose}
      avgTotalVolume={element.avgTotalVolume}
      marketCap={element.marketCap}
      peRatio={element.peRatio}
      week52High={element.week52High}
      cashFlow={element.cashFlow}
      grossProfit={element.grossProfit}
      addToPortfolioFn={this.postStockToPortfolio}
      quantity = {element.quantity}
      />
    );
    });

    const mappedPortfolioCollection = portfolio.map(element => {
      console.log('inside the map function', element)
    
        return (
            <Portfolio
            key={element.id}
            portSymbol={element.symbol}
            portCompanyName = {element.companyName}
            deleteStock = {this.deleteStockFromPortfolio}
            quantity = {element.quantity}
            updateAmount = {this.updateQuantity}
             />
        )
    })



    return (
        <div className='App'>
            <div className= 'header'>{Header}</div>
            <div className='display'>{mappedStocksCollection}</div>
            <div className='portfolio'>{mappedPortfolioCollection}</div>
        </div>
    )
  }
}

export default App;
