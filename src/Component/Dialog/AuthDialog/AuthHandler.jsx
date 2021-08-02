import React from 'react';
import PropTypes from "prop-types";
// css
import {AuthBottomRight, AuthBottomRightWrapper} from "./AuthDialog.styles";

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