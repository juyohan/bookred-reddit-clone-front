import {AUTH_BLANK_ERROR, AUTH_SIGNIN_EMAIL_BLANK, AUTH_SIGNIN_PW_BLANK} from "../../../../Helper/ErrorMessageList";

export const SignInCheckBlank = (email, pw, setIsShowing, setToastMessage) => {
    if (!email && !pw) {
        setIsShowing(true);
        setToastMessage(AUTH_BLANK_ERROR);
        return ;
    }
    else if (!email) {
        setIsShowing(true);
        setToastMessage(AUTH_SIGNIN_EMAIL_BLANK);
        return ;
    }
    else if (!pw) {
        setIsShowing(true);
        setToastMessage(AUTH_SIGNIN_PW_BLANK);
        return ;
    }

    return true;
}