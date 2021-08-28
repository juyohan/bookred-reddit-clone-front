import React, {useContext, useEffect} from 'react';
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import Home from "../Component/Home";
import PrivateRoute from "./PrivateRoute";
// import UserContext from "../Context/UserContext";
import Profile from "../Component/Profile";
import GlobalContext from "../Context/GlobalContext";
import Header from "../Component/Header";
import Post from "../Component/Post";
import Token from "../JwtToken/Token";

const Routers = () => {
    const [path, setPath] = useContext(GlobalContext);
    const {pathname} = useLocation();

    useEffect(() => {
        if (path.router.currentPath !== pathname) {
            setPath.setRouter({
                currentPath: pathname,
                prevPath: path.router.currentPath
            });
        }
    }, [pathname]);

    return (
        <>
            <Header/>
            <Switch>
                {/* 홈 화면 */}
                <Route exact path={['/', '/hot','/home']} render={props => <Home {...props}/>}/>
                <Route exact path={'/new'} render={props => <Home {...props}/>}/>
                <Route exact path={'/rising'} render={props => <Home {...props}/>}/>
                <Route exact path={'/top'} render={props => <Home {...props}/>}/>
                {/* Header Menu */}
                <Route exact path={'/group'} render={props => <Home {...props}/>}/>
                <Route exact path={'/post'} render={props => <Post {...props}/>}/>

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