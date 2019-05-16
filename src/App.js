import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Stocks from './components/Stocks'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAllStocks: [],
      portfolio: []
    };

    this.displayStocks = this.displayStocks.bind(this);
    this.postStockToPortfolio= this.postStockToPortfolio.bind(this)

    // this.getLiveDataFromExternalApi = this.getLiveDataFromExternalApi.bind(this)
  }

  componentDidMount() {
    this.displayStocks();

    // this.getLiveDataFromExternalApi()
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
          console.log(response)

          this.setState({
              portfolio: response.data
          })
      })
  }

  render() {
    const { displayAllStocks, portfolio } = this.state;
    console.log(displayAllStocks);
    console.log(portfolio)
    

    let mappedStocksCollection = displayAllStocks.map(element => {
        console.log(element) 
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
      />
    );
    });

    const mappedPortfolioCollection = portfolio.map(element => {
        console.log()
        return element.logo
    })



    return (
        <div className='App'>
            <div className='display'>{mappedStocksCollection}</div>
            <div>{mappedPortfolioCollection}</div>
            {/* <div>{mappedExternalStockData}</div> */}
        </div>
    )
  }
}

export default App;
