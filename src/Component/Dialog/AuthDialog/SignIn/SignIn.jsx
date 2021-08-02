import React from 'react';
import PropTypes from "prop-types";
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
import {AuthorAPI} from "../../../../AxiosAPI";

const SignIn = ({setMode}) => {
    const [{email, pw}, onChange, reset] = useInput({
        email : '',
        pw : ''
    },'login');

    const [isShowing, setIsShowing] = useToastStatus(false);

    const onLogin = (e) => {
        e.preventDefault();

        if (!pw && !email)
            setIsShowing(true);
        else if (!email)
            setIsShowing(true);
        else if (!pw)
            setIsShowing(true);
        else {
            AuthorAPI.login(email, pw)
                .then(res => {
                    if (res.status === 200) {
                        const {jwtToken, username} = res.data;
                        // 토큰 저장
                        localStorage.setItem("Access_Token", jwtToken);
                        // 초기화
                        reset();
                    }
                }).catch(err => {
                    if (err.response.status === 401)
                        console.log("이메일이나 패스워드 틀림");
                    else if (err.response.status === 403)
                        console.log("아예 없음");
            });
        }
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
            {isShowing && <ToastModal message={"sdfsdf"}
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