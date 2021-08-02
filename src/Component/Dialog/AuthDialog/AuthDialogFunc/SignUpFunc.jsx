import {
    AUTH_BLANK_ERROR, AUTH_SIGNUP_CONFIRM_PASSWORD_ERROR,
    AUTH_SIGNUP_EMAIL_ERROR,
    AUTH_SIGNUP_NICKNAME_ERROR, AUTH_SIGNUP_PASSWORD_ERROR
} from "../../../../Helper/ErrorMessageList";

const ErrorStatus = (status) => {


}

export const SignUpToBack = (data, validate, setIsShowing) => {
    const {email, nickname, pw, pwConfirm} = data;
    const {emailValidate, nicknameValidate, pwValidate} = validate;

    // 한칸이라도 빈칸이 존재할 때
    if(!email && !nickname && !pw && !pwConfirm) {
        setIsShowing(true);
        return AUTH_BLANK_ERROR;
    }
    // 각 칸별로 유효성 체크
    else if (emailValidate === false) {
        setIsShowing(true);
        return AUTH_SIGNUP_EMAIL_ERROR
    }
    else if (nicknameValidate === false) {
        setIsShowing(true);
        return AUTH_SIGNUP_NICKNAME_ERROR
    }
    else if (pwValidate === false) {
        setIsShowing(true);
        return AUTH_SIGNUP_PASSWORD_ERROR
    }
    else if (pw !== pwConfirm) {
        setIsShowing(true);
        return AUTH_SIGNUP_CONFIRM_PASSWORD_ERROR
    }

    return true;
}

export const SignUpCheckInput = () => {

}
