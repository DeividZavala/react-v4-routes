import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CompoOne from './compo1';
import CompoTwo from './compo2';


const Routes = () => {

    return(

        <Switch>

            <Route exact path="/" component={CompoOne}/>
            <Route path="/var/:var" component={CompoTwo}/>
            <Route path="*" component={NotFound} />

        </Switch>

    );


}

const NotFound = () => {
    return(
        <h1>404</h1>
    );
}

export default Routes;