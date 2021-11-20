import {useEffect, useReducer} from 'react';
// 유효성 확인
import {isEmail, isNickname, isPw} from "../Helper/Regix";
// 에러 메시지 리스트
import {
    AUTH_SIGNUP_CONFIRM_PASSWORD_ERROR,
    AUTH_SIGNUP_EMAIL_ABLE,
    AUTH_SIGNUP_EMAIL_ERROR,
    AUTH_SIGNUP_EMAIL_EXIST, AUTH_SIGNUP_NICKNAME_ABLE,
    AUTH_SIGNUP_NICKNAME_ERROR, AUTH_SIGNUP_NICKNAME_EXIST, AUTH_SIGNUP_PASSWORD_ERROR
} from "../Helper/ErrorMessageList";
// Axios
import {API} from "../AxiosAPI";

function reducer(state, action) {
    switch (action.type) {
        case 'EMAIL_NOT_VALIDATE' :
            return {
                ...state,
                emailErrorMessage: AUTH_SIGNUP_EMAIL_ERROR,
                emailStatus: false
            }
        case 'EMAIL_EXIST' :
            return {
                ...state,
                emailErrorMessage: AUTH_SIGNUP_EMAIL_EXIST,
                emailStatus: false
            }
        case 'EMAIL_ABLE' :
            return {
                ...state,
                emailErrorMessage: AUTH_SIGNUP_EMAIL_ABLE,
                emailStatus: true
            }
        case 'NICKNAME_NOT_VALIDATE' :
            return {
                ...state,
                nicknameErrorMessage: AUTH_SIGNUP_NICKNAME_ERROR,
                nicknameStatus: false
            }
        case 'NICKNAME_EXIST' :
            return {
                ...state,
                nicknameErrorMessage: AUTH_SIGNUP_NICKNAME_EXIST,
                nicknameStatus: false
            }
        case 'NICKNAME_ABLE' :
            return {
                ...state,
                nicknameErrorMessage: AUTH_SIGNUP_NICKNAME_ABLE,
                nicknameStatus: true
            }
        case 'PW_ERROR' :
            return {
                ...state,
                pwErrorMessage: AUTH_SIGNUP_PASSWORD_ERROR
            }
        case 'PW_ABLE' :
            return {
                ...state,
                pwErrorMessage: ''
            }
        case 'PW_CONFIRM_ERROR' :
            return {
                ...state,
                pwConfirmErrorMessage: AUTH_SIGNUP_CONFIRM_PASSWORD_ERROR
            }
        case 'PW_CONFIRM_ABLE' :
            return {
                ...state,
                pwConfirmErrorMessage: ''
            }
        default :
            return state;
    }
}

export const useCheckValidateAndExist = (initial, data) => {
    const [state, dispatch] = useReducer(reducer, initial);

    const {email, nickname, pw, pwConfirm} = data;

    useEffect(() => {
        if (email.length > 0)
            if (isEmail(email)) {
                API.Author.checkEmail(email)
                    .then(res => {
                        if (res.status === 200) {
                            dispatch({
                                type: 'EMAIL_ABLE'
                            })
                        }
                    })
                    .catch(err => {
                        if (err.response.status === 406 || err.response.status === 500) {
                            dispatch({
                                type: 'EMAIL_EXIST'
                            })
                        }
                    })
            } else {
                dispatch({
                    type: 'EMAIL_NOT_VALIDATE'
                })
            }
    }, [email]);

    useEffect(() => {
        if (nickname.length > 0)
            if (isNickname(nickname)) {
                API.Author.checkNickname(nickname)
                    .then(res => {
                        if (res.status === 200) {
                            dispatch({
                                type: 'NICKNAME_ABLE'
                            })
                        }
                    })
                    .catch(err => {
                        if (err.response.status === 406) {
                            dispatch({
                                type: 'NICKNAME_EXIST'
                            })
                        }
                    })
            } else {
                dispatch({
                    type: 'NICKNAME_NOT_VALIDATE'
                })
            }
    }, [nickname]);

    useEffect(() => {
        if (pw.length > 0)
            if (isPw(pw)) {
                dispatch({
                    type: 'PW_ABLE'
                })
            } else {
                dispatch({
                    type: 'PW_ERROR'
                })
            }
    }, [pw]);

    useEffect(() => {
        if (pwConfirm.length > 0)
            if (pw === pwConfirm) {
                dispatch({
                    type: 'PW_CONFIRM_ABLE'
                })
            } else {
                dispatch({
                    type: 'PW_CONFIRM_ERROR'
                })
            }
    }, [pw, pwConfirm]);

    return [state];
}