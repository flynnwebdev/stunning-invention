import React, { Component } from 'react'

export default class NameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            language: 'en'
        }
    }

    handleChange = (event) => {
        // if (!isNaN(event.target.value)) {
            this.setState({
                [event.target.name]: event.target.value
            })
        // }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('A name was submitted: ' + this.state.value)
    }

    // changeLanguage = (event) => {
    //     this.setState({
    //         language: event.target.value
    //     })
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="value" onChange={this.handleChange} value={this.state.value} />
                    </label>
                    <select value={this.state.language} name="language" onChange={this.handleChange} >
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
