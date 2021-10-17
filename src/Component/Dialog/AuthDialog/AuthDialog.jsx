import React, {useState, useEffect, useContext} from 'react';
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
import DialogContext from "../../../Context/DialogContext";

const AuthDialog = () => {
    const [mode, setMode] = useState('login');
    const [show, setShow] = useContext(DialogContext);

    useEffect(() => {
        if (!show.authDialog)
            setMode('login');
    }, [show.authDialog])

    if (show.authDialog)
        return (
            <AuthDialogBackGround>
                <AuthDialogWrapper>
                    <AuthDialogLogo onClick={(e) => {
                        e.preventDefault();
                        setShow.setAuthDialog(false);
                    }}>
                        <IoClose size={"35"}/>
                    </AuthDialogLogo>
                        <AuthDialogHeader>
                            BookRed
                        </AuthDialogHeader>
                        <AuthDialogContent>
                            {
                                mode === 'login' ?
                                    <SignIn setMode={setMode}
                                    />
                                    : mode === 'signup' ?
                                        <SignUp setMode={setMode}/>
                                        : mode === 'find' ?
                                            <FindPw setMode={setMode}/>
                                            : null
                            }
                        </AuthDialogContent>
                </AuthDialogWrapper>
            </AuthDialogBackGround>
        )
    else
        return null;
}

export default AuthDialog;