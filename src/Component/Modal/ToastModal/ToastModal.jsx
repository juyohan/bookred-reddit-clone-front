import React from 'react';
import PropTypes from "prop-types";
// css
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

ToastModal.propTypes = {
    message : PropTypes.string,
    isShowing : PropTypes.bool,
}

export default ToastModal;