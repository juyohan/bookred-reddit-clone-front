import React, {useContext, useEffect} from 'react';
import {Route, Switch, useLocation} from "react-router-dom";
// Custom Router
import PrivateRoute from "./PrivateRoute";
// Component
import Home from "../Component/Home";
import Profile from "../Component/Profile";
import Header from "../Component/Header";
import Post from "../Component/Post";
import ConfirmUser from "../Component/Setting/ConfirmUser";
// Context API
import GlobalContext from "../Context/GlobalContext";
import {setCookie} from "../JwtToken/Cookie";

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

    setCookie('Access-Token', 'sdlfkjsdf');

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
                <Route exact path={'/setting'} render={props => <ConfirmUser {...props}/>}/>

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