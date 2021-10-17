import React from 'react';
import {DraftButton, DraftCount, PostTitleDiv, PostTitleWrapper} from "./PostTitle.styles";

const PostTitle = () => {
    return(
        <PostTitleWrapper>
            <PostTitleDiv>
                Create a post
            </PostTitleDiv>
            <DraftButton>
                Drafts
                <DraftCount>
                    0
                </DraftCount>
            </DraftButton>
        </PostTitleWrapper>
    )
}

export default PostTitle