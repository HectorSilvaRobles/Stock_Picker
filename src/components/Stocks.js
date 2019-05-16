import React, {Component} from 'react'
import Display from './StockDisplay/StockDisplay'

export default class Stocks extends Component{
    render(){
        const{ symbol, companyName, id, 
            open, logo, close, 
            latestTime, 
            realtimePrice, previousClose,
            avgTotalVolume, marketCap, peRatio,
            week52High, week52Low, cashFlow, grossProfit, addToPortfolioFn
        } = this.props
        return(
            <div>
                <Display
                logo={logo}
                companyName={companyName}
                symbol={symbol}
                latestTime={latestTime}
                realtimePrice={realtimePrice}
                addToPortfolioFn={addToPortfolioFn}
                 />
            </div>
        )
    }
}