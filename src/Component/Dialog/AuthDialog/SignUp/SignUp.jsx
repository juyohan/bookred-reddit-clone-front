import React, {useState, useEffect} from 'react';
// css
import {AuthButton, AuthTitle} from "../AuthDialog.styles";
// 컴포넌트
import InputWithLabel from "../InputWithLabel";
import AuthHandler from "../AuthHandler";
import ToastModal from "../../../Modal/ToastModal";
// 커스텀 훅
import useInput from "../../../../CustomHooks/useInput";
import useToastStatus from "../../../../CustomHooks/useToastStatus";
// Axios
import {AuthorAPI} from "../../../../AxiosAPI";
// 커스텀 함수
import {SignUpToBack} from "../AuthDialogFunc/SignUpFunc";

const SignUp = ({setMode}) => {
    const [data, onChange, reset, validate] = useInput({
        email: '',
        nickname: '',
        pw: '',
        pwConfirm: ''
    });

    const {email, nickname, pw, pwConfirm} = data;
    const [isShowing, setIsShowing] = useToastStatus(false);
    const [toastMessage, setToastMessage] = useState(null);

    const onSignUp = (e) => {
        e.preventDefault();

        setToastMessage(SignUpToBack(data, validate, setIsShowing));
        if (toastMessage === null)
            AuthorAPI.signUp({email, nickname, pw})
                .then(res => {
                    if (res.status === 200) {
                        setMode('login');
                        reset();
                    }
                });
        else
            return null;
    }

    return (
        <>
            <AuthTitle>
                회원가입
            </AuthTitle>
            <InputWithLabel label={"이메일"}
                            name={"email"}
                            value={email}
                            onChange={onChange}
                            placeholder={"이메일"}
            />
            {

            }

            <InputWithLabel label={"닉네임"}
                            name={"nickname"}
                            value={nickname}
                            onChange={onChange}
                            placeholder={"닉네임 (10자 이하)"}
                            maxLength={10}
            />
            {

            }

            <InputWithLabel label={"비밀번호"}
                            name={"pw"}
                            value={pw}
                            onChange={onChange}
                            type={"password"}
                            placeholder={"비밀번호 (문자, 숫자, 특수문자 포함 8~15자)"}
                            maxLength={15}
            />
            {

            }

            <InputWithLabel label={"비밀번호 확인"}
                            name={"pwConfirm"}
                            value={pwConfirm}
                            onChange={onChange}
                            type={"password"}
                            placeholder={"비밀번호 확인"}
                            maxLength={15}
            />
            {

            }

            <AuthButton onClick={onSignUp}
                        type={"button"}
            >
                회원가입
            </AuthButton>
            <AuthHandler to={'/login'}
                         setMode={setMode}
                         name={'login'}
            >
                로그인
            </AuthHandler>
            {
                isShowing && <ToastModal message={toastMessage}
                                         isShowing={isShowing}
                />
            }
        </>
    )
}

export default SignUp;