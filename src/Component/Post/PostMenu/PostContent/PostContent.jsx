import React from 'react';
import {ContentWrapper} from "./PostContent.styles";
import ContentTitle from "./ContentTitle";
import CustomEditor from "./TextCustomEditor";
import PostButtons from "./PostButtons";

const PostContent = () => {
    return (
        <ContentWrapper>
            {/* 제목 */}
            <ContentTitle/>

            {/* 내용 */}
            <CustomEditor/>

            <PostButtons/>
        </ContentWrapper>
    )
}

export default PostContent;