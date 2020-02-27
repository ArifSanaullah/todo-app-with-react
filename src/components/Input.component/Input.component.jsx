import React, { Component } from 'react'

// Make this a functional component 
// It does not need any state 
export default class ToDoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        // Use destructuring whenever possible
        const { textValue, inputType, inputPlace, changeHandler } = this.props
        return (
            <div>
                <input
                    value={textValue}
                    type={inputType}
                    placeholder={inputPlace}
                    onChange={changeHandler}

                />
            </div>
        )
    }
}
