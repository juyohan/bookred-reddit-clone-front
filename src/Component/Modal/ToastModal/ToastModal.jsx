import React from 'react';
import {MessageAction, MessageWrapper} from "./ToastModal.styles";

const ToastModal = ({message, isShowing}) => {
    if (isShowing)
        return (
            <MessageWrapper>
                <MessageAction>
                    {message}
                </MessageAction>
            </MessageWrapper>
        );
    else
        return null;
}

export default ToastModal;