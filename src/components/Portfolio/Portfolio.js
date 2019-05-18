import React, {Component} from 'react'
import './portfolio.css'

export default class Portfolio extends Component {
    render(){
        const {portSymbol, portCompanyName} = this.props
        return(
            <div className='picks'>
                <span className='stocks'>{portCompanyName}</span>
                <button className='delete'>Delete</button>
            </div>
        )
    }
}