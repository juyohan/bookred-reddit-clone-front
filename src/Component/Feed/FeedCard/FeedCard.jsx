import React from 'react';
import PropTypes from "prop-types";
import FeedCardItem from "./FeedCardItem";

const FeedCard = ({feedsInfo}) => {
    console.log(typeof feedsInfo);
    return (
        <>
            {
                Array.from(feedsInfo).map(feed => (
                    <FeedCardItem key={`Feed_${feed.feedId}`}
                                  feed={feed}
                    />
                ))
            }
        </>
    )
}

FeedCard.propTypes = {
    feedsInfo : PropTypes.array,
}

export default FeedCard;