import React from 'react';

class Button extends React.Component{

    handleClick = () => {
        this.props.clickHandler(this.props.name)
    }
    render(){
        return(
                <button className={ this.props.wide? "wide" : "" || this.props.blue? "blue" : ""} onClick={this.handleClick}> {this.props.name}</button>
        )
    }

}

export default Button;