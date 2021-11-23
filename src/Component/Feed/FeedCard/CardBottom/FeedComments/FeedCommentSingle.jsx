import React from 'react';
import {
    CommentBackground,
    CommentBackgroundDiv,
    CommentImage,
    CommentText,
    CommentTextWrapper,
    CommentUsername,
    CommentWrapper
} from "./FeedComments.styles";

const FeedCommentSingle = ({comment}) => {
    return (
        <li>
            <CommentWrapper>
                <CommentImage>
                    <img src={"http://localhost:8080/api/file/image?fileName=SpringSecurity.png"}
                         alt={""}
                    />
                </CommentImage>
                <CommentTextWrapper>
                    <CommentBackgroundDiv>
                        <CommentBackground>
                            <CommentUsername>
                                {comment.username}
                            </CommentUsername>
                            <CommentText>
                                {comment.content}
                            </CommentText>
                        </CommentBackground>
                    </CommentBackgroundDiv>
                </CommentTextWrapper>
            </CommentWrapper>
        </li>
    )
}

export default FeedCommentSingle;