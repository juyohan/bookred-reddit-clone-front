import React, {useState} from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../Component/Home";
import PrivateRoute from "./PrivateRoute";

const Routers = () => {
    const [user, setUser] = useState(null);

    return (
        <Switch>
            {/* 홈 화면 */}
            <Route exact path={'/'}>
                <Home/>
            </Route>
            <Route path={'/hot'}>
                <Home/>
            </Route>


            <PrivateRoute path={'/profile'}
                          render={props =>
                              <Home user={user}
                                    {...props}
                              />
                          }
            />

        </Switch>
    );
}

export default Routers;