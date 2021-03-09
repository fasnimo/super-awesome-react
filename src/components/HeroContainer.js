import React, { Component } from 'react';
// import HeroForm from "./HeroForm"
// import HeroList from "./HeroList"
import Router from "./Router"
import { connect } from "./react-redux"
import { fetchHero } from "../actions/heroAction"
// import { Route, Switch } from "react-router-dom"

class HeroContainer extends Component {

    componentDidMount(){
        this.props.fetchHero()
    }

    render() {
        return (
            <div>
                <Router props={this.props.state}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        heros: state.heros
    }
}

export default connect(mapStateToProps,{fetchHero})HeroContainer;