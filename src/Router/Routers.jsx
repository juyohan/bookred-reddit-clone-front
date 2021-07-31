import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../Home";
import Header from "../Header";

const Routers = ({match, location}) => {
    console.log(JSON.stringify(match,null,2));
    console.log(JSON.stringify(location,null,2));

    return (
        <>
            <Switch>
                <Route path={'/:sort'}>
                    <Home/>
                </Route>
                <Route exact path={'/'}>
                    <Header/>
                    <Home/>
                </Route>
                {/*<Route exact path={'/'} component={Home}/>*/}
            </Switch>
        </>
    );
}

export default Routers;