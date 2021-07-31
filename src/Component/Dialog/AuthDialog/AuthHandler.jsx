import React from 'react';
import {AuthBottomRight, AuthBottomRightWrapper} from "./AuthDialog.styles";
import PropTypes from "prop-types";

const AuthHandler = ({to, setMode, name, children}) => {
    const onHandler = (e) => {
        e.preventDefault();
        setMode(name);
    }

    return (
    <AuthBottomRightWrapper>
        <AuthBottomRight to={to} onClick={onHandler}>
            {children}
        </AuthBottomRight>
    </AuthBottomRightWrapper>
    );
}

AuthHandler.propTypes = {
    to : PropTypes.string,
    setMode : PropTypes.func,
    name : PropTypes.string,
    children : PropTypes.string,
}

export default AuthHandler;