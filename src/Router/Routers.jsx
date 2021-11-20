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
import KakaoAuth from "../Component/Dialog/AuthDialog/SignIn/KakaoAuth";
import UserContext from "../Context/UserContext";

const Routers = () => {
    const [path, setPath] = useContext(GlobalContext);
    const {pathname} = useLocation();
    const [state, actions] = useContext(UserContext);

    useEffect(() => {
        if (path.router.currentPath !== pathname) {
            setPath.setRouter({
                currentPath: pathname,
                prevPath: path.router.currentPath
            });
        }
    }, [pathname]);

    useEffect(() => {
        console.log(state.userInfo.id);
    }, [state.userInfo]);

    // setCookie('Access-Token', "sdkfjsldkjflksdjf");

    return (
        <>
            <Header/>
            <Switch>
                {/* 홈 화면 */}
                <Route exact path={['/', '/hot','/home', '/new', '/rising', '/top']} render={props => <Home {...props}/>}/>

                {/* Header Menu */}
                <Route path={'/group'} render={props => <Home {...props}/>}/>
                <Route path={'/post'} render={props => <Post {...props}/>}/>
                <Route path={'/setting'} render={props => <ConfirmUser {...props}/>}/>

                {/* 프로필 화면 */}
                <PrivateRoute path={'/user/:username'}
                              render={props =>
                                  <Profile {...props}
                                  />
                              }
                />

                <Route path={'/kakao/login'} render={props => <KakaoAuth {...props}/>}/>

            </Switch>
        </>
    );
}

export default Routers;