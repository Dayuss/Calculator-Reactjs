import React from 'react'
import './button.css'
import Button from './Button'

class Panel extends React.Component {

    handleClick = (btn) => {
        this.props.clickHandler(btn)
    }

    render() {
        return (
            <div className="btnContainer">
                <div className="row">
                    <Button name="AC" clickHandler={this.handleClick} blue />
                    <Button name="+/-" clickHandler={this.handleClick} />
                    <Button name="%" clickHandler={this.handleClick} />
                    <Button name="×" clickHandler={this.handleClick}  blue />
                </div>
                <div className="row">
                    <Button name="7" clickHandler={this.handleClick} />
                    <Button name="8" clickHandler={this.handleClick} />
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="÷" clickHandler={this.handleClick}  blue />
                </div>
                <div className="row">
                    <Button name="4" clickHandler={this.handleClick} />
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="+" clickHandler={this.handleClick} blue  />
                </div>
                <div className="row">
                    <Button name="1" clickHandler={this.handleClick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name="-" clickHandler={this.handleClick}  blue />
                </div>
                <div className="row">
                    <Button name="0" clickHandler={this.handleClick} wide />
                    <Button name="." clickHandler={this.handleClick} />
                    <Button name="=" clickHandler={this.handleClick} blue/>
                </div>

            </div>
        )
    }

}

export default Panel;