import React from 'react';
import {Route, Switch} from "react-router-dom"
import HeroForm from "./HeroForm"
import HeroList from "./HeroList" 

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HeroForm} />
                <Route exact path="/heros" component={HeroList}/>
                <Route exact path="/heros/new" component={HeroForm}/>
            </Switch>
        </div>
    );
};

export default Router;