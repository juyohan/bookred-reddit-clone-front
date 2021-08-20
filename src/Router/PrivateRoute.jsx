import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from "react-router-dom";
import Token from "../JwtToken/Token";
import AuthDialog from "../Component/Dialog/AuthDialog";
import UserContext from "../Context/UserContext";
import GlobalContext from "../Context/GlobalContext";
import DialogContext from "../Context/DialogContext";

const PrivateRoute = ({component: Component, render, ...rest}) => {
    const [show, setShow] = useContext(DialogContext);
    const [path, setPath] = useContext(GlobalContext);

    console.log("prev : " + path.router.prevPath)
    console.log("current : " + path.router.currentPath)

    // Token을 백으로 보내 유효성 검토해야됨.
    // 안그러면 그냥 접속이 가능해버림.
    useEffect(() => {
        if (!Token())
            setShow.setAuthDialog(true);
    }, [setShow]);

    return (
        <Route {...rest}
               render={(props) =>
                   Token() ? ( // token이 있을 때
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