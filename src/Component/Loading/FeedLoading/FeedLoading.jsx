import React from 'react';
import Loader from 'react-loader-spinner'
import {FeedLoadingDiv, FeedLoadingWrapper} from "./FeedLoading.styles";

const FeedLoading = () => {
    return (
        <FeedLoadingWrapper>
            <FeedLoadingDiv>
                <Loader type={'Oval'}
                        color={'black'}
                        height={40}
                        width={40}
                />
                <span>
            게시글을 가져오는 중입니다.
            </span>
            </FeedLoadingDiv>
        </FeedLoadingWrapper>
    )
}

export default FeedLoading;
