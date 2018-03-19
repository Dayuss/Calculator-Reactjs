import React from 'react'
import './display.css'

class Display extends React.Component {

    render() {
        return (
            <div className="displayContainer">
                <div className="mainDisplay">{this.props.val}</div>
            </div>
        )
    }

}

export default Display;