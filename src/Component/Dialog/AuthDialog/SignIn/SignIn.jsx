import React, {useState, useContext, useRef} from 'react';
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
// css
import {AuthHandlerWrapper, AuthTitle, AuthButton} from "../AuthDialog.styles";
// Component
import ToastModal from "../../../Modal/ToastModal";
import InputWithLabel from "../InputWithLabel";
import AuthHandler from "../AuthHandler";
// Hooks
import useInput from "../../../../CustomHooks/useInput";
import useToastStatus from "../../../../CustomHooks/useToastStatus";
// Axios
import {API} from "../../../../AxiosAPI";
// error
import {
    AUTH_SIGNIN_NO_USER,
} from "../../../../Helper/ErrorMessageList";
// Function
import {SignInCheckBlank} from "../AuthDialogFunc/SignInFunc";
// Context API
import UserContext from "../../../../Context/UserContext";
import DialogContext from "../../../../Context/DialogContext";
// Cookie
import {setCookie} from "../../../../JwtToken/Cookie";


const SignIn = ({setMode}) => {
    const [{email, pw}, onChange, reset] = useInput({
        email: '',
        pw: ''
    });

    const [isShowing, setIsShowing] = useToastStatus(false);
    const [toastMessage, setToastMessage] = useState(null);
    const history = useHistory();
    const [state, actions] = useContext(UserContext);
    const [show, setShow] = useContext(DialogContext);
    // const keyRef = useRef();



    const onLogin = (e) => {
        e.preventDefault();
        // 토스트 메시지 출력
        const check = SignInCheckBlank(email, pw, setIsShowing, setToastMessage);

        if (check)
            API.Author.login(email, pw)
                .then(res => {
                    if (res.status === 200) {
                        // 쿠키의 유효 기간 설정
                        const expires = new Date();
                        expires.setMinutes(expires.getMinutes() + 60);
                        // 쿠키 생성
                        // const [cookie] = useCookies(["Access_Token"]);
                        setCookie("Access-Token", res.headers.authorization,{
                            path : '/',
                            expires : expires,
                            secure : true,
                        });
                        // 토큰 저장
                        // localStorage.setItem('Access_Token', res.headers.authorization);
                        // context에 저장
                        // actions.setJwtToken(res.headers.authorization);
                        // context에 user정보 저장
                        actions.setUserInfo({
                            username : res.data
                        });
                        // Label 초기화
                        reset();
                        // Dialog 닫기
                        setShow.setAuthDialog(false);
                        // 홈으로 이동
                        history.push('/');
                    }
                }).catch(err => {
                setIsShowing(true);
                setToastMessage(AUTH_SIGNIN_NO_USER);
            });
    }

    // 비밀번호에서만 엔터키 동작함.
    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
            onLogin(e);
    }

    return (
        <>
            <AuthTitle>
                로그인
            </AuthTitle>
            <InputWithLabel label={"이메일"}
                            name={"email"}
                            value={email}
                            onChange={onChange}
                            placeholder={"이메일"}
                            icon
            />

            <InputWithLabel label={"비밀번호"}
                            name={"pw"}
                            value={pw}
                            onChange={onChange}
                            placeholder={"비밀번호"}
                            type={"password"}
                            icon
                            handleKey={handleKeyPress}
            />

            <AuthButton type={"button"}
                        onClick={onLogin}
            >
                로그인
            </AuthButton>
            <AuthHandlerWrapper>
                <AuthHandler to={'/signup'}
                             setMode={setMode}
                             name={'signup'}
                >
                    회원가입
                </AuthHandler>
                <AuthHandler to={'/find'}
                             setMode={setMode}
                             name={'find'}
                >
                    비밀번호 찾기
                </AuthHandler>
            </AuthHandlerWrapper>
            {isShowing && <ToastModal message={toastMessage}
                                      isShowing={isShowing}
            />}
        </>
    )
}

SignIn.propTypes = {
    setMode: PropTypes.func,
}

SignIn.defaultProps = {
    setMode: 'login',
}

export default SignIn;