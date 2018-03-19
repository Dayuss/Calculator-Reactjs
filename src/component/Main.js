import React from 'react'
import Panel from './button/ButtonPanel'
import Display from './display/Display'
import hitung from './Logic/hitung'

class Main extends React.Component {

    constructor(props){
        super(props)
        this.state={
            total:null,
            next: null,
            temp:null,
            operation:null
        }
    }

    handleClick = (btn) =>{
        this.setState(
            hitung(this.state, btn)
        )
    }
    render() {
        return (
            <div className="container">
                <Display val= { this.state.next || this.state.total || 0} />
                <Panel clickHandler = {this.handleClick} />
            </div>
        )
    }

}

export default Main;