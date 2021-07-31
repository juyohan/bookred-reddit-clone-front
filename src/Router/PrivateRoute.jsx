import React from 'react';
import {Route, Redirect} from "react-router-dom";
import Token from "../JwtToken/Token";

const PrivateRoute = ({ component: Component, render, ...rest}) => {
    return (
        <Route {...rest}
            render={(props) => Token() ? (
                render ? (
                    render(props)
                ) : (
                    <Component {...props}/>
                )
            ) : (
                <Redirect
                    to={{pathname : '/login', state : { from : props.location}}}
                />
            )}
            />
    );
}

export default PrivateRoute;