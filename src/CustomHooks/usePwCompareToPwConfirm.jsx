import {useEffect, useState} from 'react';
import {AUTH_SIGNUP_CONFIRM_PASSWORD_ERROR} from "../Helper/ErrorMessageList";

export const usePwCompareToPwConfirm = (pw, pwConfirm) => {
    const [pwConfirmErrorMessage, setPwConfirmErrorMessage] = useState('');

    useEffect(() => {
        if (pwConfirm.length > 0) {
            if (pw !== pwConfirm)
                setPwConfirmErrorMessage(AUTH_SIGNUP_CONFIRM_PASSWORD_ERROR);
            else
                setPwConfirmErrorMessage('');
        }
    },[pw, pwConfirm]);

    return [pwConfirmErrorMessage];
}
