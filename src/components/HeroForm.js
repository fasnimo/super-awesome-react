import React, { Component } from 'react';
import { connect } from "react-redux"
import { addHero } from "../actions/heroAction"

class HeroForm extends Component {
    state = {
        name: "", 
        power: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addHero(this.state)
        this.restForm()
    }

    restForm = () => {
        this.setState({
            subject: "",
            review: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>NAME</label>
                    <input 
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        text="text"
                    />
                    <label>POWER</label>
                    <input 
                        name="power"
                        value={this.state.power}
                        onChange={this.state.handleChange}
                        text="text"
                    />
                    <br/>
                    <button type="submit">Apply</button>
                </form>
            </div>
        );
    }
}

export default connect(null,{ addHero })(HeroForm);