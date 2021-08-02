import React, {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {IoClose} from "react-icons/all";
// css
import {
    AuthDialogBackGround,
    AuthDialogContent,
    AuthDialogHeader,
    AuthDialogLogo,
    AuthDialogWrapper
} from "./AuthDialog.styles";
// 컴포넌트
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import FindPw from "./FindPw/FindPw";

const AuthDialog = ({isShowing, close}) => {
    const [mode, setMode] = useState('login');

    useEffect(() => {
        if (!isShowing)
            setMode('login');
    },[isShowing])

    if (isShowing)
        return (
            <AuthDialogBackGround>
                <AuthDialogWrapper>
                    <AuthDialogLogo onClick={close}>
                        <IoClose size={"35"}/>
                    </AuthDialogLogo>
                    <AuthDialogHeader>
                        BookRed
                    </AuthDialogHeader>
                    <AuthDialogContent>
                        {
                            mode === 'login' ?
                                <SignIn setMode={setMode}>
                                </SignIn>
                                : mode === 'signup' ?
                                <SignUp setMode={setMode}>
                                </SignUp>
                                : mode === 'find' ?
                                    <FindPw setMode={setMode}>
                                    </FindPw>
                                    : null
                        }
                    </AuthDialogContent>
                </AuthDialogWrapper>
            </AuthDialogBackGround>
        )
    else
        return null;
}

AuthDialog.propTypes = {
    isShowing : PropTypes.bool,
    close : PropTypes.func,
}

AuthDialog.defaultProps = {
    isShowing: false,
}

export default AuthDialog;