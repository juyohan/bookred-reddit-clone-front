import {
    AUTH_BLANK_ERROR, AUTH_SIGNUP_CONFIRM_PASSWORD_ERROR,
    AUTH_SIGNUP_EMAIL_ERROR,
    AUTH_SIGNUP_NICKNAME_ERROR, AUTH_SIGNUP_PASSWORD_ERROR
} from "../../../../Helper/ErrorMessageList";
import {MessageDiv} from "../SignUp/SignUp.styles";
import {isEmail, isNickname, isPw} from "../../../../Helper/Regix";

export const SignUpToBack = (data, setIsShowing, setToastMessage) => {
    const {email, nickname, pw, pwConfirm} = data;

    // 한칸이라도 빈칸이 존재할 때
    if (!email || !nickname || !pw || !pwConfirm) {
        setIsShowing(true);
        setToastMessage(AUTH_BLANK_ERROR);
        return ;
    }
    // 각 칸별로 유효성 체크
    else if (isEmail(email) === false) {
        setIsShowing(true);
        setToastMessage(AUTH_SIGNUP_EMAIL_ERROR);
        return ;
    } else if (isNickname(nickname) === false) {
        setIsShowing(true);
        setToastMessage(AUTH_SIGNUP_NICKNAME_ERROR);
        return ;
    } else if (isPw(pw) === false) {
        setIsShowing(true);
        setToastMessage(AUTH_SIGNUP_PASSWORD_ERROR);
        return ;
    } else if (pw !== pwConfirm) {
        setIsShowing(true);
        setToastMessage(AUTH_SIGNUP_CONFIRM_PASSWORD_ERROR);
        return ;
    }

    return true;
}

export const SignUpCheckInput = (message, status) => {
    if (message) {
        if (status)
            return <MessageDiv divAnimation status>
                {message}
            </MessageDiv>
        else
            return <MessageDiv divAnimation >
                {message}
            </MessageDiv>
    } else
        return <MessageDiv/>
}
