import React from 'react';
import PostMenu from "./PostMenu";
import {PostContainer, PostMainMenu, PostSideMenu, PostWrapper} from "./Post.styles";
import PostTitle from "./PostTitle";

const Post = () => {

    return (
        <PostContainer>
            <PostWrapper>
                <PostMainMenu>
                    {/* 최상단 제목 */}
                    <PostTitle/>
                    {/* 게시글의 종류 및 내용 */}
                    <PostMenu/>
                </PostMainMenu>
                <PostSideMenu>
                    Side Menu
                </PostSideMenu>
            </PostWrapper>
        </PostContainer>
    );
}

export default Post;