import React, {useContext, useState} from 'react';
import {
    DraftButton,
    PostButton,
    PostButtonContainer,
    PostButtonDiv,
    PostButtonWrapper
} from "./PostButtons.styles";
import PostButtonSingle from "./PostButtonSingle";
import PostContext from "../../../../../Context/PostDataContext";
import {API} from "../../../../../AxiosAPI";
import {useHistory} from "react-router-dom";
import UserContext from "../../../../../Context/UserContext";

const postButtonList = [
    {
        id: 'save-draft',
        title: 'SAVE DRAFT',
    },
    {
        id: 'post',
        title: 'POST',
    }
]

const PostButtons = () => {
    const [post, setPost] = useContext(PostContext);
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    console.log(user.userInfo);

    const onClickButton = (e) => {
        e.preventDefault();
        API.FeedData.saveFeed(post.postData, null)
            .then(res => {
                // 해당 피드의 페이지로
                if (res.status === 200) {
                    history.push(`/user/${user.userInfo.username}/comments/${post.postData.title}`)
                }
            }).catch(err => {
                console.log(err);
        })
    }

    return (
        <PostButtonWrapper>
            <PostButtonContainer>
                {/*{*/}
                {/*    postButtonList.length > 0 && postButtonList.map(item => (*/}
                {/*        <PostButtonSingle key={`POST_BUTTON_${item.id}`}*/}
                {/*                          item={item}*/}
                {/*        />*/}
                {/*    ))*/}
                {/*}*/}

                {/* Post Button */}
                <PostButtonDiv>
                    <PostButton disabled={post.buttonState.post}
                                onClick={onClickButton}
                    >
                        post
                    </PostButton>
                </PostButtonDiv>

                {/* Draft Button */}
                <PostButtonDiv>
                    <DraftButton disabled={post.buttonState.draft}>
                        save draft
                    </DraftButton>
                </PostButtonDiv>

            </PostButtonContainer>
        </PostButtonWrapper>
    );
}

export default PostButtons;