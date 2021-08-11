import React, {useState, useContext} from 'react';
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
import {SignUpCheckInput, SignUpToBack} from "../AuthDialogFunc/SignUpFunc";
import {useCheckValidateAndExist} from "../../../../CustomHooks/useCheckValidateAndExist";
import UserContext from "../../../../Context/UserContext";
import AuthLoading from "../../../Loading/AuthLoading/AuthLoading";
import DialogContext from "../../../../Context/DialogContext";

const SignUp = ({setMode}) => {
    const [data, onChange, reset] = useInput({
        email: '',
        nickname: '',
        pw: '',
        pwConfirm: ''
    });

    const [{
        emailErrorMessage, nicknameErrorMessage, pwErrorMessage, pwConfirmErrorMessage
        , emailStatus, nicknameStatus
    }] = useCheckValidateAndExist({
        emailErrorMessage: '',
        nicknameErrorMessage: '',
        pwErrorMessage: '',
        pwConfirmErrorMessage: '',

        emailStatus: null,
        nicknameStatus: null
    }, data);
    const [state, actions] = useContext(UserContext);

    const {email, nickname, pw, pwConfirm} = data;
    const [isShowing, setIsShowing] = useToastStatus(false);
    const [toastMessage, setToastMessage] = useState(null);

    const onSignUp = (e) => {
        e.preventDefault();

        // setToastMessage(SignUpToBack(data, setIsShowing, ));
        const check = SignUpToBack(data, setIsShowing, setToastMessage);
        if (check === true) {
            actions.setIsLoading(true);
            AuthorAPI.signUp({email, nickname, pw})
                .then(res => {
                    if (res.status === 200) {
                        actions.setIsLoading(false);
                        setMode('login');
                        reset();
                    }
                });
        }
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
            {SignUpCheckInput(emailErrorMessage, emailStatus)}

            <InputWithLabel label={"닉네임"}
                            name={"nickname"}
                            value={nickname}
                            onChange={onChange}
                            placeholder={"닉네임 (10자 이하)"}
                            maxLength={10}
            />
            {SignUpCheckInput(nicknameErrorMessage, nicknameStatus)}

            <InputWithLabel label={"비밀번호"}
                            name={"pw"}
                            value={pw}
                            onChange={onChange}
                            type={"password"}
                            placeholder={"비밀번호 (문자, 숫자, 특수문자 포함 8~15자)"}
                            maxLength={15}
            />
            {SignUpCheckInput(pwErrorMessage)}

            <InputWithLabel label={"비밀번호 확인"}
                            name={"pwConfirm"}
                            value={pwConfirm}
                            onChange={onChange}
                            type={"password"}
                            placeholder={"비밀번호 확인"}
                            maxLength={15}
            />
            {SignUpCheckInput(pwConfirmErrorMessage)}

            {
                state.isLoading ? <AuthLoading/> :
                    <AuthButton onClick={onSignUp}
                                type={"button"}
                    >
                        회원가입
                    </AuthButton>
            }
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