import React, { Component } from 'react';
import HeroForm from "./HeroForm"
import HeroList from "./HeroList"
import { connect } from "react-redux"
import { fetchHero } from "../actions/heroAction"
import { Route, Switch } from "react-router-dom"

class HeroContainer extends Component {

    componentDidMount(){
        this.props.fetchHero()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/heros/new" component={HeroForm}/>
                    <Route exact path="/heros" render={() => <HeroList heros={this.props.heros}/>}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // debugger
    // let herosName;
    // let herosPower
    // state.map(i => {
    //     herosName = i.name
    //     herosPower = i.power
    // })
    return {
        heros: state
        
    }
}

export default connect(mapStateToProps,{fetchHero})(HeroContainer);