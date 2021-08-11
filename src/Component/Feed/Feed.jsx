import React from 'react';
import {FeedWrapper} from "./Feed.styles";
import FeedBar from "./FeedBar";
import FeedCard from "./FeedCard";

const Feed = () => {
    return (
        <FeedWrapper>
            <FeedBar/>
            <FeedCard>

            </FeedCard>
        </FeedWrapper>
    )
}

export default Feed;