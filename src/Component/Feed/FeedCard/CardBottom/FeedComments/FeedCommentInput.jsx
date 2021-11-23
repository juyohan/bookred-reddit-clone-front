import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
    CommentImage, CommentInput,
    CommentInputWrapper
} from "./FeedComments.styles";
import CommentInputDiv from "./CommentInputDiv";
import {API} from "../../../../../AxiosAPI";

const FeedCommentInput = ({feedKey}) => {
    const [value, setValue] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        if (ref === null || ref.current === null) {
            return;
        }
        ref.current.style.height = '14px';
        ref.current.style.height = ref.current.scrollHeight + 'px';
    }, []);

    const handleResizeHeight = useCallback(() => {
        if (ref === null || ref.current === null) {
            return;
        }
        ref.current.style.height = '14px';
        ref.current.style.height = ref.current.scrollHeight + 'px';
    }, []);

    const onChangeComment = useCallback((e) => {
        e.preventDefault();
        setValue(e.target.value);
    },[]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.altKey === true) {
            setValue(value.concat('\n'));
            ref.current.style.height = ref.current.scrollHeight + 13 + 'px';
        } else if (e.key === 'Enter') {
            e.preventDefault();
            postServer();
        }
    }

    // 서버에 값 전송
    const postServer = () => {
        // 전송
        const data = value.replaceAll("<br>", "\r\n");
        API.FeedData.saveComment(data, feedKey).then(res => {
            if (res.status === 200) {
                setValue("");
                ref.current.style.height = '21px';
            }
        })
    }

    return (
        <CommentInputWrapper>
            <CommentImage>
                <img src={"http://localhost:8080/api/file/image?fileName=SpringSecurity.png"}
                     alt={""}
                />
            </CommentImage>
            <CommentInputDiv value={value}>
                <CommentInput value={value}
                              spellCheck={true}
                              ref={ref}
                              onInput={handleResizeHeight}
                              placeholder={'댓글을 입력하세요...'}
                              onChange={onChangeComment}
                              onKeyDown={handleKeyPress}
                />
            </CommentInputDiv>
        </CommentInputWrapper>
    )
}

export default FeedCommentInput;