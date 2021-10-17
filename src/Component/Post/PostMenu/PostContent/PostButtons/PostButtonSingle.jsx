import React from 'react';
import {PostButtonDiv} from "./PostButtons.styles";

const PostButtonSingle = ({item}) => {
    return (
        <PostButtonDiv>
            {/*<PostButtons>*/}
                {item.title}
            {/*</PostButtons>*/}
        </PostButtonDiv>
    )
}

export default PostButtonSingle;