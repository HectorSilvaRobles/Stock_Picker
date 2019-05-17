import React, {Component} from 'react'
import './StockDisplay.css'

export default class Display extends Component{

    render(){
        const {logo, companyName, symbol, latestTime, realtimePrice, addToPortfolioFn, id} = this.props
        return(
            <div className='cards'>
                <div className='symbol'>{symbol}</div>
                <img src={logo} alt= 'logo' />
                <div className='companyName'>{companyName}</div>
                <div>
                    <h1 className='current'>Current Price</h1>
                    <span className='price'>${parseFloat(realtimePrice)}</span>
                    <h1 className='current'>Current Time</h1>
                    <span className='time'>{latestTime}</span>
                    <button onClick={() => addToPortfolioFn({companyName, symbol, id})}>Add</button>
                    <button>Details</button>
                </div>
            </div>
        )
    }
}