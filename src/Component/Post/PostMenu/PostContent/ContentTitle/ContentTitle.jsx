import React, {useContext, useEffect, useRef} from 'react';
import {ContentTitleWrapper, InputTitle, InputTitleLen, TitleDiv} from "./ContentTitle.styles";
import PostContext from "../../../../../Context/PostDataContext";

const ContentTitle = () => {
    const [post, setPost] = useContext(PostContext);
    const ref = useRef();

    const inputTitleChange = (e) => {
        setPost.setPostData({
            ...post.postData,
            title: e.target.value
        });
    }

    useEffect(() => {
        if (post.postData.title === undefined || post.postData.title.length === 0)
            setPost.setButtonState({
                ...post.buttonState,
                post: true
            })
        else
            setPost.setButtonState({
                ...post.buttonState,
                post: false,
            })
    }, [post.postData.title])


    return (
        <ContentTitleWrapper ref={ref}>
            <TitleDiv>
                <InputTitle maxLength={'300'}
                            placeholder={'Title'}
                            onChange={inputTitleChange}
                />
                <InputTitleLen>
                    {
                        (post.postData.title === undefined) ? 0 : post.postData.title.length
                    }
                    /300
                </InputTitleLen>
            </TitleDiv>
        </ContentTitleWrapper>
    );
}

export default ContentTitle;