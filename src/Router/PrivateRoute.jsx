import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from "react-router-dom";
// Component
import AuthDialog from "../Component/Dialog/AuthDialog";
// Context API
import GlobalContext from "../Context/GlobalContext";
import DialogContext from "../Context/DialogContext";
// Cookie
import {getCookie} from "../JwtToken/Cookie";

const PrivateRoute = ({component: Component, render, ...rest}) => {
    const [show, setShow] = useContext(DialogContext);
    const [path, setPath] = useContext(GlobalContext);

    // Token을 백으로 보내 유효성 검토해야됨.
    // 안그러면 그냥 접속이 가능해버림.
    useEffect(() => {
        if (!getCookie('Access-Token'))
            setShow.setAuthDialog(true);
    }, [setShow]);

    return (
        <Route {...rest}
               render={(props) =>
                   getCookie('Access-Token') ? ( // token이 있을 때
                       render ? ( // render에 값이 있을 때
                           render(props)
                       ) : ( // render에 값이 없을 때
                           <Component {...props}/>
                       )
                   ) : ( // token이 없을 때
                       <>
                           <Redirect to={{
                               pathname: path.router.currentPath,
                               state: {from: props.location}
                           }}
                           />
                           <AuthDialog/>
                       </>
                   )}
        />
    );
}

export default PrivateRoute;