import React, {Component} from 'react'
import './portfolio.css'

export default class Portfolio extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            amount: this.props.quantity
        }
    }
    render(){
        console.log(this.state.amount)
        const {portSymbol, portCompanyName, deleteStock, quantity, updateAmount} = this.props
        
        return(
            <div className='picks'>
                <div className='quantity'>
                    <input type='text' placeholder={this.state.amount} className ='how_much'
                     onChange={(event) => this.setState({
                            amount: event.target.value
                            })
                        }
                     />
                     <button onClick ={() => updateAmount(portSymbol, this.state.amount)} className='update_amount'>Update</button>
                </div>
                <span className='stocks'>{portCompanyName}</span>
                <button className='delete' onClick={() => deleteStock({portSymbol})}>Delete</button>
            </div>
        )
    }
}