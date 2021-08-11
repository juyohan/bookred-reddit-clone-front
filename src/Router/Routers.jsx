import React, {useContext, useEffect} from 'react';
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import Home from "../Component/Home";
import PrivateRoute from "./PrivateRoute";
// import UserContext from "../Context/UserContext";
import Profile from "../Component/Profile";
import GlobalContext from "../Context/GlobalContext";
import Header from "../Component/Header";

const Routers = () => {
    // const [state, action] = useContext(UserContext);
    const [path, setPath] = useContext(GlobalContext);
    const {pathname} = useLocation();

    useEffect(() => {
        setPath.setRouter({
            currentPath: pathname,
            prevPath: path.router.currentPath
        });
    }, [pathname]);

    localStorage.setItem('Access_Token' , 'sdfsdf');

    return (
        <>
            <Header/>
            <Switch>
                {/* 홈 화면 */}
                <Route exact path={['/', '/hot']} render={props => <Home {...props}/>}/>
                <Route exact path={'/new'} render={props => <Home {...props}/>}/>
                <PrivateRoute path={'/group'}
                              render={props =>
                                  <Home {...props}
                                  />
                              }
                />
                {/* 프로필 화면 */}
                <PrivateRoute path={'/:username'}
                              render={props =>
                                  <Profile {...props}
                                  />
                              }
                />
            </Switch>
        </>
    );
}

export default Routers;