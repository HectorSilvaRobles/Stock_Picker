import React, {Component} from 'react'

export default class Portfolio extends Component {
    render(){
        const {portSymbol, portCompanyName} = this.props
        return(
            <div className='picks'>
                <span>{portCompanyName}</span>
                
            </div>
        )
    }
}