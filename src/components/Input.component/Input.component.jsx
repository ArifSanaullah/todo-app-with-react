import React, { Component } from 'react'

export default class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <input
                    value={this.props.textValue}
                    type={this.props.inputType}
                    placeholder={this.props.inputPlace}
                    onChange={this.props.changeHandler} 
                    
                    />
            </div>
        )
    }
}
