import React from 'react';
import {
    CommentInputForm,
    CommentInputFormDiv,
    CommentInputTextDiv
} from "./FeedComments.styles";

const CommentInputDiv = ({children}) => {
    return (
        <CommentInputTextDiv>
            <CommentInputForm>
                <CommentInputFormDiv>
                    <div style={{
                        position: 'relative',
                    }}>
                        {children}
                    </div>
                </CommentInputFormDiv>
            </CommentInputForm>
        </CommentInputTextDiv>
    )
}

export default CommentInputDiv;